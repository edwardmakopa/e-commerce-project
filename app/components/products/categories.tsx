import Product from "../product/category"
import "../styles/categories.css"
import "../styles/category.css"
export default function Categories() {
    return (
        <div>
            <h4 className="color-red-600">Featured Categories</h4>
            <div className="categories">
                 <Product name="Fashion" image="../Fashion.png" />
                 <Product name="Electronics" image="../Electronics.png" />
                 <Product name="Home & Kitchen" image="../Home&Kitchen.png" />
                 <Product name="Beauty" image="../Beauty.png" />
                 <Product name="Sports" image="../Sports.png" />
                 <Product name="Toys & Games" image="../Toys&Games.png" />
                 <Product name="Books" image="../Books.png" />
                 <Product name="Automotive" image="../Automotive.png" />
            </div>
        </div>
    )
}