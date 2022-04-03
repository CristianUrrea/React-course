import React, { useState, useEffect } from 'react';

function Pokemon({image,name}){
    return(
        <figure>
            <img src={image} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}


export default function AjaxApiHooks(){
    const [pokemons, setPokemons] = useState([]);

    // Solo petición fetch
    // useEffect(() => {
    //     let url = "https://pokeapi.co/api/v2/pokemon/";
    //     fetch(url)
    //     .then(res => res.json())
    //     .then((json) => {
    //         json.results.forEach(el => {
    //             fetch(el.url)
    //             .then(res => res.json())
    //             .then((json) => {
    //                 let pokemon = {
    //                     id: json.id,
    //                     name: json.name,
    //                     image: json.sprites.front_default
    //                 };

    //                 setPokemons((pokemons) => [...pokemons, pokemon]);
    //             })
    //         });
    //     })
    // }, []);

    // Utilizando funciones asíncronas con la petición fetch
    // *No volver el useEffect async es una mala práctica
    useEffect(() => {


        // Si necesitamos utilizar funciones asíncronas dentro de un useEffect la manera correcta es la siguiente:
        const getPokemons = async (url) => {
            let res = await fetch(url),
            json = await res.json();
            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                json = await res.json();
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    image: json.sprites.front_default
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        }

        let url = "https://pokeapi.co/api/v2/pokemon/";
        getPokemons(url);
    }, []);

    return(
        <>
            <h2>Peticiones Asíncronas en Hooks</h2>
            {
                pokemons.length === 0 ? <h3>Cargando...</h3> : 
                pokemons.map((el,index) => <Pokemon key={index} name={el.name} image={el.image}/>)
            }
        </>
    );
}