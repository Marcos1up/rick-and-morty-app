const {
    dbAllCharacter,
} = require("../connections/apiToDbConnect/dbAllCharacter");
const Character = require("../models/Character");
const DbCharacter = require("../models/dbCharacter");

async function allCharacter() {
    try {
        const allCharactersFromApi = await dbAllCharacter();

        if (!allCharactersFromApi.length) {
            throw new Error(
                "No se encontraron personajes en la base de datos. Revise posible problemas enviando los datos desde la API a la DB."
            );
        } else {
            const apiCharacters = await Character.find();
            const createdCharacters = await DbCharacter.find();

            return [createdCharacters, apiCharacters];
        }
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
        throw new Error(
            "Ha ocurrido un error inesperado al obtener TODOS los personajes."
        );
    }
}

module.exports = {
    allCharacter,
};
