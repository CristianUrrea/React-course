import React from 'react';
import "./Styles.css";
import moduleStyles from "./Styles.module.css"
import "./Styles.scss";

export default function Styles(){

    let myStyles = {
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%"
    }
    return(
        <section className='styles'>
            <h2>Estilos CSS en React</h2>
            <h3 className='bg-react'>Estilos en hoja CSS externa</h3>
            <h3 className='bg-react' style={{borderRadius:".25rem",margin:"1rem"}}>Estilos en línea CSS (atributo style)</h3>
            <h3 className='bg-react' style={myStyles}>Estilos en línea CSS</h3>
            <h3 className='bg-react' style={myStyles}>Agregando normalize con <br /> @import-normalize</h3>
            <h3 className={moduleStyles.error}>Estilos con módulos</h3>
            <h3 className={moduleStyles.success}>Estilos con módulos</h3>
            <h3 className="bg-sass">Estilos con SASS</h3>
        </section>
    );
}