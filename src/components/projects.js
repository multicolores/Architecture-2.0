import React from "react"
import "./styles.scss";

import BigImage from "./big_image"
import Drag from "./drag"



const Project = (props) => {
    return(
        <div className="project">
            <header>
                <div className="text_container">
                    <h1>{props.title}</h1>
                    <p>{props.paragraphe}</p>
                    <a href="#a_propos">En savoir plus</a>
                </div>

                <div className="big_image">
                    <BigImage alt="image" filename={props.image_url} />
                </div>
            </header>
            <div className="big_p" id="a_propos">
                <h2>A propos</h2>
                <p>{props.paragraphe2}</p>
            </div>

            <div className="drag_container-projects container">
                <Drag />
            </div>
        </div>

    )
}
  

  
  export default Project
  