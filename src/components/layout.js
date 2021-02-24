/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Nav from "./nav"
import "./styles.scss"
//import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
        <Nav />
      <div className="container">

        <main>{children}</main>
      </div>
    </>
  )
}



export default Layout
