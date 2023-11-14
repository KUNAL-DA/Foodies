//===================
// Nav bar toggle:
//===================
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    })
})
//========================
//  Number Copy Function
//========================
let number = document.getElementById('number');
number.onclick = function(){
    setTimeout(() => {
        navigator.clipboard.writeText(number.innerHTML);
    }, 1000);
    setTimeout(() => {
        number.innerText = "Copied";
    }, 1200);
}
 number.onmouseover = function(){
        setTimeout(() => {
            number.innerText = "1200 345 212";
        }, 1000);
        number.innerText = "Wait a Sec....";
    }

// ==================================
//     Add-to-Cart Toggle Function :
// ==================================

let cart_status = document.getElementById('cart_status');
let cartItem = document.querySelector('.ca_rt');
let cro_ss = document.querySelector('.cro_ss');
let message = document.getElementById('message');


function Cartitems(){
     cartItem.classList.toggle('active');
     cro_ss.onclick = function(){
        cartItem.classList.remove('active');
     }
}

//=======================
// Add to cart Function:
//=======================
let cartQuantity = 0;
let totalPrice = 0;

//Notification in cart
 document.querySelector('.status').innerHTML = "Your Cart Is Empty";
   
// Main function starts
function addToCart(image, name, price) {
    
    // Increment quantity
    cartQuantity++;

    // onclick change notification in cart
    document.querySelector('.status').innerHTML = "Thanks For Chooseing our service";

    // Update cart quantity display
    document.getElementById('cart_status').innerText = cartQuantity;

    // Create a new element for the cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <div id = "name_pro">${name}</div>
        <div id = "price_pro">$${price.toFixed(2)}</div>
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(this, ${price})">Remove</button>
    `;
   
    // Append the cart item to the cart
    document.getElementById('cartItems').appendChild(cartItem);

    // Update total price
    totalPrice += price;
    document.getElementById('totalPrice').innerText = `Total: $${(totalPrice).toFixed(2)}`;
   

}
function removeFromCart(button, price) {
    // Decrement quantity
    cartQuantity--;

    if(cartQuantity == 0){
        document.querySelector('.status').innerHTML = "Your Cart Is Empty";
        
    }
    confirm("Do You Really Want To Remove This Item?");

    var successMessageElement = document.createElement(`div`);
    successMessageElement.innerHTML = "Item Has Been Removed Succesfully ✓";
    successMessageElement.style.color = "red";
    successMessageElement.style.fontWeight = "700";
    successMessageElement.style.background = "#eee";
    successMessageElement.style.padding = "1rem";
    successMessageElement.style.position = "fixed";
    successMessageElement.style.top = "25%";
    successMessageElement.style.left = "50%";
    successMessageElement.style.transform = "translate(-50%, -50%)";

    // Append the element to the body
    document.body.appendChild(successMessageElement);
  
    // After 3 seconds, remove the success message element
    setTimeout(function() {
      document.body.removeChild(successMessageElement);
    }, 1000);

    // Update cart quantity display
    document.getElementById('cart_status').innerText = cartQuantity;

    // Remove the cart item
    const cartItem = button.parentElement;
    cartItem.remove();
    
    // Update total price
    totalPrice -= price;
    document.getElementById('totalPrice').innerText = `Total: $${(totalPrice).toFixed(2)}`;

    
}

 function addMessage () {
  // Create a success message element
  var successMessageElement = document.createElement("div");
  successMessageElement.innerHTML = "Item Has Been Succesfully Added ✔";
  successMessageElement.style.color = "green";
  successMessageElement.style.fontWeight = "700";
  successMessageElement.style.background = "#eee";
  successMessageElement.style.padding = "1rem";
  successMessageElement.style.position = "fixed";
  successMessageElement.style.top = "25%";
  successMessageElement.style.left = "50%";
  successMessageElement.style.transform = "translate(-50%, -50%)";
  
  // Append the element to the body
  document.body.appendChild(successMessageElement);

  // After 3 seconds, remove the success message element
  setTimeout(function() {
    document.body.removeChild(successMessageElement);
  }, 1000);

 
};






