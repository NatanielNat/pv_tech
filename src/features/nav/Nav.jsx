import React from 'react'
import "./Nav.css"
import IMG from "../../resources/logo_m-228w.webp"
import { Link } from 'react-router-dom'
import {useState} from "react"
 



const Nav = () => {

  const [active,setActive] = useState("#");

  return (
    <>
      <div className="container">
        <div className="logo">
          <img className="img_logo" src={IMG} alt="LOGO" />
        </div>
        <div className="navbar">
          <nav>
            <a href="#" onClick={()=> setActive("#")} className={active === "#" ? "active" : ""}><span className="hover"><Link to="/#">Home</Link></span></a>
            <a href="#" onClick={()=> setActive("#about")} className={active === "#about" ? "active" : ""}><span className="hover"><Link to="/about">About</Link></span></a>
            <a href="#" onClick={()=> setActive("#wartung")} className={active === "#wartung" ? "active" : ""}><span className="hover"><Link to="/wartung">Wartung</Link></span></a>
            <a href="#" onClick={()=> setActive("#kontakt")} className={active === "#kontakt" ? "active" : ""}><span className="hover">Kontakt</span></a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav