import Render, {Component} from "react";

// El login y logout lo mejor sería que estubiesen en archivos independientes
function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    );
}

function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    );
}

// Renderizado condicional de componentes
export default class RenderConditional extends Component {
    constructor(props){
        super(props);
        this.state = {
            session: true,
        };
    }
    render(){
        return(
            <div>
                <h2>Renderizado condicional</h2>
                {this.state.session ? <Login /> : <Logout />}
            </div>
        );
    }
}