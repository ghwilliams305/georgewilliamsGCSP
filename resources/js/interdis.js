//Connect Javascript to HTML element for the image roll
const backBtn = document.getElementById('back');
const frontBtn = document.getElementById('front');
const images = document.getElementById('kary');
const nav = document.getElementsByClassName('nav');

//Creates a list of all the images
const imgList = [
    './resources/images/IMG_20231130_120739980_HDR.jpg', 
    './resources/images/IMG_20231130_120751205.jpg', 
    './resources/images/IMG_20231130_120803316.jpg',
    './resources/images/IMG_20231130_120812820.jpg',
    './resources/images/IMG_20231201_145006711.jpg',
    './resources/images/IMG_20231201_145010164.jpg',
    './resources/images/GCSP 2.jpg',
    './resources/images/GCSP group.jpg',
];

let curImage = 7

//Changes the image on the HTML
function setImage() {
    images.src = imgList[curImage];
    for(let x of nav) {
        x.style.opacity = '0.5';
        x.style.width = '1rem';
        x.style.height = '1rem';
    }
    nav[curImage].style.opacity = '1';
    nav[curImage].style.width = '1.5rem';
    nav[curImage].style.height = '1.5rem';
}

//Slide forward through images
function nextImage() {
    curImage = (curImage > 6) ? 0 : curImage + 1;
    setImage();
}

//Starts Slide Show
function startSlides() {
    curImage = (curImage > 6) ? 0 : curImage + 1;
    setImage();
    setTimeout(startSlides, 3000);
}

//Slide backward through images
function backImage() {
    curImage = (curImage < 1) ? (7) : curImage - 1;
    setImage();
}

//Add the Event Listener to the buttons
backBtn.addEventListener('click', backImage);
frontBtn.addEventListener('click', nextImage);
images.addEventListener('click', nextImage);
for(let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', function() {
        curImage = i;
        setImage();
    });
}

//Starts automatic loop
startSlides();