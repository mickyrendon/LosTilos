const opacityContainer = document.querySelector('.opacity-container');
const menuContainer = document.querySelector('.menu-mobile-container');
const menuBtn = document.querySelector('.menu-btn');
const close = document.querySelector('.close');

// event
const dropdown = () =>{
    opacityContainer.classList.toggle('active');
    menuContainer.classList.toggle('active');
    document.body.classList.add('no-scroll');
    close.classList.add('rotate');
    
    console.log('menu desplegado');
}
menuBtn.addEventListener('click', dropdown, true);