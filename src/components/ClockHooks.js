import React, { useState, useEffect } from 'react';

function Clock({hour}){
    return <h3>{hour}</h3>
}

export default function ClockHooks(){

    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisiable] = useState(false);

    useEffect(() => {
        let timer;

        if(visible) {
            timer = setInterval(() => {
                setHour(new Date().toLocaleTimeString());
            }, 1000)
        } else {
            clearInterval(timer);   
        }

        return () => {
            console.log("Fase de Desmontaje");
            clearInterval(timer);   
        }
    }, [visible])

    return (
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Clock hour={hour}/>}
            <button onClick={() => setVisiable(true)}>Iniciar</button>
            <button onClick={() => setVisiable(false)}>Detener</button>
        </>
    );
}