//Connect Javascript to HTML element for the image roll
const backBtn = document.getElementById('back');
const frontBtn = document.getElementById('front');
const images = document.getElementById('kary');
const nav = document.getElementsByClassName('nav');

//Creates a list of all the images
const imgList = './resources/images/solar_slideshow/Slide';

let curImage = 1;

//Changes the image on the HTML
function setImage() {
    images.src = imgList + curImage + '.jpg';
    for(let x of nav) {
        x.style.opacity = '0.5';
        x.style.width = '0.5rem';
        x.style.height = '0.5rem';
    }
    nav[curImage - 1].style.opacity = '1';
    nav[curImage - 1].style.width = '1rem';
    nav[curImage - 1].style.height = '1rem';
}

//Slide forward through images
function nextImage() {
    curImage = (curImage > 17) ? 1 : curImage + 1;
    setImage();
}

//Starts Slide Show
function startSlides() {
    curImage = (curImage > 17) ? 1 : curImage + 1;
    setImage();
    setTimeout(startSlides, 3000);
}

//Slide backward through images
function backImage() {
    curImage = (curImage < 2) ? (18) : curImage - 1;
    setImage();
}

//Add the Event Listener to the buttons
backBtn.addEventListener('click', backImage);
frontBtn.addEventListener('click', nextImage);
images.addEventListener('click', nextImage);
for(let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', function() {
        curImage = i + 1;
        setImage();
    });
}

//Starts automatic loop
startSlides();