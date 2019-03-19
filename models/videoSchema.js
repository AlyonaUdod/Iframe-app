const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: { type: String, require: true },
    videoId: { type: String, require: true },
});

const Video = mongoose.model('VideoCollection', videoSchema);
module.exports = Video;