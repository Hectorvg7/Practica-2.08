import React from "react";

const Resumen = (props) => {
    return (
        <React.Fragment>
            <div id='Resumen'>
                <p>{props.resumen ? props.resumen : "Resumen Genérico"}</p>
            </div>
        </React.Fragment>
    );
};

export default Resumen;