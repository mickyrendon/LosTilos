// slider --> obtener el source de las imagenes y mostrarlos en la galeria
// elementos ocultos listo, crear la galeria y ocultar el menu del nav con un boton de 'atras' para ocultar la galeria y mostrar los elementos ocultos

document.querySelectorAll(".carousel-img").forEach(el => {
  el.addEventListener("click", e => {
    const src = e.target.getAttribute('src');
    const name = e.target.getAttribute('alt');
    console.log(`imagen '${name}' clickeada`);
    
    showElements()
  });
})

