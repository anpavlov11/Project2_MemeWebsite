// this controller routes the new meme generator page
// express require
const express = require('express');
// set up router
const router = express.Router();

///////////////////////////// MODELS ////////////////////////////////


///////////////////////////// ROUTES /////////////////////////////////

// newMeme get route -> http://localhost:4000/newMeme
router.get('/', (req, res) => {
    return res.render('newMeme/new.ejs')
});

// export router
module.exports = router;