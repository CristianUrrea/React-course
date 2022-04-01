// import React, {Component} from "react";
import React from "react";

// Cada componentes que creemos deverían de estar en su propio archivo
// Componente basado en clases
// class Componente extends Component {
//     render(){ // Permite renderizar el código jxs
//         return <h2>{this.props.msg}</h2>
//     }
// }

// Componente funcional función declarada
// function Componente(props){
//     return <h2>{props.msg}</h2>
// }

// Componente funcional función expresada
const Componente = props => <h2>{props.msg}</h2>

export default Componente;