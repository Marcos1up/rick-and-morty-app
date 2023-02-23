const Character = require("../../models/Character");
const { allCharactersApi } = require("../apiConnect/characterApi");

async function dbAllCharacter() {
    try {
        const allCharacters = await Character.find();
        if (allCharacters.length) {
            return allCharacters;
        }

        const data = await allCharactersApi();
        if (!data || !data.length) {
            throw new Error("Error al llamar los personajes desde la API.");
        } else {
            const apiCharacters = data.map((e) => {
                const apiCharacter = new Character();

                apiCharacter.name = e.name;
                apiCharacter.image = e.image;
                apiCharacter.species = e.species;
                apiCharacter.origin = e.origin;
                apiCharacter.created = e.created;

                return apiCharacter.save();
            });

            return Promise.all(apiCharacters); //devuelve una promesa que se resuelve cuando se guardan todos los personajes descargados.
        }
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
    }
}

module.exports = { dbAllCharacter };
