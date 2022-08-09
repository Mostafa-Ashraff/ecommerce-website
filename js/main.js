//navigation burger menu toggle
const menu = document.querySelector('.nav-burger');
let menuOpen= false;
menu.addEventListener('click', ()=>{
    if(menuOpen === false){
        menu.classList.add('active');
        menuOpen = true;
    }
    else{
        menu.classList.remove('active');
        menuOpen = false;
    }
})