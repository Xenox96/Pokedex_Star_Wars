import React from "react"
import Personaje from './Personaje'

export default function ListaPersonajesDescubiertos({personajesDescubiertos}){
    // console.log(personajesDescubiertos);
    // console.log("Estos son los personajes descubiertos: ", personajesDescubiertos);
    let contador = 1;
    return (
        <ol style={{listStyleType: "square", fontFamily:"cursive"}}>
            {personajesDescubiertos.map(personaje => {
                // console.log("Este es el personaje mapeado " + contador++ + ": ", personaje)
                return <Personaje key={personaje.name} data={personaje}></Personaje>
            })}
        </ol>
    )
}