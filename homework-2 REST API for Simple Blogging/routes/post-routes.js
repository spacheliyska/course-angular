var express = require('express');
var router = express.Router();
const Post = require('../models/Post');

//get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});


//post new Post
router.post('/', (req, res) => {
    const post = new Post({
        date: req.body.date,
        title: req.body.title,
        author: req.body.author,
        text: req.body.text,
        tags: req.body.tags,
        URL: req.body.URL,
        status: req.body.status
    });
    post.save().then(data => {
        res.status(201);
        res.location(`/api/posts/${post._id}`);
        res.json(post);
    }).catch(err => { 
        res.status(400);
        res.json({ message: err }) });
});

//get specific Post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.status(404);
        res.json({ message: 'The given id is not valid or could not be found' });
    }
});


router.put('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, {
            $set: {
                date: req.body.date,
                title: req.body.title,
                author: req.body.author,
                text: req.body.text,
                tags: req.body.tags,
                URL: req.body.URL,
                status: req.body.status
            }
        });
        res.status(200).json('Resource updated successfully');
    } catch (err) {
        res.status(404);
        res.json({ message: 'Post with given id could not be found or the id is invalid' });
    }
});


router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.status(200).json(`Resource with given id is deleted successfully`);
    } catch (err) {
        res.status(404);
        res.json({ message: `The post with given id is not found or the id is invalid`});
    }
});

module.exports = router;