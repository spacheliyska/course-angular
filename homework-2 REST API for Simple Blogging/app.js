const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postsRoute = require('./routes/post-routes');

app.use('/api/posts',postsRoute);

app.use(function(err,req,res,next){
    res.status(500).json(`Server error : ${err.message}`);
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },() => {console.log('Connected to db')});

app.listen(5000);
