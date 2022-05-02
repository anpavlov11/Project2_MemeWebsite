Final Deliverables Document:

Link to website (Heroku):
https://we-meme-it-project2.herokuapp.com/

Link to Github Source code:
https://github.com/AndrewRBader/Project2_MemeWebsite

README.md Link:
https://github.com/AndrewRBader/Project2_MemeWebsite/blob/main/README.md

Presentation:
Triumps:
- reverse engineered a simple meme website
- routes all seem to work with no bugs
- have a cool generate meme feature
- styling is very nice
- have some nice initial meme content in the meme index

Challenges
- making sure there were no bugs when accessing various routes
- trying to get the meme generation feature working, still working on getting generated memes added to the index

Words of Wisdom
- Focus on the user story/flow to develop your routes


Was pretty happy with the meme generation so just pasted that code here:

meme generation main.js code:

// grabbing image input variables
const imageInput = document.querySelector('#imageURL');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextInput = document.querySelector('#bottomTextInput');
// grabbing canvas, generated image
const canvas = document.querySelector('#meme');
// jquery grabbing button for click event function
const $generateMemeButton = $('#generate_meme_button');

// image variable gets updated every time user selects new image
let image = null;

// on click of generate meme button, carry out generation of new meme
imageInput.addEventListener('change', ()=>{
    // collecting the image URL variable
    const imgURL = imageInput.value
    // set new image here and set the src to inputed imgURL
    image = new Image();
    image.src = imgURL;
    // when click generate meme button you see the meme below
    $generateMemeButton.click(() => {
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
    })
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
    // set context of canvas
    const context = canvas.getContext('2d');
    // collect image width in variable
    const width = image.width;
    // collect image height in variable
    const height = image.height;
    // setting text
    // basing font size off of the width of the image
    const fontSize = Math.floor(width / 10);
    // space between top of image and bottom
    const yOffset = height / 25;

    // Update canvas background with image specs
    // set width of canvas to width of image
    canvas.width = width;
    // set height of canvas to height of image
    canvas.height = height;
    context.drawImage(image, 0, 0);

    // Prepare text
    context.strokeStyle = 'black';
    // border/text stroke width
    context.lineWidth = Math.floor(fontSize / 4);
    // text fill style
    context.fillStyle = "white";
    // align text in the center
    context.textAlign = "center";
    // no weird anomolies in text
    context.lineJoin = "round";
    // adaptable context
    context.font = `${fontSize}px sans-serif`;

    // adding the top text
    // text adheres to yOffset
    context.textBaseline = "top";
    // setting top text positon to halfway vs yOffset value
    context.strokeText(topText, width / 2, yOffset);
    // setting up white fill to halfway-ish vs yOffset value
    context.fillText(topText, width / 2, yOffset);

    // adding the bottom text
    // text adheres to yOffset
    context.textBaseline = "bottom";
    // setting top text positon to halfway vs yOffset value
    context.strokeText(bottomText, width / 2, height - yOffset);
    // setting up white fill to halfway-ish vs yOffset value
    context.fillText(bottomText, width / 2, height - yOffset);
    //return url for canvas
};
