import React, { Component } from "react";

class Clock extends Component {
    constructor(props){
        super(props);
    }

    // 2º Fase de desmontaje
    // Método React se ejecuta cuando el componente ya no existe
    componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM")
    }

    render(){
        return <h3>{this.props.hour}</h3>
    }
}

export default class LifeCycle extends Component {
    // 1º Face de montaje
    constructor(props){
        super(props);
        // console.log(0, "El componente se inicializa, aún NO está en el DOM")

        this.state = {
            hour: new Date().toLocaleTimeString(),
            visible: false
        }

        this.timer = null;
    }
    
    // Método React se ejecuta cuando ya están los elementos cargados (sirve para peticiones API)
    componentDidMount(){
        // console.log(1,"El componente ya se encuentra en el DOM");
    }

    // Método React se ejcuta cuando se ha hecho un cambio en los componentes
    componentDidUpdate(prevProps, prevState){
        // console.log(2,"El estado o las props del componente han cambiado");
        // console.log(prevProps) 
        // console.log(prevState) // Estado anterior
    }
    
    titac = () => {
        this.timer = setInterval(() => {
            this.setState({
                hour:new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    startTime = () => {
        this.titac();
        this.setState({
            visible: true
        })
    }

    stopTime = () => {
        clearInterval(this.timer);
        this.setState({
            visible: false
        })
    }

    render(){
        // console.log(4, "El componente se dibuja (o redibuja por algún cambio) en el DOM")
        return(
            <>
                <h2>Ciclo de vida los componente de clase</h2>
                {/* <h3>{this.state.hour}</h3> */}
                {/* <Clock hour={this.state.hour}/> */}
                {this.state.visible && <Clock hour={this.state.hour}/>}
                <button onClick={this.startTime}>Iniciar</button>
                <button onClick={this.stopTime}>Detener</button>

            </>
        );
    }
}