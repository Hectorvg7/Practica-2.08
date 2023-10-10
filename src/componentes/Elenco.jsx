import React from "react";
import "./Elenco.css";

const Elenco = (props) => {
    return (
        <React.Fragment>
            <div id='elenco'>
                <div>{props.children}</div>
            </div>
        </React.Fragment>
    );
};

export default Elenco;