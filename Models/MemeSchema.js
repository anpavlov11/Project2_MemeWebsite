

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
})