const Character = require("../models/Character");

async function createCharacter(data) {
    try {
        const newCharacter = new Character();

        if (!data) {
            throw new Error(
                "Error al subir el personaje a la DB. Verifique que la informacion ingresada sea correcta."
            );
        } else {
            newCharacter.id = data.id;
            newCharacter.name = data.name;
            newCharacter.image = data.image;
            newCharacter.species = data.species;
            newCharacter.origin = data.origin;
            newCharacter.created = data.created;

            newCharacter.save();
            return newCharacter;
        }
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
    }
}

module.exports = { createCharacter };
