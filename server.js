/////////////////////// IMPORTS //////////////////////////

// require npm express library 
const express = require('express');
// set up instance of express
const app = express();
// require method override library
const methodOverride = require('method-override');
// import meme_controller
const memeController = require('./controllers/meme_controller.js');
// set up port variable
PORT = 4000;

/////////////////////// MODELS //////////////////////////

// test Meme model to get initial routes working
const memes = require('./models/Meme');

///////////////////MIDDLEWARE////////////////////////////

//express static to find public folder/static css
app.use(express.static('public'));
// DELETE/UPDATE middle ware
app.use(methodOverride('_method'));
// body parser middleware
app.use(express.urlencoded({extended:false}));
// meme controller middleware
app.use('/meme/', memeController);
//application view engine to render ejs
app.set('view engine', 'ejs');

/////////////////////// ROUTES //////////////////////////

// home get route
app.get('/', (req, res) => {
    res.send('Welcome to we meme it homepage');
});


//////////////////// CLIENT LISTEN ///////////////////////
// app.listen to server at given port
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

