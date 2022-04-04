import React, { createRef, useRef } from 'react';

export default function References(){

    // Utilizamos referencias para cuando los elementos del dom ya están carados en el DOM y no tener que crear o eliminar
    // Crear referéncia
    // let refMenu = createRef(), El createRef solo funciona en clases
    let refMenu = useRef(),
    refMenuBtn = useRef();

    // console.log(refMenu, refMenuBtn)
    const handleToggleMenu = (e) => {
        // const $menu = document.getElementById("menu");
        // if(e.target.textContent === "Menú"){
        //     e.target.textContent = "Cerrar";
        //     $menu.style.display = "block";
        // } else {
        //     e.target.textContent = "Menú";
        //     $menu.style.display = "none";
        // }

        // Utilizando referencias
        if(refMenuBtn.current.textContent === "Menú"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    }   
    
    return(
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
            <nav id="menu" ref={refMenu} style={{display:"none"}}>
                <a href="#s">Sección 1</a>
                <br/>
                <a href="#s">Sección 2</a>
                <br/>
                <a href="#s">Sección 3</a>
                <br/>
                <a href="#s">Sección 4</a>
                <br/>
                <a href="#s">Sección 5</a>
            </nav>
        </>
    );
}