import React from "react"

export default function Personaje({data}){
    return (
        <li key={data.name} style={{width:"180px"}}>
            <label>{data.name}</label>
            
            {/* <img alt={personaje.name}></img> */}
        </li>
    )
}