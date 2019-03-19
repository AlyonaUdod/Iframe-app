const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const postsRoutes = require('./routes/videoRoutes');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URL);

app.use('/api/video', postsRoutes);
app.use(express.static('./frontend/build'));

app.use((req, res, next) => {
  res
    .status(404)
    .json({err: '404'});
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .json({err: '500'});
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));