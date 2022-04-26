// require npm express library 
const express = require('express');
// set up instance of express
const app = express();
// set up port variable
PORT = 4000;

//models//
// test Meme model to get initial routes working
const memes = require('./models/Meme');

//routes//
// show get route
app.get('/:id', (req, res) =>{
    let memeId = req.params.id;
    res.send(memes[memeId]);
})

// home get route
app.get('/', (req, res) => {
    res.send('Welcome to We Meme It');
});


// app.listen to server at given port
app.listen(PORT, () => {
    console.log('listening on port: ${PORT}');
});