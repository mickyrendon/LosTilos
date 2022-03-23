function backToGallery(){
     // removing class to sticky nav
     stickyNav.classList.remove('gallery-slider-background');
     svgArrow.style.fill = 'currentColor';
    // hidding slider container section
    sliderContainer.style.display = 'none';
    sliderContainer.classList.remove('gallery-slider-background');
    //showing the gallery again
    galleryC.style.display = 'flex';
    //re add hiddenElements event
    backBtn.addEventListener("click", hiddeElements, true);
    console.log(`re agregando el evento hiddeElements al backbtn`);
}