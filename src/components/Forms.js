import React, { useState } from 'react';

// 1º Cuando se usa varias variables de estado (sencilla)
// export default function Forms(){

//     const [name, setName] = useState("");
//     const [flavor, setFlavor] = useState("");
//     const [lenguage, setLenguage] = useState("");
//     const [terms, setTerms] = useState(false);
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("El formulario se ha enviado");
//     }

//     return(
//         <>
//             <h2>Formularios</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Nombre:</label>
//                 <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

//                 <p>Elije tu Sabor JS Favorito:</p>
//                 <input type="radio" id="vanilla" name="flavor" value="vanilla" onChange={(e) => setFlavor(e.target.value)} defaultChecked />
//                 <label htmlFor="vanilla">Vanilla</label>
//                 <br />
//                 <input type="radio" id="react" name="flavor" value="react" onChange={(e) => setFlavor(e.target.value)}/>
//                 <label htmlFor="react">React</label>
//                 <br />
//                 <input type="radio" id="angular" name="flavor" value="angular" onChange={(e) => setFlavor(e.target.value)} />
//                 <label htmlFor="angular">Angular</label>
//                 <br />
//                 <input type="radio" id="vue" name="flavor" value="vue" onChange={(e) => setFlavor(e.target.value)} />
//                 <label htmlFor="vue">Vue</label>
//                 <br />
//                 <input type="radio" id="svelte" name="flavor" value="svelte" onChange={(e) => setFlavor(e.target.value)} />
//                 <label htmlFor="svelte">Svelte</label>

//                 <p>Elije tu lenguaje de programación favorito:</p>
//                 <select name="lenguage" onChange={(e) => setLenguage(e.target.value)} defaultValue="" >
//                     <option value="">---</option>
//                     <option value="js">JavaScript</option>
//                     <option value="php">PHP</option>
//                     <option value="py">Python</option>
//                     <option value="go">Go</option>
//                     <option value="ruby">Ruby</option>
//                 </select>
//                 <br />
//                 <label htmlFor="terms">Acepto términos y condiciones</label>
//                 <input type="checkbox" id="terms" name="terms" onChange={(e) => setTerms(e.target.checked)}/>
//                 <br />
//                 <input type="submit" />
//             </form>
//         </>
//     );
// }

// 2º Cuando se usa varias solo una variable de estado (avanzada)
export default function Forms(){

    const [form, setForm] = useState({name:""});
    
    const handleChange = (e) => {

        // !Importante tener los elementos el attr name
        setForm({
            ...form, // Lo que ya tengo el formulario
            [e.target.name]: e.target.value // Vas a mesclar el objeto que ya traia el formulario, lo que lo va actualizar
        })
    }

    // Para los inputs checkeds
    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />

                <p>Elije tu Sabor JS Favorito:</p>
                <input type="radio" id="vanilla" name="flavor" value="vanilla" onChange={handleChecked} defaultChecked />
                <label htmlFor="vanilla">Vanilla</label>
                <br />
                <input type="radio" id="react" name="flavor" value="react" onChange={handleChecked}/>
                <label htmlFor="react">React</label>
                <br />
                <input type="radio" id="angular" name="flavor" value="angular" onChange={handleChecked} />
                <label htmlFor="angular">Angular</label>
                <br />
                <input type="radio" id="vue" name="flavor" value="vue" onChange={handleChecked} />
                <label htmlFor="vue">Vue</label>
                <br />
                <input type="radio" id="svelte" name="flavor" value="svelte" onChange={handleChecked} />
                <label htmlFor="svelte">Svelte</label>

                <p>Elije tu lenguaje de programación favorito:</p>
                <select name="lenguage" onChange={handleChange} defaultValue="" >
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                    <option value="ruby">Ruby</option>
                </select>
                <br />
                <label htmlFor="terms">Acepto términos y condiciones</label>
                <input type="checkbox" id="terms" name="terms" onChange={handleChecked}/>
                <br />
                <input type="submit" />
            </form>
        </>
    );
}