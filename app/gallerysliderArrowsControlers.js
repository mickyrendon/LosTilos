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
    }
    return console.log(`retornando el nombre de la imagen nueva: ${picSrc.alt} y el id: ${indexValue}`);
}
// la funcion anda a medias porque cuando estoy en la ultima imagen y quiero ir a la anterior me da error y aparece un -2 en el contador
function previousBtnValidator(e){
    const picSrc = galleryPicId
    const picsCounter =  document.querySelector('.pics-counter');

    position = position - 1;
    //getting array index

    
    if(e){
        const counterId = picsCounter.getAttribute('title');
        const index = galleryPics.indexOf(galleryPics[counterId]);
        const indexValue = index -1;
        const lastIndex = galleryPics.length;
        picsCounter.innerHTML = `${indexValue} / ${lastIndex}`;
        console.log(`testeando el index... ${indexValue}`);
        if(indexValue === lastIndex){
            nextBtn.style.display = 'none';
            nextSpan.style.display = 'none';
            console.log('validacion correcta, ocultando los botones');
        }
        // funciona pero cuando llego a la ultima imagen me tira error porque el positionSrc es undefined
        
            let positionSrc = galleryPics[indexValue - 1].src;
            let positionName = galleryPics[indexValue - 1].alt;
            // getting the src of the next element
            picSrc.setAttribute('src', positionSrc);
            picSrc.setAttribute('alt', positionName);
            picsCounter.setAttribute('title', indexValue);

        //}
        return console.log(`retornando el nombre de la imagen nueva: ${picSrc.alt} y el id: ${indexValue}`);
    }
}