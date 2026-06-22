import Product from "../product/product";
import Phone from "../../images/phone.png"
import Ram from "../../images/ram.png"
import shirt from "../../images/shirt.png"
import "../styles/products.css"


export default function LatestProducts(){
    const products:Array<number>=[1,3,4,5,7,8,9,0,11,20]
    return(
        <div className="latest">
            <h3>Latest Products</h3>
            <div className="latest-products">
                <Product name="Product 1" image={Phone} price={199.99} rate={3}/>
                <Product name="Product 2" image={Phone} price={299.99} rate={5}/>
                <Product name="Product 3" image={Phone} price={399.99} rate={2}/>
                <Product name="Product 4" image={Phone} price={499.99} rate={4}/>
                {
                    products.map((x)=><Product name={`product ${x}`} key={x} image={Phone} price={100*x} rate={x%5}/>)
                }
            </div>
        </div>
    )
}