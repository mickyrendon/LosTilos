
const servicesBtn  = document.querySelector('.services-anchor');
const productsBtn  = document.querySelector('.products-anchor');
const usBtn        = document.querySelector('.us-anchor');
const questionsBtn = document.querySelector('.questions-anchor');
const contactBtn   = document.querySelector('.contact-anchor');

const closing = (e) => {
    opacityContainer.classList.toggle('active');
    menuContainer.classList.toggle('active');
    document.body.classList.remove('no-scroll');
    close.classList.remove('rotate');
    close.classList.add('undo-rotate');

    console.log('menu plegado');
}

close.addEventListener('click', closing, true);
opacityContainer.addEventListener('click', closing, true)
servicesBtn.addEventListener('click', closing, true);
productsBtn.addEventListener('click', closing, true);
usBtn.addEventListener('click', closing, true);
questionsBtn.addEventListener('click', closing, true);
contactBtn.addEventListener('click', closing, true);