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

let productsData = [
    {
        id: 'a1',
        name: 'Lounge Chair',
        img: 'imgs/home/slider/1.jpg',
        price: '$395.99'
    },
    {
        id: 'a2',
        name: 'Retro ‘98 Light',
        img: 'imgs/home/slider/2.jpg',
        price: '$315.99'
    },
    {
        id: 'a3',
        name: 'Dining Chairs',
        img: 'imgs/home/slider/3.jpg',
        price: '$499.99'
    },
    {
        id: 'a4',
        name: 'Accent Chair',
        img: 'imgs/home/slider/4.jpg',
        price: '$265.99'
    },
    {
        id: 'a5',
        name: 'Wooden Chair',
        img: 'imgs/shop/1.jpg',
        price: '$286.99'
    },
    {
        id: 'a6',
        name: 'Bedside Table',
        img: 'imgs/shop/2.jpg',
        price: '$312.49'
    },
    {
        id: 'a7',
        name: 'Stylish Clay Jug',
        img: 'imgs/shop/3.jpg',
        price: '$312.79'
    },
    {
        id: 'a8',
        name: 'Green, Sleek Sofa',
        img: 'imgs/shop/4.jpg',
        price: '$449.49'
    },
    {
        id: 'a9',
        name: 'Clay Flower Vase',
        img: 'imgs/home/collec/4.jpg',
        price: '$286.49'
    },
    {
        id: 'a10',
        name: 'Kid\'s Chair',
        img: 'imgs/home/collec/3.jpg',
        price: '$319.49'
    },
    {
        id: 'a11',
        name: 'Flower Vase',
        img: 'imgs/home/collec/2.jpg',
        price: '$312.49'
    },
    {
        id: 'a12',
        name: 'Coffee Thermos ',
        img: 'imgs/home/collec/1.jpg',
        price: '$49.49'
    },
];
let shopCards = document.getElementById('products');
let generateCard = ()=>{
    return(shopCards.innerHTML = productsData.map((product)=>{
        let {id, name, img, price} = product;
        return `
        <div class="slider-card" data-id="${id}">
                    <img src="${img}" alt="">
                    <div class="card-links">
                    <span class="add-to-cart-btn"><i><i class="bi bi-cart3"></i></i></span>
                    <span><i class="bi bi-eye-fill"></i></span>
                    </div>
                    <div class="card-text">
                        <p>${name}</p>
                        <p>${price}</p>
                    </div>

        </div>
        `
    }).join('')
)}

generateCard();



const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
/*
cards.forEach(card => {
let cartItem = document.createElement('div');
cartItem.className = 'cart-item';

const imgDiv = document.createElement('div');

let itemImg = document.createElement('img');
itemImg.src =  `${card.firstElementChild.src}`;
imgDiv.appendChild(itemImg);

cartItem.appendChild(imgDiv);

const detailsDiv = document.createElement('div');
detailsDiv.className = 'product-details';
const itemHd = document.createElement('h3');
itemHd.className = 'product-name';
itemHd.textContent = `${card.children[1].children[0].textContent}`;
const itemPrice = document.createElement('p');
itemPrice.className = 'product-price';
itemPrice.textContent = `${card.children[1].children[1].textContent}`;


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
});
*/
addToCartBtns.forEach(Btn => Btn.addEventListener('click', ()=>{
    let productID = Btn.parentElement.parentElement.dataset.id;
    let prod = productsData.filter((product)=>{
        product.id === productID;
    });
    product = {...prod};
    console.log(product)
    let cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    const imgDiv = document.createElement('div');

    let itemImg = document.createElement('img');
    itemImg.src =  `${product.img}`;
    imgDiv.appendChild(itemImg);

    cartItem.appendChild(imgDiv);

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'product-details';
    const itemHd = document.createElement('h3');
    itemHd.className = 'product-name';
    itemHd.textContent = `${product.name}`;
    const itemPrice = document.createElement('p');
    itemPrice.className = 'product-price';
    itemPrice.textContent = `${product.price}`;


    detailsDiv.appendChild(itemHd);
    detailsDiv.appendChild(itemPrice);

    cartItem.appendChild(detailsDiv);

    const inputQuan = document.createElement('input');
    inputQuan.className = 'product-quantity';
    cartItem.appendChild(inputQuan);

    const sbTotal = document.createElement('p');
    sbTotal.className = 'product-subtotal';
    sbTotal.textContent = `${product.price}`;
    cartItem.appendChild(sbTotal);

    const removeSpan = document.createElement('span');
    removeSpan.innerHTML = '<i class="fa-solid fa-x remove-item"></i>';
    cartItem.appendChild(removeSpan);


    const cartDiv = document.querySelector('.cart-items');

    cartDiv.appendChild(cartItem);
    console.log(Btn.parentElement.parentElement.dataset.id)
}));
















function createCartItem(){
    let productID = Btn.parentElement.parentElement.dataset.id;
    let product = productsData.filter((product)=>{
        product.id == productID;
    });

    let cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    const imgDiv = document.createElement('div');

    let itemImg = document.createElement('img');
    itemImg.src =  `${product.img}`;
    imgDiv.appendChild(itemImg);

    cartItem.appendChild(imgDiv);

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'product-details';
    const itemHd = document.createElement('h3');
    itemHd.className = 'product-name';
    itemHd.textContent = `${product.name}`;
    const itemPrice = document.createElement('p');
    itemPrice.className = 'product-price';
    itemPrice.textContent = `${product.price}`;


    detailsDiv.appendChild(itemHd);
    detailsDiv.appendChild(itemPrice);

    cartItem.appendChild(detailsDiv);

    const inputQuan = document.createElement('input');
    inputQuan.className = 'product-quantity';
    cartItem.appendChild(inputQuan);

    const sbTotal = document.createElement('p');
    sbTotal.className = 'product-subtotal';
    sbTotal.textContent = `${product.price}`;
    cartItem.appendChild(sbTotal);

    const removeSpan = document.createElement('span');
    removeSpan.innerHTML = '<i class="fa-solid fa-x remove-item"></i>';
    cartItem.appendChild(removeSpan);


    const cartDiv = document.querySelector('.cart-items');

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

