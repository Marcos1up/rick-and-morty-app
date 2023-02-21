const axios = require("axios");

async function allCharactersApi() {
    const url = "https://rickandmortyapi.com/api/character";
    try {
        const response = await axios.get(url);

        let allCharacters = response.data.results.map((e) => {
            return {
                id: e.id,
                name: e.name,
                species: e.species,
                origin: e.origin.name,
                image: e.image,
                created: e.created,
            };
        });

        if (!allCharacters.length) {
            throw new Error(
                "Error al realizar el llamado de characters a la API"
            );
        }

        return allCharacters;
    } catch (error) {
        console.error({ message: error.message }, error);
    }
}

module.exports = { allCharactersApi };
