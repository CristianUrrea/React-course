import React, {Component} from "react";
import data from "../helpers/data.json";

function ListItem(props){
    return(
        <li>
            <a href={props.el.web} target="_blank">{props.el.name}</a>
        </li>
    );
}

// Renderizado de elementos
export default class RenderElements extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera","Verano","Otoño","Invierno"],
        }
    }
    render(){
        return(
            // No es recomendable poner la key el indice, mejor usar una librería de keys o usar el elemento que pintamos
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.seasons.map((el,index) => <li key={index}>{el}</li>)}
                </ol>
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>{data.frameworks.map(el => <ListItem key={el.id} el={el} />)}</ul>
            </div>
        );
    }
}
