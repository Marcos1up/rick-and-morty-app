const dbCharacter = require("../models/dbCharacter");

async function createCharacter(data) {
    try {
        const newCharacter = new dbCharacter();

        if (!data) {
            throw new Error(
                "Error al subir el personaje a la DB. Verifique que la informacion ingresada sea correcta."
            );
        } else {
            newCharacter.name = data.name;
            newCharacter.image = data.image;
            newCharacter.species = data.species;
            newCharacter.origin = data.origin;

            newCharacter.save();
            return newCharacter;
        }
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
    }
}

module.exports = { createCharacter };
