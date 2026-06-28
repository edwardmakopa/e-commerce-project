"use client"
import { createContext, useContext, useState } from "react";

//create the context to store the data
const CartContext=createContext();

export function CartProvider({children}){

console.log("cartProvider mounted");
    //the provider will provide the data and the add to cart function
    const [cart, setCart]=useState([{id:1,name:"samusung",image:"/images/phone.png",quantity:2,price:40}]);
    function addToCart(product){
        setCart((prevCart) => [...prevCart, product]);
    }

    function removeFromCart(productId){
        setCart(cart.filter((item) => item.id !== productId));
    }
    console.log(cart)
    //retuening the provider having its values set to those two
    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )

}

// a function for using the context
export const useCart=()=>useContext(CartContext);
