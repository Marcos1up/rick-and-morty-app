const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
    id: Number,
    name: String,
    characters: Array,
    date: String,
});

const Episode = mongoose.model("Episode", episodeSchema);
module.exports = Episode;
