//express require
const express = require('express');
// set up router
const router = express.Router();

/////////////////////// MODELS //////////////////////////

const db = require('../Models/')


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
    return res.render('new.ejs');
});

// show get route -> http://localhost:4000/meme/:id
router.get('/:id', async (req, res, next) =>{
    try{
        const foundMeme = await db.Meme.findById(req.params.id);
        const allMemeComments = await db.MemeComment.find({meme: req.params.id})
        const context = {
            oneMeme: foundMeme,
            memeComments: allMemeComments
        };
        return res.render('show.ejs', context );
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// edit get route -> http://localhost:4000/meme/:id/edit
router.get('/:id/edit', async (req,res, next) => {
    try{
        const editMeme = await db.Meme.findById(req.params.id);
        const context =  {
            editMeme: editMeme
        }
        return res.render('edit.ejs', context);
    }
    catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// "create" post route -> http://localhost:4000/meme/
router.post('/', async (req,res, next) => {
    try {
        const createdMeme = await db.Meme.create(req.body);
        return res.redirect('/meme/');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// delete/destroy route -> http://localhost:4000/meme/:id
router.delete('/:id', async (req,res, next) => {
    try{
        const deletedMeme = await db.Meme.findByIdAndDelete(req.params.id);
        return res.redirect('/meme/');
    }
    catch (error) {
        console.log(error);
        req.error = error;
        return next ();
    }
});

// update put route -> http://localhost:4000/meme/:id
router.put('/:id', async (req, res, next) => {
    try {
        const updatedMeme = await db.Meme.findByIdAndUpdate(req.params.id, req.body);
        return res.redirect(`/meme/${updatedMeme._id}`);
    }
    catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
});


// export router
module.exports = router;
