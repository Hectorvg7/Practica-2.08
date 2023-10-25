import React from "react";
import "./Pelicula.css";

const Pelicula = (props) => {
    return (
        <React.Fragment>
            <div id='pelicula'>
                <h1>{props.titulo ? props.titulo : "Título Genérico"}</h1>
                <h2>{props.director ? props.director : "Director Genérico"}</h2>
                <div id='cartela'>
                    <img className="imagen" src={props.cartelera ? props.cartelera : "https://www.shutterstock.com/image-vector/realistic-movie-clapperboard-on-white-260nw-1199752204.jpg"} alt="Imagen Película Genérica"/>
                </div>
                <div id='resumen'>
                    <p>{props.resumen ? props.resumen : "Resumen Genérico"}</p>
                </div>
                <div>{props.children}</div>
            </div>
        </React.Fragment>
    );
};

export default Pelicula;