galleryPics.forEach( e =>{
    e.addEventListener('click', e =>{
        const src = e.target.getAttribute('src');
        const name = e.target.getAttribute('alt');

        sliderContainer.style.display = 'flex';
        galleryPicId.setAttribute('src', src);
        galleryPicId.setAttribute('alt', name);
        console.log(`mostrando la imagen ${name}`);
    })
});

var position = 0;
//buttons
// al presionar el boton mostrar el hermano de atras o delante en la lista del nodo gallerypics

previousBtn.addEventListener('click', previousBtnValidator, true);
// nextBtn.addEventListener('click', nextBtnValidator, true);
function previousBtnValidator(e){
    // const btnName = e.target.getAttribute('name') || e.target.getAttribute('title') ;
    const picSrc = galleryPicId.getAttribute('src');
    // const altName = galleryPicId.getAttribute('alt');
   
    if(e){
        // console.log(`el nombre actual de la imagen es '${altName}' y la url o src es ${picSrc}`);
        // console.log(`boton '${btnName}' presionado`);
        // traer al hermano anterior
        position = position + 1;
        picSrc.setAttribute('src', galleryPics[position])        
    }
}

// trabajar con el array para traer a los srcs hermanos
