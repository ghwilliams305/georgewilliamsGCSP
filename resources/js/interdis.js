//Connect Javascript to HTML element for the image roll
const backBtn = document.getElementById('back');
const frontBtn = document.getElementById('front');
const images = document.getElementById('kary');

//Creates a list of all the images
const imgList = [
    'IMG_20231130_120739980_HDR.jpg', 
    'IMG_20231130_120751205.jpg', 
    'IMG_20231130_120803316.jpg',
    'IMG_20231130_120812820.jpg',
    'IMG_20231201_145006711.jpg',
    'IMG_20231201_145010164.jpg',
];

//Sets the current image
let curImage = 0;

//Changes the image on the HTML
function setImage() {images.src = `./resources/images/${imgList[curImage]}`;}

//Slide forward through images
function nextImage() {
    curImage++;
    if(curImage > 5) curImage = 0;
    setImage();
}

//Slide backward through images
function backImage() {
    curImage--;
    if(curImage < 0) curImage = 5;
    setImage();
}

//Sets the inital image
setImage();

//Add the Event Listener to the buttons
backBtn.addEventListener('click', backImage);
frontBtn.addEventListener('click', nextImage);
images.addEventListener('click', nextImage);