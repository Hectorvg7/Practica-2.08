import React from "react";

const Cartela = (props) => {
    return (
        <React.Fragment>
            <div id='cartela'>
                <img src={props.imagen ? props.imagen : "https://www.shutterstock.com/image-vector/realistic-movie-clapperboard-on-white-260nw-1199752204.jpg"} alt="Imagen Película Genérica"/>
            </div>
        </React.Fragment>
    );
};


export default Cartela;