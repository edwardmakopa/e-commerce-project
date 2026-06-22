import Link from "next/link";

export default function Product({name, image}: {name: string, image: string}){
    return(
        <div className="category">
            <h4>{name}</h4>
            <p><Link href="/shop">Shop &gt;</Link></p>
        </div>
    )
}