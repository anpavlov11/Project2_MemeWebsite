//express require
const express = require('express');
// set up router
const router = express.Router();

/////////////////////// MODELS //////////////////////////

const db = require('../Models/index.js')


/////////////////////// ROUTES //////////////////////////
// meme index route -> http://localhost:4000/meme/
router.get('/', async (req, res, next) => {
    try {
        const memes = await db.Meme.find({});
        const context = {memes};
        return res.render('index.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// new get route -> http://localhost:4000/meme/new
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// show get route -> http://localhost:4000/meme/:id
router.get('/:id', async (req, res, next) =>{
    try{
        const foundMeme = await db.Meme.findById(req.params.id);
        console.log(foundMeme);
        const context = {oneMeme: foundMeme};
        res.render('show.ejs', context );
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// edit get route -> http://localhost:4000/meme/:id/edit
router.get('/:id/edit', (req,res) => {
    const editMeme = memes[req.params.id];
    const context = {editMeme: editMeme, id: req.params.id};
    res.render('edit.ejs', context);
});

// "create" post route -> http://localhost:4000/meme/
router.post('/', async (req,res, next) => {
    try {
        console.log(req.body);
        const createdMeme = await db.Meme.create(req.body);
        console.log(`created meme: ${createdMeme}`);
        res.redirect('/meme/');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
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
