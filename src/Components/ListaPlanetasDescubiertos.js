import React from "react"
import Planeta from './Planeta'

export default function ListaPlanetasDescubiertos({planetasDescubiertos}){
    // console.log(planetasDescubiertos);
    // console.log("Estos son los planetas descubiertos: ", planetasDescubiertos);
    let contador = 1;

    return (
        <ol style={{listStyleType:"square", fontFamily:"cursive"}}>
            {planetasDescubiertos.map(planeta => {
                // console.log("Este es el planeta mapeado " + contador++ + ": ", planeta)
                return <Planeta key={planeta.name} data={planeta}></Planeta>
            })}
        </ol>
    )
}