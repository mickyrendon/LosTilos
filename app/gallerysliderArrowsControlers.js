var position = 0;
previousBtn.addEventListener('click', previousBtnValidator, true);
nextBtn.addEventListener('click', nextBtnValidator, true);

function nextBtnValidator(e){
    const picSrc = galleryPicId
    position = position + 1;
    //getting array index
    // const index = galleryPics.indexOf(e.target);
    //capturar el valor del id exacto para poder continuar
    const index = galleryPics.indexOf(galleryPics[position]);
    const indexValue = index + 1;
    const lastIndex = galleryPics.length;
    picsCounter.innerHTML = `${indexValue} / ${lastIndex}`;
    
    if(e){
        let positionSrc = galleryPics[index].src;
        let positionName = galleryPics[index].alt;
        // getting the src of the next element
        picSrc.setAttribute('src', positionSrc);
        picSrc.setAttribute('alt', positionName);
    }
    return console.log(`retornando el nombre de la imagen nueva: ${picSrc.alt} y el id: ${index}`);
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