const express = require('express');
const router = express.Router();
const ctrlVideo = require('../controllers/controllerVideo');

router.get('/', ctrlVideo.getVideoList);

router.post('/', ctrlVideo.addVideo);

router.delete('/:id', ctrlVideo.deleteVideo);

module.exports = router;