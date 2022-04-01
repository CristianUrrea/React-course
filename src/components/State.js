import React, {Component} from "react";

function StateAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}

// Definir estado
export default class State extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };


        // Practica poco efeciente
        // setInterval(() => {
        //     this.setState({
        //         contador: this.state.contador + 1
        //     });
        // }, 1000);
    }

    render(){
        return(
            <div>
                <h2>El estado</h2>
                <p>{this.state.contador}</p>
                <StateAHijo contadorHijo={this.state.contador }/>
            </div>
        );
    }
}