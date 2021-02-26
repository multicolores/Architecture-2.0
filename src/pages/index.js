import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    
    <section className="a_propos" id="about">
      <Image alt="image" filename="architect.jpg" />
      <div className="text_container">
        <h2>A propos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae harum accusamus autem quia ea, obcaecati libero, praesentium ratione enim illum cupiditate nemo quasi. Fugiat adipisci optio esse architecto.</p>
      </div>
   </section>

  </Layout>
)

export default IndexPage
