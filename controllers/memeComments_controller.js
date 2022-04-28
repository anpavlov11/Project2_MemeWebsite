////////////////////////// IMPORTS //////////////////////////

// import express methods
const express = require('express');
// creates instance of the router
const router = express.Router();

////////////////////////// MODELS //////////////////////////////

// from models directory, need index.js for now till get rid of test
const db = require('../models/index.js');


// exports the router
module.exports = router;