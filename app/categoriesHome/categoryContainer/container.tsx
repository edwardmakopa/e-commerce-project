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
                   <Product name="spark 40" image="/images/phone.jpg" price={199.99} rate={rate()}/>
                   <Product name="s22 utra" image="/images/s22.jpg" price={199.99} rate={rate()}/>
                   <Product name="Pc charger" image="/images/pccharger.jpg" price={199.99} rate={rate()}/>
                   <Product name="lenovo" image="/images/pc.jpg" price={199.99} rate={rate()}/>
                   <Product name="redmi" image="/images/redmi.jpg" price={199.99} rate={rate()}/>
                   <Product name="spark 50" image="/images/phone.png" price={199.99} rate={rate()}/>
                   <Product name="spark 50" image="/images/phone.png" price={199.99} rate={rate()}/>
                   <Product name="spark 50" image="/images/a25.jpg" price={199.99} rate={rate()}/>
                   {
                    products.map((x)=><Product name={x.name} key={x.id} image={`/images/${x.imageUrl}`} price={x.cost} rate={x.rating}/>)
                   }
            </div>
        </div>
    )
}