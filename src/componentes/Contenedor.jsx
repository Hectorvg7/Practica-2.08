import React from "react";
import "./Contenedor.css";

const Contenedor = (props) => {
    return (
        <React.Fragment>
            <div id='contenedor'>
                <h2>{props.titulo ? props.titulo : "Título Genérico"}</h2>
                <h3>{props.director ? props.director : "Director Genérico"}</h3>
                <div>{props.children}</div>
            </div>
        </React.Fragment>
    );
};

export default Contenedor;