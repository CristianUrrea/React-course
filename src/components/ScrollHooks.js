import React, { useState, useEffect } from 'react';

export default function ScrollHooks(){

    const [scrollY, setScrollY] = useState(0);

    // Por defecto el useEffect se estará actualizando cuando se esté renderizando el componente
    useEffect(() => { 
        // console.log("Fase de Actualización");

        const dectectScroll = () => { setScrollY(window.pageYOffset); }

        window.addEventListener("scroll", dectectScroll);

        return () =>{
            window.removeEventListener("scroll", dectectScroll); // Fase de desmontaje
        } 
    }, [scrollY]) // solamente ciertas variables cambien no todo 

    // El useEffect se ejecuta una vez
    useEffect(() => {
        // console.log("Fase de Montaje");
    },[])

    // El useEffect si devolvemos una función
    useEffect(() => {

        // Aquí se usaría para:
        // *Desuscribirte de servicios
        // *Desconectarse de API
        // *Limpiar intervalos de tiempo
        // *Limpiar manejadores de eventos (por ej: cuando dejan de existir)
        // Mejoramos el rendimiento de la aplicación

        return () => { /* console.log("Fase de Desmontaje"); */ }
    })

    return (
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY} px</p>
        </>
    );
}