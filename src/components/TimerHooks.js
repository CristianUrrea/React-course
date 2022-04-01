import React, { useState } from 'react';

export default function TimerHook(){
    // 1º Definir la desestructuración del useState
    const [timer, setTimer] = useState(0);
    // console.log(useState())

    const sum = () => { setTimer(timer + 1); }
     
    const subtract = () => { setTimer(timer - 1); }

    return (
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={sum}>+</button>
                <button onClick={subtract}>-</button>
            </nav>
            <h3>{timer}</h3>
        </>
    );
}