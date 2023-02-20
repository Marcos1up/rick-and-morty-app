const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
    id: Number,
    name: String,
});

const Episode = mongoose.model("User", episodeSchema);
module.exports = Episode;
