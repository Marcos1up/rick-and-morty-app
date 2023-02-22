async function characterQuery(data, allCharacters) {
    if (!allCharacters.length) {
        throw new Error("No se encontraron personajes en la API.");
    }

    const result = allCharacters.filter((e) =>
        e.name.toLowerCase().includes(data.toLowerCase())
    );

    if (!result.length) {
        throw new Error(`No se encontraron personajes que contengan: ${data}`);
    }

    return result;
}

module.exports = { characterQuery };
