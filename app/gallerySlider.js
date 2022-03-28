galleryPics.forEach( e =>{
    e.addEventListener('click', e =>{
        //getting array index
        const index = galleryPics.indexOf(e.target);
        const indexValue = index + 1;
        const lastIndex = galleryPics.length;
        const picsCounter =  document.querySelector('.pics-counter');
        // picsCounter.getAttribute('title');

        // getting attributes
        const src = e.target.getAttribute('src');
        const name = e.target.getAttribute('alt');

        //catching the src and alt attribute of gallery pic
        galleryPicId.setAttribute('src', src);
        galleryPicId.setAttribute('alt', name);
        picsCounter.setAttribute('title', indexValue);
        picsCounter.innerHTML = `${indexValue} / ${lastIndex}`;
        // adding class to sticky nav
        stickyNav.classList.add('gallery-slider-background');
        svgArrow.style.fill = 'white';
        //showing gallery slider section
        sliderContainer.style.display = 'flex';
        sliderContainer.classList.add('gallery-slider-background');
        //hidding gallery section
        galleryC.style.display = 'none';
        toggleBackBtnEvnt();
        
        if(indexValue === lastIndex){
            nextBtn.style.display = 'none';
            nextSpan.style.display = 'none';
            console.log(`ocultando el boton 'siguiente'`);

        }else if(indexValue === 1){
            previousBtn.style.display = 'none';
            previousSpan.style.display = 'none';
            console.log(`ocultando el boton 'anterior'`);
        }else{
            nextBtn.style.display = 'flex';
            nextSpan.style.display = 'flex';
            previousBtn.style.display = 'flex';
            previousSpan.style.display = 'flex';
            console.log(`la posicion del elemento en el array no es la ultima`);
        }
        return console.log(`el index del elemento es: ${indexValue} y el lastindex es: ${lastIndex}`);
    })
});
//buttons
// al presionar el boton mostrar el hermano de atras o delante en la lista del nodo gallerypics
function arrayIndexValidator(){
};



