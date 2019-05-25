// if (document.readyState == 'loading') {
//   document.addEventListener('DOMContentLoaded', ready)
// } else {
//   ready();
// }

  // removeCartItemButtons set to all elements with the class of "btn-danger" 
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  //console.log(removeCartItemButtons);
  
  //For every removeCartItemButtons length loop through them with var i.  
  for (var i = 0; i < removeCartItemButtons.length; i++){
    // Next save whatever element class is pressed in variable. 
    var button = removeCartItemButtons[i]
    
    // Next we need to set up a click event on that variable. Just the click motion.
    // The event listerner always returns an event object.
    // The event object is inside of the function being called


    button.addEventListener('click', function(event){
      // This event object has a property called target.
      // The event.target is esentailly what ever button we clicked on.
      // Next we hold that in a varible called buttonClicked
      // What we wont to do is get that cart row that button is inside.     
      var buttonClicked = event.target
      // we take our buttonClicked and the divison is is in <div class="cart-quantity cart-column">.
      // Then we grap that the hole row element <div class="cart-row"> then the remove function. 
      buttonClicked.parentElement.parentElement.remove()
      // Now we call updateCartTotal 
      updateCartTotal();
    });
  }
  
  // We grap all elements with a class of cart-quanity-input and hold them in a variable called quantityInputs.  

  var quantityInputs = document.getElementsByClassName('cart-quanity-input');
  //  Next for every quantityInputs we loop through them with var i.
  
  for (var i = 0; i < quantityInputs.length; i++) {
    // Inside the loop we need to grap on to one 'cart-quanity-input' element and hold it in a varible.

    var input = quantityInputs[i]
    // Next we need to set up a 'change' event on that variable.... 
    
    input.addEventListener('change', quantityChanged) 
  }
  // addToCartButtons set to all elements with the class of 'shop-item-button'  
  
  var addToCartButtons = document.getElementsByClassName('shop-item-button');
  // For all addToCartButtons, loop through how many there them with i variable.

  for (var i = 0; i < addToCartButtons.length; i++) {
    // Inside the loop we need to grap on to one element and hold it in a variable.
    
    var button = addToCartButtons[i];
    // Then we add a 'click' event to that variable. So when it is clicked the event runs and the function addToCartClicked.
   
    button.addEventListener('click', addToCartClicked) 
  }


// function removeCartItem(event) {
//   var buttonClicked = event.target
//   buttonClicked.parentElement.parentElement.remove()
//   updateCartTotal()
// }

// What we wont to do when our quantity is changed. 
function quantityChanged(event) {
  // What we wont to do when our quantity has changed
  // First we get the quantity element and set it to the element we need 
  var input = event.target
  // Then we wont to check to see if the value inside the input is a valued value
  
  // First we check if it is a number and if the number is 1 or higher
  if (isNaN(input.value) || input.value <= 0 ) {
    // if so we wont to set our input value to 1
    
    input.value = 1 
  }
  // Then we wont to update the total inside out cart
  
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target

  // First create a variable called shopItem. 
  // And the shop-item-button class which is inside the shop-item-details Div element. 
  // Set it to the variable button along with.  
  var shopItem = button.parentElement.parentElement
  
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  
  addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
  // Next we need to create a cart row.

  // First we store cartRow into a variable. Then we set it to a new element which we will add to our html later. 
  
  var cartRow = document.createElement('div');
  // Next we wont to add this new element to the "cart-items" class. The first array
  
  cartRow.classList.add('cart-row');
  // We hold the "cart-items" class element in a variable called cartItems. The first array. 


  var cartItems = document.getElementsByClassName('cart-items')[0];
  // This is the content of our cartRow variable. 
  
  // First we store the contents in a variable and set it to a string. 
  // var cartRowContents = ` 
  //   <div class="cart-item cart-column">
  //     <img class="cart-item-image" src="img/bbq-crunch.jpg"></img>
  //     <span class="cart-item-title">Bbq crunch</span>
  //   </div>
  //   <span class="cart-price cart-column">£1.99</span>
  //   <div class="cart-quantity cart-column"> 
  //     <input class="cart-quantity-input" type="number" value="1"></input>
  //     <button class="btn btn-danger" type="button">REMOVE</button>
  //   </div> `
  //cartRow.innerHTML = cartRowContents 

  // Next we add the cartItems variable to the CartRow variable
  cartItems.append(cartRow);
}


// What we wont to do in this function is go through every row. 
// We wont to find the price and multiply that by the quantity. Then add that together for every sinlge one of our rows.
// Then display it in our total

// First thing to do is get element class <div class="cart-items"> Because it raps all element classes called "cart-row"> 
// But we only want to get the first element in array

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  // Inside of that cartItemContainer we want to get element by class name 'cart-row'
  // Using getElementsByClassName on an object cartItemContainer well only get the elements inside of that object that 
  // have this differant class then we set it to a varible 'cartRows'   
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0;
  
  for (var i = 0; i < cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('$',''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100 
  document.getElementsByClassName('cart-total-price')[0].innerText = '£' + total 
}
console.log(priceElement, quanityElement);


 