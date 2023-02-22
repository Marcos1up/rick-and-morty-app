const { characterById } = require("../../utilities/characterById");

async function getCharacterById(req, res) {
    const id = req.params.id;
    try {
        const filtered = await characterById(id);

        filtered
            ? res.status(200).send(filtered)
            : res.status(400).send({
                  message:
                      "No se pudo encontrar el personaje con el ID proporcionado",
              });
    } catch (error) {
        console.error({ message: error.message }, error);
        res.status(500).send(error.message);
    }
}

module.exports = {
    getCharacterById,
};
