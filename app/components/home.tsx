import Banner from "./banner"
import Categories from "./products/categories"
import LatestProducts from "./products/LatestProduct"
export default function Home() {

    return (
        <>
            <Banner />
            <Categories />
            <LatestProducts />
        </>
    )
}