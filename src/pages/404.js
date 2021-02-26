import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container not_found">
      <h1>404: Not Found</h1>
      <p>Aie, cette page n'existe pas.</p>
      <Link to="/">Revenir a la page principale</Link>
    </div>

  </Layout>
)

export default NotFoundPage
