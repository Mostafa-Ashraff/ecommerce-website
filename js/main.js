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





cards = document.querySelectorAll('.slider-card');

cards.forEach(card => {
    card.addEventListener('click', createCartItem())
});

function createCartItem(){
    
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const imgDiv = document.createElement('div');

        let itemImg = document.createElement('img');
        itemImg.src =  card.firstElementChild.src
        imgDiv.appendChild(itemImg);

        cartItem.appendChild(imgDiv);

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'product-details';
        const itemHd = document.createElement('h3');
        itemHd.className = 'product-name';
        itemHd.textContent = card.children[1].children[0].textContent;
        const itemPrice = document.createElement('p');
        itemPrice.className = 'product-price';
        itemPrice.textContent = card.children[1].children[1].textContent;


        detailsDiv.appendChild(itemHd);
        detailsDiv.appendChild(itemPrice);

        cartItem.appendChild(detailsDiv);

        const inputQuan = document.createElement('input');
        inputQuan.className = 'product-quantity';
        cartItem.appendChild(inputQuan);

        const sbTotal = document.createElement('p');
        sbTotal.className = 'product-subtotal';
        cartItem.appendChild(sbTotal);

        const removeSpan = document.createElement('span');
        removeSpan.innerHTML = '<i class="fa-solid fa-x remove-item"></i>';
        cartItem.appendChild(removeSpan);


        const hr = document.createElement('hr');
        cartItem.appendChild(hr);

        const cartDiv = document.querySelector('.cart');

        cartDiv.appendChild(cartItem);
}


let removeSpan = document.querySelectorAll('.remove-item');

removeSpan.forEach(btn => btn.addEventListener('click', ()=>{

    console.log(btn.parentElement.parentElement.remove());
}))
/*
const totalDiv = document.createElement('div');
totalDiv.className = 'total-price';
const total = document.createElement('h2');
const totalPrice = document.createElement('p');
totalPrice.className = 'product-price';

const paymentDiv = document.createElement('div');
const total = document.createElement('h2');
const totalPrice = document.createElement('p');
totalPrice.className = 'product-price';*/

