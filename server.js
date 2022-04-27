// require npm express library 
const express = require('express');
// set up instance of express
const app = express();
// require method override library
const methodOverride = require('method-override');
// set up port variable
PORT = 4000;

//models//
// test Meme model to get initial routes working
const memes = require('./models/Meme');

//middleware//
//express static to find public folder/static css
app.use(express.static('public'));
// DELETE/UPDATE middle ware
app.use(methodOverride('_method'));
// body parser middleware
app.use(express.urlencoded({extended:false}));
//application view engine to render ejs
app.set('view engine', 'ejs');

//routes//
// new get route
app.get('/meme/new', (req, res) => {
    res.render('new.ejs');
});

// show get route
app.get('/meme/:id', (req, res) =>{
    const memeId = req.params.id;
    const context = {oneMeme: memes[memeId], id: req.params.id};
    res.render('show.ejs', context);
});

// edit route
app.get('/meme/:id/edit', (req,res) => {
    const editMeme = memes[req.params.id];
    const context = {editMeme: editMeme, id: req.params.id}
    res.render('edit.ejs', context);
})

// home index route 
app.get('/meme/', (req, res) => {
    const context = {memes:memes};
    res.render('index.ejs', context);
});

// home get route
app.get('/', (req, res) => {
    res.send('Welcome to we meme it homepage');
});

// "create" post route
app.post('/meme/', (req,res) => {
    memes.push (req.body);
    res.redirect('/meme/');
});

// delete/destroy route
app.delete('/meme/:id', (req,res) => {
    //need to change for backend
    memes.splice(req.params.id, 1);
    res.redirect('/meme/');
});

// update put route
app.put('/meme/:id', (req, res) => {
    memes[req.params.id] = req.body;
    res.redirect(`/meme/${req.params.id}`);
});

// app.listen to server at given port
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
