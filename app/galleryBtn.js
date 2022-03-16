// slider --> obtener el source de las imagenes y mostrarlos en la galeria
document.querySelectorAll(".carousel-img").forEach(el => {
  el.addEventListener("click", e => {
    const src = e.target.getAttribute("src");
    console.log(`imagen con el source ${src} clickeada `);
  });
})