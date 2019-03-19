const DB = require('../models/videoDB');

module.exports.getVideoList = (req, res) => {
    DB
    .getVideoListFromDb()
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res
        .status(400)
        .json({err: err.message});
    })
};

module.exports.addVideo = (req, res) => {
    DB
    .addVideoToDb(req)
    .then((data) => {
      res
        .status(201)
        .json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};

module.exports.deleteVideo = (req, res) => {
    DB
    .deleteVideoFromDB(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res
        .status(400)
        .json({err: err.message});
    })
};