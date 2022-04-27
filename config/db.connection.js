const mongoose = require('mongoose')

require('dotenv').config();

const connectionStr = 'mongodb+srv://ANPavlov11:Paul%402020&@we-meme-it.30vsy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connectionStr)

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected... 🥳 🥳 🥳 `)
})

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error', error)
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected 🫠 🫠 🫠 ')
})