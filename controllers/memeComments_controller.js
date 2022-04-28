////////////////////////// IMPORTS //////////////////////////

// import express methods
const express = require('express');
// creates instance of the router
const router = express.Router();

////////////////////////// MODELS //////////////////////////////

// from models directory, need index.js for now till get rid of test
const db = require('../models/index.js');


////////////////////////// ROUTES ///////////////////////////////

// Index -GET- route for comments ERD, serves index.ejs template

// New -GET- route for comments ERD, serves new.ejs template

// Create -POST- route for comments ERD

// Show route -GET- route for comments ERD, serves show.ejs template

// Update route -PUT- route for comments ERD

// Edit route -GET- route for comments ERD, serves edit.ejs template

// Destroy route -DELETE- route for comments


// exports the router
module.exports = router;