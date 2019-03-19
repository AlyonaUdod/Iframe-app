const Video = require('./videoSchema');

module.exports.getVideoListFromDb = function(){
    return Video.find();
};

module.exports.addVideoToDb = function(req){
    const { title, videoId } = req.body;
    const newVideo = new Video({
      title,
      videoId,
    });
    return newVideo.save();
};

module.exports.deleteVideoFromDB = function(id) {
    return Video.remove({'videoId': id});
};