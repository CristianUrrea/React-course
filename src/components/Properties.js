import React from "react";
import PropTypes from "prop-types";

// Función propiedades
export default function Properties(props){
    return(
        <div>
            <h2>{props.byDefaul}</h2>
            <ul>
                <li>{props.string}</li> 
                <li>{props.number}</li>
                <li>{props.bool ? "Es true" : "Es false" }</li>
                <li>{props.array.join(", ") }</li>
                <li>{props.object.name+' - '+props.object.email }</li>
                <li>{props.array.map(props.function).join(", ") }</li>
                <li>{props.elementReact }</li>
                <li>{props.componentReact }</li>
            </ul>
        </div>
    );
}

// Definir propiedades por defecto
Properties.defaultProps = {
    byDefaul:"Las props",    
}

// Paquete npm propTypes
Properties.propTypes = {
    number:PropTypes.number.isRequired
}