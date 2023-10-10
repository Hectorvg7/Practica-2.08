import React from "react";


const Contenedor = (props) => {
    return (
        <React.Fragment>
            <div id='contenedor'>
                <h2>{props.titulo ? props.titulo : "Título Genérico"}</h2>
                <h3>Director: Christopher Nolan</h3>
            </div>
        </React.Fragment>
    );
};

export default Contenedor;