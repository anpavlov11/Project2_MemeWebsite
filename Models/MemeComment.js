// import mongoose
const mongoose = require('mongoose');

// set up meme comment schema with mongoose
const memeCommentSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    content: {
        type: String,
        required: [true, 'please add comment']
    },
    meme: {
        type: mongoose.Types.ObjectId,
        ref: 'Meme'
    }
}, 
{timesstamps: true});

// model of meme comment schema
const MemeComment = mongoose.model("MemeComment", memeCommentSchema);
// export the model
module.exports = MemeComment;