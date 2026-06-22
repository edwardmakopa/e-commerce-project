import Container from "./categoryContainer/container";
import "./styles.css"

export default function Home(){
    return(
        <div className="category-home">
            <p className="first"></p>
            <div className="categoriesHome">
                <h1 id="head">OUR COLLECTION</h1>
                <Container title="electronics"/>
                <Container title="electronics"/>
                <Container title="electronics"/>
            </div>
        </div>
    )
}