import Link from "next/link";

export default function Navigation(){
    return(
        <div className="menu-tab">
            <span><a href={"/"}>Home</a></span>
            <span><a href={""}>Shop All</a></span>
            <span><a href={""}>New Collections</a></span>
            <span><a href={""}>Services</a></span>
            <span><a href={""}>Parcel</a></span>
            <span><a href={""}>Help</a></span>
        </div>
    )
}