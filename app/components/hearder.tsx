import "./styles/header.css"
import Link from "next/link"
export default function Hearder(){
  return(
    <nav className="navigation-bar">
      <LeftNav key="a"/>
      <MiddleNav key="b"/>
      <RightNav key="c"/>
    </nav>
  )
}
function LeftNav(){
  return (
      <menu className="left"><h4><Link href="/">nrc-market</Link></h4></menu>
  )
}
function RightNav(){
  return (
    <div className="right">
      <a>sign in</a><span>|</span>
      <a className="orders ">orders</a><span>|</span>
      <div className="notificationIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
          <path d="M12 24c1.326 0 2.402-1.077 2.402-2.402h-4.804c0 1.325 1.076 2.402 2.402 2.402zm6.364-6v-5c0-3.072-1.639-5.64-4.5-6.32V6a1.864 1.864 0 10-3.728 0v.68C7.275 7.36 5.636 9.928 5.636 13v5l-1.636 1.636V21h16v-1.364L18.364 18z"/>
        </svg>
      </div>
    </div>   )
}
function MiddleNav(){
  return (
    <div className="middle">
      <div className="search-box">
          <SearchInput placeholder="    search products" id="search-input" key=""/>
          <span id="search-icon" className="">🔍</span>
      </div>
    </div>
  )
}
function SearchInput(props:{placeholder:string, id:string}){
  return(
      <input type="text" placeholder={props.placeholder} className=""></input>

  )
}