basket = JSON.parse(localStorage.getItem("data")) || [];
let removeItem = ()=>{
    let removeSpan = document.querySelectorAll('.remove-item');
    removeSpan.forEach(btn => btn.addEventListener('click', ()=>{

        btn.parentElement.parentElement.remove();
    }))
} 
removeItem();
basket.forEach((item)=>{
    console.log(item);
    let cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <div>
        <img src="${item.img}" alt="">    
        </div>
        <div class="product-details">
            <h3 class="product-name">${item.name}</h3>
            <p class="product-price">$${item.price}</p>
        </div>
        <div class="cart-btns">
            <i class="bi bi-dash-lg"></i>
            <div id="" class="quantity">${item.quantity}</div>
            <i class="bi bi-plus-lg"></i>
        </div>
        <p class="product-subtotal">$ ${item.price * item.quantity}</p>
        <span><i class="fa-solid fa-x remove-item"></i></span>
        </div>
    `
    console.log(cartItem);

    cartItemsDiv.appendChild(cartItem);

    removeItem();
})/*
let generateCartItem = ()=>{
    let cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <div>
        <img src="${basket[0].img}" alt="">    
        </div>
        <div class="product-details">
            <h3 class="product-name">${basket[0].name}</h3>
            <p class="product-price">$${basket[0].price}</p>
        </div>
        <div class="cart-btns">
            <i class="bi bi-dash-lg"></i>
            <div id="" class="quantity">${basket[0].quantity}</div>
            <i class="bi bi-plus-lg"></i>
        </div>
        <p class="product-subtotal">$ ${basket[0].price * basket[0].quantity}</p>
        <span><i class="fa-solid fa-x remove-item"></i></span>
        </div>
    `
    console.log(cartItem);

    cartItemsDiv.appendChild(cartItem);

    removeItem();
}

generateCartItem();
*/

