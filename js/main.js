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





let basket = JSON.parse(localStorage.getItem("data")) || [];
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartItemsDiv = document.querySelector('.cart-items');


let calcCartItems = () =>{
    let itemsDiv = document.querySelector('.items-no');
    console.log(itemsDiv)
    let numberOfItems = basket.map(item=>{
        return item.quantity
    }).reduce((prev, curr)=> prev + curr, 0);
    
    itemsDiv.textContent = `${numberOfItems}`
    localStorage.getItem("cartItems")
        
    localStorage.setItem("cartItems", numberOfItems);
    itemsDiv.textContent = `${localStorage.getItem("cartItems")}`;
    localStorage.setItem("cartItems", numberOfItems);
    console.log(numberOfItems);

}

calcCartItems();

addToCartBtns.forEach(btn => btn.addEventListener('click', (()=>{
    let selectedProduct = btn.parentElement.parentElement;
    let product = productsData.filter((product)=>product.id === selectedProduct.id);
    if(!basket.find((x)=>x.id ===product[0].id)){
        product[0].quantity = 1;
        basket.push(product[0]);
    }else{
        let basketProduct = basket.find((x)=>x.id ===product[0].id);
        
        basketProduct.quantity += 1;

    }
    localStorage.setItem("data", JSON.stringify(basket));
    calcCartItems();
    console.log(basket);

})))



calcCartItems();
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






/*
addToCartBtns.forEach(Btn => Btn.addEventListener('click', ()=>{
    let productID = Btn.parentElement.parentElement.id;
    console.log(productID)
    let product = productsData.find((product)=>{
        product.id === `${productID}`;
    });
    console.log(product)
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

    const quantityDiv = document.createElement('div');
    quantityDiv.className = 'cart-btns';
    quantityDiv.innerHTML = `
    <i onclick="increment(${id})" class="bi bi-dash-lg"></i>
    <div id="" class="quantity">1</div>
    <i class="bi bi-plus-lg"></i>
    `
    cartItem.appendChild(quantityDiv);

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

