import Product from "@/app/components/product/product";
import "./styles.css";
import "../../components/styles/products.css"
import {getAllProducts} from "../../data/products"

export default function Container({title}:{title:string}){
    const products=getAllProducts();
    //randomly calculating the rating
    const rate=()=>{
        const y=Math.floor((Math.random()*5))
        return y;
    }
    return(
        <div className="category-container">
            <h1>{title}</h1>
            <div className="products">
                   <Product name="Product 1" image="/images/phone.png" price={199.99} rate={rate()} id={1}/>
                   <Product name="Product 1" image="/images/phone.png" price={199.99} rate={rate()} id={2}/>
                   <Product name="Product 1" image="/images/phone.png" price={199.99} rate={rate()} id={3}/>
                   <Product name="Product 1" image="/images/phone.png" price={199.99} rate={rate()} id={4}/>
                   <Product name="Product 1" image="/images/phone.png" price={199.99} rate={rate()} id={5}/>
                   <Product name="Product 1" image="/images/phone.png" price={199.99} rate={rate()} id={6}/>
                   <Product name="Product 1" image="/images/phone.png" price={199.99} rate={rate()} id={7}/>
                   <Product name="Product 1" image="/images/phone.png" price={199.99} rate={rate()} id={8}/>
                   {
                    products.map((x)=><Product name={x.name} key={x.id} image={`/images/${x.imageUrl}`} price={x.cost} rate={x.rating} id={x.id}/>)
                   }
            </div>
        </div>
    )
}