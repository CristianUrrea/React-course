import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

export default function StyledComponents(){

    let mainColor = "#db7093",
        mainAlphaColor80 = "#db709380";

    const setTransitionTime = (time) => `all ${time} ease-in-out`; 

    // Con la función keyframes puedes definir animaciones internas al componente
    const fadeIn = keyframes`
        0% { opacity: 0; }
        100% { opacity: 1; }
    `;

    const MyH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        /* color: ${props => props.color}; */
        color: ${({color}) => color || "#000"}; // Forma simplificada
        background-color: ${mainColor};
        transition: ${setTransitionTime("0.5s")};
        animation: ${fadeIn} 5s ease-out;
        // La función css me permite poner css dentro del styled-component
        ${({isButton}) => isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: 0.25rem;
            cursor:pointer;
        `} 
        &:hover {
            background-color: ${mainAlphaColor80};
        }
    `;

    // La función ThemeProvide es un contenedor de variables
    const light = { color: "#222", bgColor: "#DDD" }
    const dark = { color: "#DDD", bgColor: "#222" }
    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme}) => theme.color };
        background-color: ${({theme}) => theme.bgColor};
    `;

    // Herencia de CSS
    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;


    // Función createGlobalStyle función con estilos globales *lo ideal es ir al componente principal 'Index.js o en App.js'
    const GlobalStyle = createGlobalStyle`
        /* h2 { padding: 2rem; background-color: #fff; color: #61da61; text-transform: uppercase; } */
    `;

    return(
        <>
            <GlobalStyle />
            <h2>Styled-Componentes</h2>
            <MyH3>Hola soy un h3 estilizado con Styled-componentes</MyH3>
            <MyH3 color="#61dafb">Hola soy un h3 estilizado con Styled-componentes</MyH3> {/** Paso de propiedad css */}
            <MyH3 isButton>Hola soy un h3 estilizado como botón</MyH3>
            <ThemeProvider theme={light}>
                <Box>Soy una caja Light</Box>
                <BoxRounded>Soy una caja redondeada Light</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja Dark</Box>
                <BoxRounded>Soy una caja redondeada Dark</BoxRounded>
            </ThemeProvider>
        </>
    );
}