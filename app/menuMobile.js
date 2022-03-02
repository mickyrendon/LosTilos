const menuContainer = document.querySelector('.menu-mobile-container');
      menuContainer.style.display = 'none';
const menuBtn = document.querySelector('.menu-btn');
const close = document.querySelector('.close');
      close.style.display = 'none';
// evento
menuBtn.addEventListener('click', dropdown, true);

function dropdown(e){
    let status = menuContainer.style.display;
    console.log('clickeando menu mobile');

    if(status == 'none'){
    
        console.log('menu desplegado');
        // efecto sandwich e.target
        // e.target.style.background = 'red';
        menuContainer.style.display = 'flex';
        close.style.display = 'block'
        document.body.classList.add('no-scroll');
        
    }
}