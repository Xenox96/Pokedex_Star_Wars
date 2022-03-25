import React from "react"

export default function Planeta({data}){
    return (
        <li key={data.name} style={{width:"180px"}}>
            <label>{data.name}</label>
        </li>
    )
}