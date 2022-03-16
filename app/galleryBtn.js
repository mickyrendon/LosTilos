// slider --> obtener el source de las imagenes y mostrarlos en la galeria
// elementos ocultos listo, crear la galeria y ocultar el menu del nav con un boton de 'atras' para ocultar la galeria y mostrar los elementos ocultos
const classes = [
  document.querySelector('.header'),
  document.querySelector('.nav-contact'),
  document.querySelector('.main'),
  document.querySelector('.footer'),
  document.querySelector('.signature')
];
document.querySelectorAll(".carousel-img").forEach(el => {
  el.addEventListener("click", e => {
    const src = e.target.getAttribute("src");
    console.log(`imagen con el source ${src} clickeada `);
    
    hiddingElements()
  });
})

function hiddingElements(){
  classes.forEach(e => {
    e.style.display = 'none';
    console.log(`elementos ocultos`);
  })
  return classes;
}