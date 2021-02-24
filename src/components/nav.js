import { Link } from "gatsby"
import React from "react"
import "./styles.scss";


const Nav = () => (
    <nav className="container">
        <div className="nav_container">
            <div>
                <Link to="/" className="logo">
                    Architecture
                </Link>
            </div>
            <div>
                <Link to="/">
                    Work
                </Link>
                <Link to="/">
                    Gallery
                </Link>
                <Link to="/">
                    About
                </Link>
            </div>
        </div>

    </nav>
  )
  

  
  export default Nav
  