import React from 'react'

function Cart() {
  return (
    <div className='cart-container'>
      //the header
      <h1>your Cart</h1>

      //cart items will be displayed here
      <CartItems/>

      //the summary part
      <CartSummary/>
    </div>
  )
}
function CartItems(){
  return(
    <div className='cart-items'>
    </div>
  )
}

function CartSummary(){
  return(
    <div className='cart-summary'>
        <h3>Cart Summary</h3>
        <p>Total Items: 0</p>
        <p>Total Price: $0.00</p>
      </div>
  )
}
export default Cart;