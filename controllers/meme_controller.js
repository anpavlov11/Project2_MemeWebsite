//express require
const express = require('express');
// set up router
const router = express.Router();

/////////////////////// MODELS //////////////////////////

const memes = require('../models/Meme')


/////////////////////// ROUTES //////////////////////////

// new get route -> http://localhost:4000/meme/new
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// show get route -> http://localhost:4000/meme/:id
router.get('/:id', (req, res) =>{
    const memeId = req.params.id;
    const context = {oneMeme: memes[memeId], id: req.params.id};
    res.render('show.ejs', context);
});

// edit get route -> http://localhost:4000/meme/:id/edit
router.get('/:id/edit', (req,res) => {
    const editMeme = memes[req.params.id];
    const context = {editMeme: editMeme, id: req.params.id};
    res.render('edit.ejs', context);
});

// meme index route -> http://localhost:4000/meme/
router.get('/', (req, res) => {
    const context = {memes:memes};
    res.render('index.ejs', context);
});

// "create" post route -> http://localhost:4000/meme/
router.post('/', (req,res) => {
    memes.push (req.body);
    res.redirect('/meme/');
});

// delete/destroy route -> http://localhost:4000/meme/:id
router.delete('/:id', (req,res) => {
    //need to change for backend
    memes.splice(req.params.id, 1);
    res.redirect('/meme/');
});

// update put route -> http://localhost:4000/meme/:id
router.put('/:id', (req, res) => {
    memes[req.params.id] = req.body;
    res.redirect(`/meme/${req.params.id}`);
});


// export router
module.exports = router;
