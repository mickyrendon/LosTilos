previousBtn.addEventListener('click', previousBtnValidator, true);
nextBtn.addEventListener('click', nextBtnValidator, true);

function nextBtnValidator(e){
    const picSrc = galleryPicId
   
    if(e){
        position = position + 1;
        let positionSrc = galleryPics[position].src;
        let positionName = galleryPics[position].alt;
        // getting the src of the next element
        picSrc.setAttribute('src', positionSrc);
        picSrc.setAttribute('alt', positionName);
    }
    return console.log(`retornando el nombre de la imagen nueva: ${picSrc.alt}`);
}

function previousBtnValidator(e){
    const picSrc = galleryPicId 
   
    if(e){
        position = position - 1;
        let positionSrc = galleryPics[position].src;
        let positionName = galleryPics[position].alt;
        // getting the src of the next element
        picSrc.setAttribute('src', positionSrc);
        picSrc.setAttribute('alt', positionName);
    }
    return console.log(`retornando el nombre de la imagen nueva: ${picSrc.alt}`);
}