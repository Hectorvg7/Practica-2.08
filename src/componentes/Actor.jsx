import React from "react";
import "./Actor.css";

const Actor = (props) => {
    return (
        <React.Fragment>
            <div id='actor'>
                <img class="foto" src={props.foto ? props.foto : "https://cdn-icons-png.flaticon.com/512/456/456212.png"} alt="Imagen Actor"></img>
                <h4>{props.nombre ? props.nombre : "Nombre Actor"}</h4>
                <p>{props.biografia ? props.biografia : "Biografía Genérica"}</p>

            </div>
        </React.Fragment>
    );
};

export default Actor;