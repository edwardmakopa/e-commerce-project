import Product from "../product/product";
import "../styles/products.css"
import {products,getAllProducts} from "../../data/products"

const data=getAllProducts();
export default function LatestProducts(){
    const products:Array<number>=[1,3,4,5,7,8,9,0,11,20]
    return(
        <div className="latest">
            <h3>Latest Products</h3>
            <div className="latest-products">

                <Product id={1} name="s24 ultra" image="/images/phone.png" price={199.99} rate={3}/>
                <Product id={2} name="necklace" image="/images/neck.jpg" price={299.99} rate={5}/>
                <Product id={3} name="a25" image="/images/a25.jpg" price={399.99} rate={2}/>
                <Product id={4} name="Product 5" image="/images/redmi.jpg" price={499.99} rate={4}/>
                <Product id={5} name="4g router" image="/images/router.jpg" price={499.99} rate={5}/>
                <Product id={7} name="pc" image="/images/pc.jpg" price={499.99} rate={1}/>
                <Product id={8} name="Powerbank" image="/images/pb.jpg" price={499.99} rate={4}/>
                <Product id={9} name="oil" image="/images/pc2.jpg" price={499.99} rate={2}/>
                {
                    products.map((x)=><Product id={x}name={`product ${x}`} key={x} image="/images/s22.jpg" price={100*x} rate={x%5}/>)
                }
                {
                    data.map((x)=><Product name={x.name} key={x.id} image={`/images/${x.imageUrl}`} price={x.cost} rate={x.rating} id={x.id}/>)
                }
            </div>
        </div>
    )
}