/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions';

import Nav from "./nav"
import Footer from "./footer"
import "./styles.scss"
//import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
        <Nav />
        
        <PageTransition>
          <main>{children}</main>
        </PageTransition>

        <Footer />
    </>
  )
}



export default Layout
