const stickyNav =  document.querySelector('.sticky-nav');
const backBtn  = document.querySelector('.back-btn');
const svgArrow = document.querySelector('.svg-arrow');
const galleryC  = document.querySelector('.gallery-container');
const gallery  = document.querySelector('.gallery');

const galleryPicsArray = document.querySelectorAll('.gallery-pics');
const galleryPics = Array.from(galleryPicsArray);
const sliderContainer = document.querySelector('.slider-container');
const galleryPicId = document.getElementById('gallery-pic-id');
//pics counter
// var picsCounter =  document.querySelector('.pics-counter');
// controlers
var position = 0;
const previousBtn = document.querySelector('.previous-btn');
const previousSpan = document.querySelector('.previous-span');
const nextBtn = document.querySelector('.next-btn');
const nextSpan = document.querySelector('.next-span');

const classes = [
    document.querySelector('.header'),
    document.querySelector('.nav-contact'),
    document.querySelector('.main'),
    document.querySelector('.footer'),
    document.querySelector('.signature')
];