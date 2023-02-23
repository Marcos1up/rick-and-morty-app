const { allCharacter } = require("../../utilities/allCharacters");
const { characterQuery } = require("../../utilities/characterQuery");

async function getAllCharacter(req, res) {
    const name = req.query.name;

    try {
        const allCharacters = await allCharacter();

        if (name) {
            const filterCharacter = await characterQuery(name);

            filterCharacter.length
                ? res.status(200).send(filterCharacter)
                : res.status(400).send({
                      message:
                          "No se pudo encontrar el personaje que estás buscando.",
                  });
        } else {
            allCharacters.length
                ? res.status(200).send(allCharacters)
                : res.status(404).send({
                      message:
                          "No se encontraron los personajes. Verifique posibles problemas con la API.",
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
