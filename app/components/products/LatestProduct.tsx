import Product from "../product/product";
import "../styles/products.css"
import {products,getAllProducts} from "../../data/products"

const dt=getAllProducts();
export default function LatestProducts(){
    const products:Array<number>=[1,3,4,5,7,8,9,0,11,20]
    return(
        <div className="latest">
            <h3>Latest Products</h3>
            <div className="latest-products">
                <Product name="Product 1" image="/images/phone.png" price={199.99} rate={3} id={12}/>
                <Product name="Product 2" image="/images/phone.png" price={299.99} rate={5} id={15}/>
                <Product name="Product 3" image="/images/phone.png" price={399.99} rate={2} id={25}/>
                <Product name="Product 4" image="/images/phone.png" price={499.99} rate={4} id={30}/>
                {
                    products.map((x)=><Product name={`product ${x}`} key={x} image="/images/shirt.png" price={100*x} rate={x%5} id={x}/>)
                }
                {
                    dt.map((x)=><Product name={x.name} key={x.id} image={`/images/${x.imageUrl}`} price={x.cost} rate={x.rating} id={x.id}/>)
                }
            </div>
        </div>
    )
}