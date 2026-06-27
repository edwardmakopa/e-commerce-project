import Product from "../product/category"
import "../styles/categories.css"
import "../styles/category.css"
export default function Categories() {
    return (
        <div>
            <h4 className="color-red-600">Featured Categories</h4>
            <div className="categories">
                 <Product name="Fashion" image="../images/shirt.png" />
                 <Product name="Electronics" image="../images/Ram.png" />
                 <Product name="Home & Kitchen" image="../images/pot.jpeg" />
                 <Product name="Beauty" image="../images/oil2.jpg" />
                 <Product name="Sports" image="../images/ball.jpeg" />
                 <Product name="Toys & Games" image="../images/toys.jpeg" />
                 <Product name="Books" image="../images/books.jpeg" />
                 <Product name="Shoes" image="../images/shoes.jpeg" />
            </div>
        </div>
    )
}