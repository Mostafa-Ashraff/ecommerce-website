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
    console.log(selectedProduct);
    let product = productsData.filter((product)=>product.id === selectedProduct.id);
    console.log(product)
    if(!basket.find((x)=>x.id ===product[0].id)){
        product[0].quantity = 1;
        basket.push(product[0]);
    }else{
        let productInBasket = basket.find((x)=>x.id ===product[0].id);
        
        productInBasket.quantity += 1;

    }
    localStorage.setItem("data", JSON.stringify(basket));
    calcCartItems();
    console.log(basket);

})))



calcCartItems();


let toViewDetails =[];

let viewDetailsBtns = Array.from(document.querySelectorAll('.view-details-btn'));

viewDetailsBtns.forEach(btn => btn.addEventListener('click', (()=>{
    let toViewDetails =[];
    let selectedProduct = btn.parentElement.parentElement;
    /*console.log(selectedProduct);*/
    let detailedproduct = productsData.filter((product)=>product.id === selectedProduct.id);
    toViewDetails.push(detailedproduct[0]);
    console.log(toViewDetails);
    localStorage.removeItem("details");
    localStorage.setItem("details", JSON.stringify(toViewDetails));
    window.location.href="http://127.0.0.1:5500/product-details.html";
})))

/*
viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', (()=>{
        let  selectedProduct = btn.parentElement.parentElement;
        let product = productsData.filter((product)=>product.id === selectedProduct.id);
        console.log(product);
    }))

})
`
            <div>
                <img src="imgs/shop/5.jpg" alt="">
            </div>
            <div class="details-info">
                <h2>RH Aesthetically Comfortable Wingback Chair</h2>
                <p class="price">£449.00</p>
                <p>Tax included.</p>
                <div class="btns">
                    <a href="#" class="add-to-cart add-to-cart-btn">Add To Cart</a>
                    <a href="#" class="add-to-cart">Add To Favorites</a>
                </div>
                <p>The RH Aesthetically Comfortable Wingback armchair is a total package of style and function for your home or workspace. Its richly hued soft-to-the-touch upholstery, detailed vertical channel-tufted backrest, and brass-toned tapered metal legs set the stage for a memorable design experience.</p>
                <p>Offered in various colors and fabric textures, this outstanding armchair will serve as an anchor piece, allowing you to indulge in comfort and will completely transform your room from bland to modern-day glam.</p>
                <p class="dimensions">W67 x D73 x H80cm</p>
            </div>
`*/