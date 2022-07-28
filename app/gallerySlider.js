galleryPics.forEach( e =>{
    e.addEventListener('click', e =>{
        //getting array index
        const index = galleryPics.indexOf(e.target);
        const indexValue = index + 1;
        const lastIndex = galleryPics.length;
        const picsCounter =  document.querySelector('.pics-counter');
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

     
        // if i choose the last pic  then next btn is disabled & the previous btn is enabled
        if(indexValue === lastIndex){
            // nextBtn.style.display = 'none';
            // nextSpan.style.display = 'none';
            nextBtn.disabled = true;
            previousBtn.disabled = false;
            // nextSpan.disabled = true;
            console.log(`ocultando el boton 'siguiente'`);

        // if i choose the first pic  then previous btn is disabled & the next btn is enabled
        }else if(indexValue === 1){
            // previousBtn.style.display = 'none';
            // previousSpan.style.display = 'none';
            previousBtn.disabled = true;
            nextBtn.disabled = false;
            // previousSpan.disabled = true;
            console.log(`ocultando el boton 'anterior'`);

        // if i choose whatever picture between the first or the last picture, btns will be enabled
        }else{
            // nextBtn.style.display = 'flex';
            // nextSpan.style.display = 'flex';
            nextBtn.disabled = false;
            previousBtn.disabled = false;
            // nextSpan.disabled = false;
            // previousSpan.disabled = false;
            // previousBtn.style.display = 'flex';
            // previousSpan.style.display = 'flex';
            console.log(`la posicion del elemento en el array no es la ultima`);
        }
        return console.log(`el index del elemento es: ${indexValue} y el lastindex es: ${lastIndex}`);
    })
});




