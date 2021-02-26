import React from "react"
import { Link } from "gatsby"

import Drag from "./drag"

const Header = () => {

  return (
  <header>
    <div className="text_container">
      <h1>Architecture</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quis qui culpa ab libero maiores.</p>
      <Link to="/project_1">Voir mon travaille</Link>
    </div>

    <Drag />
  </header>
)}

export default Header
