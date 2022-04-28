/////////////////////// IMPORTS //////////////////////////

// require npm express library 
const express = require('express');
// set up instance of express
const app = express();
// require method override library
const methodOverride = require('method-override');
// import meme_controller
const controllers = require('./controllers/');
// require mongo db connection 
require('./config/db.connection');
// set up port variable
PORT = 4000;

/////////////////////// MODELS //////////////////////////

// test Meme model to get initial routes working
// const memes = require('./models/meme_model');

///////////////////MIDDLEWARE////////////////////////////

//express static to find public folder/static css
app.use(express.static('public'));
// DELETE/UPDATE middle ware
app.use(methodOverride('_method'));
// body parser middleware
app.use(express.urlencoded({extended:false}));
//application view engine to render ejs
app.set('view engine', 'ejs');

/////////////////////// CONTROLLERS ////////////////////////

// meme controller middleware
app.use('/meme/', controllers.memes);

/////////////////////// ROUTES //////////////////////////

// home get route
app.get('/', (req, res) => {
    res.render('home.ejs');
});


//////////////////// CLIENT LISTEN ///////////////////////
// app.listen to server at given port
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

