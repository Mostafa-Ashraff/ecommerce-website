//navigation burger menu toggle
const menu = document.querySelector('.nav-burger');
const nav = document.querySelector('.navbar');
let menuOpen= false;
menu.addEventListener('click', ()=>{
    if(menuOpen === false){
        menu.classList.add('active');
        nav.classList.add('active');
        menuOpen = true;
    }
    else{
        menu.classList.remove('active');
        nav.classList.remove('active');
        menuOpen = false;
    }
})

//glider setup



function btns(){
    let prevBtn = document.querySelector('.slick-prev');
    prevBtn.innerHTML = `<span><i class="fa-solid fa-angle-left"></i></span>`;
    
    let prevNext = document.querySelector('.slick-next');
    prevNext.innerHTML = `<span><i class="fa-solid fa-angle-right"></i></span>`;
    
};
setInterval(btns, 1)
