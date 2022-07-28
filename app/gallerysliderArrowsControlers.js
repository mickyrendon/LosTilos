previousBtn.addEventListener('click', previousBtnValidator, true);
nextBtn.addEventListener('click', nextBtnValidator, true);

function nextBtnValidator(e){
    const picSrc = galleryPicId
    const picsCounter =  document.querySelector('.pics-counter');

    position = position + 1;
    //getting array index
    const counterId = picsCounter.getAttribute('title');
    const index = galleryPics.indexOf(galleryPics[counterId]);
    const indexValue = index + 1;
    const lastIndex = galleryPics.length;
    picsCounter.innerHTML = `${indexValue} / ${lastIndex}`;
    console.log(`testeando el index... ${indexValue}`);
    
    if(e){
        let positionSrc = galleryPics[index].src;
        let positionName = galleryPics[index].alt;
        // getting the src of the next element
        picSrc.setAttribute('src', positionSrc);
        picSrc.setAttribute('alt', positionName);
        picsCounter.setAttribute('title', indexValue);

        // if( previousBtn.style.display === 'none'){
        //     previousBtn.style.display = 'flex';
        //     previousSpan.style.display = 'flex';
        //     console.log(`mostrando el boton 'anterior'`);
        // }else if(indexValue === lastIndex){
        //     nextBtn.style.display = 'none';
        //     nextSpan.style.display = 'none';
        //     console.log(`ultima imagen, ocultando el boton next`);
        // }
        if(indexValue === lastIndex){
            nextBtn.disabled = true;
            nextSpan.disabled = true;
            // previousBtn.disabled = false;
            // previousSpan.disabled = false;
        }else{
            nextBtn.disabled = false;
            nextSpan.disabled = false;
            previousBtn.disabled = false;
            previousSpan.disabled = false;
        }
    }
    return console.log(`retornando el nombre de la imagen nueva: ${picSrc.alt} y el id: ${indexValue}`);
}

function previousBtnValidator(e){
    const picSrc = galleryPicId
    const picsCounter =  document.querySelector('.pics-counter');
    position = position - 1;
    //getting array index
    const counterId = picsCounter.getAttribute('title');
    // const index = galleryPics.indexOf(galleryPics[counterId]);
    const indexValue = counterId -1 //index -1;
    const lastIndex = galleryPics.length;
    picsCounter.innerHTML = `${indexValue} / ${lastIndex}`;
    console.log(`testeando el index... ${indexValue}`);
  
    if(e){
        let positionSrc = galleryPics[indexValue - 1].src;
        let positionName = galleryPics[indexValue - 1].alt;
        // getting the src of the next element
        picSrc.setAttribute('src', positionSrc);
        picSrc.setAttribute('alt', positionName);
        picsCounter.setAttribute('title', indexValue);
        
        // if( nextBtn.style.display === 'none'){
        //     nextBtn.style.display = 'flex';
        //     nextSpan.style.display = 'flex';
        //     console.log(`mostrando el boton 'siguiente'`);
        // }else if(indexValue === 1){
        //     previousBtn.style.display = 'none';
        //     previousSpan.style.display = 'none';
        //     console.log(`primera imagen, ocultando el boton previous`);
        // }
        if(indexValue === 1){
            previousBtn.disabled = true;
            previousSpan.disabled = true;
            // nextBtn.disabled = false;
            // nextSpan.disabled = false;
        }else{
            previousBtn.disabled = false;
            previousSpan.disabled = false;
            nextBtn.disabled = false;
            nextSpan.disabled = false;
        }
    }
    return console.log(`retornando el nombre de la imagen nueva: ${picSrc.alt} y el id: ${indexValue}`);
}
const slider = new Swiper('.gallery-img-container', {
    loop: true,
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.previous-btn',
    },
    // pagination: {
    //     el: '.swiper-pagination',
    // },
});