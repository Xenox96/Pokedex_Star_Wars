import React from "react"
import Nave from './Nave'

export default function ListaNavesDescubiertas({navesDescubiertas}){
    // console.log(navesDescubiertas);
    // console.log("Estos son las naves descubiertas: ", navesDescubiertas);
    let contador = 1;

    return (
        <ol style={{listStyleType: "square", fontFamily:"cursive"}}>
            {/* list-style: decimal inside none; */}
            {navesDescubiertas.map(nave => {
                // console.log("Esta es la nave mapeada " + contador++ + ": ", nave)
                return <Nave key={nave.name} data={nave}></Nave>
            })}
        </ol>
    )
}