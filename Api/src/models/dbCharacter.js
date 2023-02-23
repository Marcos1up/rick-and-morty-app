const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbCharacterSchema = new Schema(
    {
        name: String,
        image: String,
        species: String,
        origin: String,
        created: String,
    },
    { timestamps: true }
);

const dbCharacter = mongoose.model("dbCharacter", dbCharacterSchema);
module.exports = dbCharacter;
