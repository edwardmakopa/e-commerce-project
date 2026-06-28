"use client"
import React from 'react'
import Image from 'next/image'
import "../components/styles/cart.css"
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '../context/cartContext'

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
    const {cart,removeFromCart}:{cart: any[], removeFromCart: (productId: number) => void}=useCart();
  // selected items in state
    const [collection, setCollection]=useState(cart);
  //const items=[1,2,3,4,5]

  //remove item from cart
  function removeItemFromCart(itemId:number){
    removeFromCart(itemId);
  }
  return(
    <div className='cart-items'>
      {
      cart.map((item)=><CartItem itemId={item.id} name={item.name} key={item.id+item.name} image={item.image} price={item.price} quantity={item.quantity} onRemove={removeItemFromCart}/>)
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

function CartItem({itemId, name, price, quantity, image, onRemove}:{itemId: number, name: string, price: number, quantity: number, image: string, onRemove: (itemId: number) => void}){
  return (
    <div className='cart-item'>
      <div className='cart-item-image-container'>
      <Image src={image} alt={name} className='cart-item-image' width={500} height={500}/>
      </div>
      <div className='cart-item-details'>
        <h3>{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price.toFixed(2)}</p>
      </div>
      <div className="adjust-quantity">
        <div className='quantity'>
          <button className="decrement">-</button>
          <span>{quantity}</span>
          <button className="increment">+</button>
        </div>
        <Removebutton onRemove={onRemove} itemId={itemId}/>
      </div>
      <div className='cart-item-total'>
        <p>Total: ${(price*quantity).toFixed(2)}</p>
      </div>
    </div>
  )
}

//all about remove button
function Removebutton({ onRemove, itemId }: { onRemove: (itemId: number) => void; itemId: number }){
  return(
    <div className='Removebutton'>
      <button onClick={() => onRemove(itemId)}>remove</button>
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
        <a href='../purchaseform'>
        <button>purchase</button>
        </a>
      </div>
    )
}
  
export default Cart;