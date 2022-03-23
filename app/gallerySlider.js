galleryPics.forEach( e =>{
    e.addEventListener('click', e =>{
        const src = e.target.getAttribute('src');
        const name = e.target.getAttribute('alt');
        // conseguir el index del elemento clickeado para despues usarlo en el validador del array para los efectos de los botones// NECESITO ACCEDER AL INDEX DEL ARRAY PARA OBTENER EL VALOR Y LA UBICACION DE CADA ELEMENTO PARA QUE EL CAMBIO DE LAS IMAGENES SEAN COHERENTES
        console.log(`${galleryPics.indexOf()}`);
        sliderContainer.style.display = 'flex';
        galleryC.style.display = 'none';
        galleryPicId.setAttribute('src', src);
        galleryPicId.setAttribute('alt', name);
        console.log(`mostrando la imagen ${name}`);
        
        arrayIndexValidator();
    })
});
var position = 0;
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

