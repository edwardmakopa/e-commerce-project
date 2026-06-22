import Product from "@/app/components/product/product";
import Phone from "../../images/phone.png"
import "./styles.css";
import "../../components/styles/products.css"

export default function Container({title}:{title:string}){
    //randomly calculating the rating
    const rate=()=>{
        const y=Math.floor((Math.random()*5))
        return y;
    }
    return(
        <div className="category-container">
            <h1>{title}</h1>
            <div className="products">
                   <Product name="Product 1" image={Phone} price={199.99} rate={rate()}/>
                   <Product name="Product 1" image={Phone} price={199.99} rate={rate()}/>
                   <Product name="Product 1" image={Phone} price={199.99} rate={rate()}/>
                   <Product name="Product 1" image={Phone} price={199.99} rate={rate()}/>
                   <Product name="Product 1" image={Phone} price={199.99} rate={rate()}/>
                   <Product name="Product 1" image={Phone} price={199.99} rate={rate()}/>
                   <Product name="Product 1" image={Phone} price={199.99} rate={rate()}/>
                   <Product name="Product 1" image={Phone} price={199.99} rate={rate()}/>
            </div>
        </div>
    )
}