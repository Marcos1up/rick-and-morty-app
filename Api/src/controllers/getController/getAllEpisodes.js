const { allEpisodesApi } = require("../../connections/apiConnect/episodeApi");

async function getAllEpisodes(req, res) {
    try {
        const allEpisodes = await allEpisodesApi();

        allEpisodes && allEpisodes.length > 0
            ? res.status(200).send(allEpisodes)
            : res.status(404).send({
                  message: "No se encontraron episodios en la API",
              });
    } catch (error) {
        console.error({ message: error.message }, error);
        res.status(500).send({
            message: "Error al realizar el llamado a la API",
        });
    }
}

module.exports = { getAllEpisodes };
