const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
    {
        id: Number,
        name: String,
        image: String,
        species: String,
        origin: String,
        created: String,
    },
    { timestamps: true }
);

const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
