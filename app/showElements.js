function showElements(){
    classes.forEach(e => {
        //adding none class to header, btn nav, footer and sign nav
        e.classList.add('none');
        backBtn.style.display = 'flex';
        // adding display controller 'cause toggled between flex and none whithout any reason founded
        svgArrow.style.display = 'flex';
        menuBtn.classList.add('none');

        console.log(`galeria mostrada`);
    })
    return classes;
  }