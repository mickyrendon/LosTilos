galleryPics.forEach( e =>{
    e.addEventListener('click', e =>{
        const src = e.target.getAttribute('src');
        const name = e.target.getAttribute('alt');
        //catching the src and alt attribute of gallery pic
        galleryPicId.setAttribute('src', src);
        galleryPicId.setAttribute('alt', name);
        console.log(`mostrando la imagen ${name}`);
        //getting array index
        const index = galleryPics.indexOf(e.target);
        const indexValue = index + 1;
        const lastIndex = galleryPics.length;
        picsCounter.innerHTML = `${indexValue} / ${lastIndex}`;
        
        console.log(`el index del elemento es: ${indexValue} y el lastindex es: ${lastIndex}`);

        // adding class to sticky nav
        stickyNav.classList.add('gallery-slider-background');
        svgArrow.style.fill = 'white';
        //showing gallery slider section
        sliderContainer.style.display = 'flex';
        sliderContainer.classList.add('gallery-slider-background');
        //hidding gallery section
        galleryC.style.display = 'none';
        toggleBackBtnEvnt();
        
        arrayIndexValidator();
    })
});
//buttons
// al presionar el boton mostrar el hermano de atras o delante en la lista del nodo gallerypics
function arrayIndexValidator(){
    if(!galleryPics[0]){
        console.log(`mostrando el 'previous btn`);
        previousBtn.style.display = 'flex';
        previousSpan.style.display = 'flex';
    }else{
       
    }
}



