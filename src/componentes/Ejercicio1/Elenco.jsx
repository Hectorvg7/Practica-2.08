import React, { useRef } from "react";
import "./Elenco.css";
import Actor from './Actor.jsx';

const Elenco = (props) => {
    const actores = props.actores;
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const mostrarTaquilla = () => {ref1.current.classList.toggle('oculto')};
    const mostrarElenco = () => {ref2.current.classList.toggle('oculto')};
    return (
        <React.Fragment>
            <button className="boton" onClick={mostrarTaquilla}>Mostrar/Ocultar Taquilla</button>
            <div id="taquilla" ref={ref1}>
                    <h3>Taquilla: {props.taquilla}</h3>
            </div>
            <button className="boton" onClick={mostrarElenco}>Mostrar/Ocultar Elenco</button>
            <div id='elenco' ref={ref2}>
                <h2>Elenco</h2>
                {actores.map((v, c) => {
                    return(
                        <Actor key={c}
                            nombre={v.nombre}
                            fechaNacimiento={v.fechaNacimiento}
                            biografia={v.biografia}
                            imagen={v.imagen}
                        >
                        </Actor>
                    )
                })}
            </div>
        </React.Fragment>
    );
};

export default Elenco;