const Character = require("../models/Character");
const DbCharacter = require("../models/dbCharacter");

async function characterQuery(name) {
    try {
        const apiCharacters = await Character.find({
            name: { $regex: name, $options: "i" }, //expresión regular para que la búsqueda no sea sensible a mayúsculas y minúsculas
        });
        const createdCharacters = await DbCharacter.find({
            name: { $regex: name, $options: "i" },
        });

        const allCharacters = [...createdCharacters, ...apiCharacters];

        if (!allCharacters.length) {
            throw new Error(
                "No se encontraron personajes que coincidan con el nombre proporcionado."
            );
        }

        return allCharacters;
    } catch (error) {
        console.error(error);
        throw new Error("Ocurrió un error inesperado al buscar el personaje.");
    }
}

module.exports = {
    characterQuery,
};
