import React, {Component} from "react";

// Forma antigua
// Eventos en componentes de clase (esto con las nuevas versiones ya no se utiliza)
export class EventsES6 extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }

        // Si necesitamos usar el this de la clase de manera global
        this.sum = this.sum.bind(this);
        this.subtract = this.subtract.bind(this);
    }

    sum(){
        this.setState({
            contador: this.state.contador + 1
        });
    }

    subtract(){
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase ES6</h2>
                <nav>
                    <button onClick={this.sum}>+</button>
                    <button onClick={this.subtract}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        )
    }
}

// Forma nueva (Properties initializer)
export class EventsES7 extends Component {
    state = {
        contador: 0,
    }

    // Arrow functions
    sum = (e) => {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    subtract = (e) => {
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render(){
        return (
            <div>
                <h2>Eventos en Componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sum}>+</button>
                    <button onClick={this.subtract}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        )
    }
}

// *Los aitrubutos de los eventos solo son para las etiquetas jsx
// Función botón para evento personalizado
// function Button(props){

//     return <button onClick={props.myOnClick}>Botón hecho componente</button>;
// }

// const Button = (props) => (
//     <button onClick={props.myOnClick}>Botón hecho componente</button>
// )

const Button = ({myOnClick}) => (
    <button onClick={myOnClick}>Botón hecho componente</button>
)

// Mas eventos
export class MoreEvents extends Component {

    // Manejador de eventos
    handleClick = (e, msg) => {
        console.log(msg);
    }
    render(){
        return (
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e,'Hola pasando parametro desde un evento')}>Saludar</button>
                {/* Evento personalizado */}
                <Button myOnClick={(e) => this.handleClick(e,'Hola pasando parametro desde un evento')} />
            </div>
        )
    }
}