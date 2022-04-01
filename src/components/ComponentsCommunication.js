import React, { Component } from "react";

// Comunicación entre componentes
export default class Father extends Component {
    state = {
        contador: 0
    }

    increaseCounter = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return(
            <>
                <h2>Comunicación entre componentes</h2>
                <p>Contador <b>{this.state.contador}</b></p>
                <Son increaseCounter={this.increaseCounter} message="Mensaje para el hijo 1"/>
                <Son increaseCounter={this.increaseCounter} message="Mensaje para el hijo 2"/>
            </>
        )
    }
}

// De padres a hijos
// Que el hijo pueda afectar al estado del padre
function Son(props){
    return(
        <>
            <h3>{props.message}</h3>
            <button onClick={props.increaseCounter}>+</button>
        </>
    )
}

// Para trabajar con mas interaciones que no solo sean de padre a hijos
// Librerías Redux y Context