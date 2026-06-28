"use client";
import Image, { StaticImageData } from "next/image";
import {useCart} from "../../context/cartContext"
import "../styles/products.css"
export default function Product({ name, image, price,rate ,id}: { name: string; image: string; price: number; rate:number; id:number }) {
    const {addToCart}=useCart()
    const data={id:id,name:name,image:image,price:price,quantity:1}

    function rating(x:number){
        console.log()
        switch(x){
            case 1:
                return "★";
            case 2:
                return "★★";
            case 3:
                return "★★★"
            case 4:
                return "★★★★";
            case 5:
                return "★★★★★";
        }
        return "★"

    }
    return (
        <div className="product">
             <div className="product-image">
                <Image src={image} alt={name} className="image" width={500} height={500}/>
             </div>
             <div className="product-details">
                <p className="product-name">{name}</p>
                <p className="rating">{rating(rate)}</p>
                <p className="price">${price.toFixed(2)}</p>

                {/* option to choose quantity */}
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button className="add-to-cart" onClick={()=>{
                    console.log(data);
                    addToCart(data)
                    console.log("data added")

                }}>Add to Cart</button>
            </div>
        </div>
    );
}