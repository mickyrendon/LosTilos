function hiddeElements(){
    classes.forEach(e => {
      e.classList.remove('none');
      // solucionar problema despues de tres clicks no aparece mas.... 
      backBtn.style.display = 'none';
      menuBtn.classList.remove('none');
      console.log(`elementos ocultos`);
    })
    return classes;
  }