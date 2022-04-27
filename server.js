// require npm express library 
const express = require('express');
// use methodOverride
// const methodOverride = require('methodOverride')
// set up instance of express
const app = express();
// set up port variable
PORT = 4000;

//models//
// test Meme model to get initial routes working
const memes = require('./models/Meme');

//middleware//
//express static to find public folder/static css
app.use(express.static('public'));

// app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
//application view engine to render ejs
app.set('view engine', 'ejs');

//routes//
// show get route
app.get('/meme/:id', (req, res) =>{
    const memeId = req.params.id;
    const context = {oneMeme: memes[memeId]}
    res.render('show.ejs', context);
})

// home get route
app.get('/', (req, res) => {
    const context = {memes:memes};
    res.render('index.ejs', context);
});


// app.listen to server at given port
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});