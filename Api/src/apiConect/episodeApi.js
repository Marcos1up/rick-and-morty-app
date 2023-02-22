const axios = require("axios");

async function allEpisodesApi() {
    const url = "https://rickandmortyapi.com/api/episode";
    try {
        const response = await axios.get(url);

        const allEpisodes = response.data.results.map((e) => {
            return {
                id: e.id,
                name: e.name,
                date: e.air_date,
                characters: e.characters,
            };
        });

        if (!allEpisodes.length) {
            throw new Error("No se encontraron episodios en la API");
        }

        return allEpisodes;
    } catch (error) {
        console.error(error.message, error);
        throw new Error("Error al realizar el llamado de episodios a la API");
    }
}

module.exports = { allEpisodesApi };
