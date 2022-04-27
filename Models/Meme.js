// require mongoose in schema file
const mongoose = require('mongoose');



//basic meme schema:

const memeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'schema needs a title']
    },
    topic: {
        type: String,
        required: [true, 'schema needs a topic']
    },
    image: {
        type: String,
        required: [true, 'please input image URL']
    },
    description: {
        type: String,
        required: [true, 'please input description of the meme']
    },
    timestamps: true
});

// mongoose model instance of meme schema
const Meme = mongoose.model('Meme', memeSchema);
// export the meme schema
module.exports = Meme;
// export the meme schema
module.exports = Meme;