const { createCharacter } = require("../../utilities/createCharacter");

async function postCharacter(req, res) {
    const info = req.body;
    try {
        const result = await createCharacter(info);

        result
            ? res.status(201).send(result)
            : res.status(502).send({
                  message:
                      "Error al subir el personaje a la DB. Verifique que la informacion ingresada sea correcta",
              });
    } catch (error) {
        console.error({ message: error.message });
        res.status(500).send({ message: error.message });
    }
}

module.exports = { postCharacter };
