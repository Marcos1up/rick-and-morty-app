const { allCharactersApi } = require("../../apiConect/characterApi");
const { characterQuery } = require("../../utilities/characterQuery");

async function getAllCharacter(req, res) {
    const name = req.query.name;

    try {
        const allCharacters = await allCharactersApi();

        if (name) {
            const character = await characterQuery(name, allCharacters);

            character.length
                ? res.status(200).send(character)
                : res.status(400).send({
                      message:
                          "No se pudo encontrar el personaje que estás buscando",
                  });
        } else {
            allCharacters.length
                ? res.status(200).send(allCharacters)
                : res.status(404).send({
                      message:
                          "No se encontraron los personajes. Verifique posibles problemas con la API",
                  });
        }
    } catch (error) {
        console.error({ message: error.message }, error);
        res.status(500).send({
            message: error.message,
        });
    }
}

module.exports = { getAllCharacter };
