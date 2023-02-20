const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
    {
        id: Number,
        name: String,
        species: String,
        origin: String,
        created: String,
    },
    { timestamps: true }
);

const Character = mongoose.model("User", characterSchema);
module.exports = Character;
