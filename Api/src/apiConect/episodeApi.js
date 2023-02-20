const axios = require("axios");

async function allEpisodesApi(req, res) {
    const url = "https://rickandmortyapi.com/api/episode";
    try {
        const allEpisodes = await axios.get(url).data.results;

        allEpisodes = allEpisodes.map((e) => {
            return {
                id: e.id,
                name: e.name,
            };
        });

        allEpisodes.length
            ? res.status(200).send(allEpisodes)
            : res.status(400).send({
                  message: "No se pudo extraer los episodios de la API",
              });
    } catch (error) {
        console.error({ message: error.message }, error);
    }
}

module.exports = { allEpisodesApi };
