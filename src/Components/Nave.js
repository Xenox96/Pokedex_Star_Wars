import React from "react"

export default function Nave({data}){
    console.log("A Nave llega la siguiente información: ", data)
    console.log("Tipo de data: ", typeof(data))
    console.log("El nombre de la nave es: ", data.name)

    return (
        <li key={data.name} style={{width:"180px"}}>
            <label>{data.name}</label>
        </li>
    )
}