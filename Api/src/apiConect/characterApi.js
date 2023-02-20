const axios = require("axios");
//const Character = require("../models/Character");

async function allCharactersApi(req, res) {
    const url = "https://rickandmortyapi.com/api/character";
    try {
        let allCharacters = (await axios.get(url)).data.results;

        allCharacters = allCharacters.map((e) => {
            return {
                id: e.id,
                name: e.name,
                species: e.species,
                origin: e.origin.name,
                image: e.image,
                created: e.created,
            };
        });

        allCharacters.length
            ? res.status(200).send(allCharacters)
            : res.status(400).send({
                  message: "Error al conectarse con la API",
              });
    } catch (error) {
        console.error({ message: error.message }, error);
    }
}

module.exports = { allCharactersApi };
