const {
    allCharactersApi,
} = require("../connections/apiToDbConnect/dbAllCharacter");

async function characterById(data) {
    const allCharacters = await allCharactersApi();

    if (!allCharacters.length) {
        throw new Error("No se encontraron personajes en la API.");
    }

    const result = allCharacters.find((e) => e.id.toString() === data);

    if (!result) {
        throw new Error(`No se encontraron personajes con la ID: ${data}`);
    }
    return result;
}

module.exports = { characterById };
