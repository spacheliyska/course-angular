const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    date:{
        type:Date,
        default : Date.now
    },
    title: String,
    author: String,
    text: [String],
    tags: [String],
    URL: String,
    status: Boolean
});

module.exports = mongoose.model('Posts',PostSchema);