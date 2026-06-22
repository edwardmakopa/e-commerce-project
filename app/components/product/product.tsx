import Image, { StaticImageData } from "next/image";
import "../styles/products.css"
export default function Product({ name, image, price,rate }: { name: string; image: StaticImageData; price: number; rate:number }) {
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
                <Image src={image} alt={name} className="image"/>
             </div>
             <div className="product-details">
                <p className="product-name">{name}</p>
                <p className="rating">{rating(rate)}</p>
                <p className="price">${price.toFixed(2)}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
}