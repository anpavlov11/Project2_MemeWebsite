////////////////////////// IMPORTS //////////////////////////

// import express methods
const express = require('express');
// creates instance of the router
const router = express.Router();

////////////////////////// MODELS //////////////////////////////

// from models directory, need index.js for now till get rid of test
const db = require('../Models/');


////////////////////////// ROUTES ///////////////////////////////

// Index -GET- route for comments ERD, serves index.ejs template
router.get('/', async(req, res, next) => {
    try{
        const allMemeComments = await db.MemeComment.find({});
        return res.send(allMemeComments);
    }
    catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
});

// New -GET- route for comments ERD, serves new.ejs template
router.get('/new', async(req, res, next) => {
    try {
        const allMemes = await db.Meme.find({});
        const context = {memes: allMemes};
        return res.render ('memeComments/new.ejs', context);
    } catch (err){
        console.log(error);
        req.error = error;
        return next();
    }    
});

// Create -POST- route for comments ERD
router.post('/', async(req, res, next) => {
    try {
        const newMemeCommentData = req.body;
        const newMemeComment = await db.MemeComment.create(newMemeCommentData);
        return res.redirect(`/meme/${newMemeComment.meme}`);
    } 
    catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// Show route -GET- route for comments ERD, serves show.ejs template
router.get('/:memeId', async(req, res, next) => {
    try{
        const foundMemeComment = await db.MemeComment.findById(req.params.memeId).populate('meme');
        return res.render('memeComments/show.ejs', {memeComment: foundMemeComment});
    }
    catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
});

// Update route -PUT- route for comments ERD
router.put('/:memeId', async(req, res, next) => {
    return res.send('hitting meme comment update: ' +req.params.memeId);
});

// Edit route -GET- route for comments ERD, serves edit.ejs template
router.get('/:memeId/edit', async(req, res, next) => {
    return res.send('hitting meme comment edit: ' +req.params.memeId);
});

// Destroy route -DELETE- route for comments
router.delete('/:memeId', async(req, res, next) => {
    return res.send('hitting meme comment delete: ' +req.params.memeId);
});


// exports the router
module.exports = router;