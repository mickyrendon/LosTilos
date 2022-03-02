
const servicesBtn  = document.querySelector('.services-anchor');
const productsBtn  = document.querySelector('.products-anchor');
const usBtn        = document.querySelector('.us-anchor');
const questionsBtn = document.querySelector('.questions-anchor');
const contactBtn   = document.querySelector('.contact-anchor');

const closing = () => {
    let status = menuContainer.style.display;
    // || ligtboxStatus == 'block'

    if(status == 'flex' ){

        console.log('menu plegado');
        // e.target.style.background = '#ffff';
        menuContainer.style.display = 'none';
        // lightbox.style.display = 'none';
        close.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }
 
    return `lista modo: ${status}`;
}

close.addEventListener('click', closing, true);
servicesBtn.addEventListener('click', closing, true);
productsBtn.addEventListener('click', closing, true);
usBtn.addEventListener('click', closing, true);
questionsBtn.addEventListener('click', closing, true);
contactBtn.addEventListener('click', closing, true);