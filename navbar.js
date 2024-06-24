import React, { useState }  from "react";
import './navbar.css'
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa'



function Navbar() {
    const [icon,setIcon] = useState(false)
    const handleClick =()=>{
        setIcon(!icon)
    }
    const closeSidebar=()=>{
        setIcon(false)
    }
  return (
    <>

        <nav className="navbar">
            <Link to='/' className="navlogo" onClick={closeSidebar}>LOGO</Link>
            <div className="menuicon" onClick={handleClick}>
                    {
                        icon ? <FaTimes className="fa-times"></FaTimes>:
                        <FaBars className="fa-bars"></FaBars>
                    }

                </div>
            <ul className={
                icon ? 'nav-menu active' :
                'nav-menu'
            }>
                <li>
                    <Link to='/' className="nav-links"  onClick={closeSidebar}>Home</Link>
                </li>
                <li>
                    <Link to='/about'  className="nav-links" onClick={closeSidebar}>About</Link>
                </li>
                <li>
                    <Link to='/contact'  className="nav-links" onClick={closeSidebar}>Contact</Link>
                </li>
                <li>
                    <Link to='/mobile' className="nav-links"  onClick={closeSidebar}>Mobile</Link>
                </li>
                <li>
                    <Link to='/product' className="nav-links"  onClick={closeSidebar}>Product</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;