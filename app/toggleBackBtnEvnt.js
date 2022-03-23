function toggleBackBtnEvnt(){
    // removing backbtn event
    backBtn.removeEventListener('click', hiddeElements, true);
    console.log(`evento hidden removido del backbtn`);
    // adding new backbtn event
    backBtn.addEventListener('click', backToGallery, true);
    console.log(`evento backToGallery agregado al backbtn`);
}