import React from 'react'
import Image from 'next/image'
import "../components/styles/cart.css"
import Link from 'next/link'
function Cart() {
  return (
    <div className='cart'>
      <h3>your Cart</h3>
      <div className='cart-container'>

        <CartItems/>
        <CartButton/>
        <CartSummary/>
        
        
      </div>
    </div>
  )
}
function CartItems(){
  const items=[1,2,3,4,5]
  return(
    <div className='cart-items'>
      {items.map((x)=><CartItem name={`Product ${x}`} key={x} image={`/images/shirt.png`} price={100*x} quantity={x}/>)
      }
    </div>
  )
}

function CartSummary(){
  return(
    <div className='cart-summary'>
        <h3>Cart Summary</h3>
        <p>Total Items: 0</p>
        <p>tax:0</p>
        <p>Total Price: $0.00</p>
        <CartCheckoutButton/>

      </div>
  )
}

function CartItem({name, price, quantity,image}:{name:string, price:number, quantity:number, image:string}){
  return (
    <div className='cart-item'>
      <div className='cart-item-image-container'>
      < Image src={image} alt={name} className='cart-item-image' width={500} height={500}/>
      </div>
      <div className='cart-item-details'>
        <h3>{name}</h3>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <Removebutton/>
      </div>
    </div>
  )
}
function Removebutton(){
  return(
    <div className='Removebutton'>
      <button>remove</button>
    </div>
  )
}
function CartButton(){
  return(
    <div className='Cartbutton'>
      <a href='../categoriesHome'>
      <button>keep shopping</button>
      </a>
    </div>
  )
}
function CartCheckoutButton(){
    return(
      <div className='CartCheckoutButton'>
        <button>purchase</button>
      </div>
    )
}
  
export default Cart;