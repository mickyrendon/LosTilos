function hiddeElements(){
    classes.forEach(e => {
      e.classList.remove('none');
      menuBtn.classList.remove('none');
      backBtn.style.display = 'none';
      // adding display controller 'cause toggled between flex and none whithout any reason founded
      svgArrow.style.display = 'none';
      galleryC.style.display = 'none';

      console.log(`elementos ocultos`);
    })
    return classes;
  }