//const { characterById } = require("../../utilities/characterById");
const Character = require("../../models/Character");
const dbCharacter = require("../../models/dbCharacter");

async function getCharacterById(req, res) {
    try {
        const characterId = req.params.id;
        const character = await Character.findById(characterId);
        const dbCharacters = await dbCharacter.findById(characterId);

        if (!character && !dbCharacters) {
            return res.status(404).send({
                message: `No se encontró el personaje con el id ${characterId}`,
            });
        }

        return res.status(200).send({
            character: character || dbCharacters,
        });
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
        return res.status(500).send({
            message: "Ocurrió un error al obtener el personaje por ID",
        });
    }
}

module.exports = {
    getCharacterById,
};
