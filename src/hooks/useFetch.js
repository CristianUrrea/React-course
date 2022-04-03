import { useState, useEffect } from 'react';

// *Importante que empieze el fichero por 'use' para que react detecte que es un hook

export const useFetch = (url) => {
    const [data,setData] = useState(null); // Recibimos los datos
    const [isPending,setIsPending] = useState(true); // Está pendiente
    const [error,setError] = useState(null); // Si hay algún error

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url);

                // Validación de la petición
                if(!res.ok){
                    throw { err: true, status: res.status, statusText: !res.statusText ? 'Ocurrió un error' : res.statusText } // Se originó un error
                }

                let data = await res.json();

                setIsPending(false);
                setData(data);
                setError({err:false});
            } catch(err){
                setIsPending(true);
                setError(err);
            }
        }
        getData(url);
    }, [url]);

    return { data, isPending, error };
}