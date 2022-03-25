import React from "react"
import Personaje from './Personaje'
import Nave from './Nave'
import Planeta from './Planeta'
import { useState, useEffect } from "react"
import FichaTecnicaPersonaje from "./FichaTecnicaPersonaje.js"
import FichaTecnicaNave from "./FichaTecnicaNave.js"
import FichaTecnicaPlaneta from "./FichaTecnicaPlaneta.js"

export default function RecuperadorElementos({ tipo = "", value = 0, guardarElemento}) {
    console.log("Tipo: " + tipo)
    console.log("Indice: " + value)

    const regularFormat = '/?format=json'
    const wookieTranslation = '/?format=wookiee'

    const [objetoPersonaje, setObjetoPersonaje] = useState({})
    const [objetoNave, setObjetoNave] = useState({})
    const [objetoPlaneta, setObjetoPlaneta] = useState({})

    useEffect(() => {
        getFetch()
    }, [])

    async function getFetch() {
        console.log("Tipo: " + tipo)
        console.log("Indice: " + value)
        if (value !== 0) {
            switch (tipo) {

                case "personajes": {
                    var personaje = await fetch(`https://swapi.dev/api/people/${value}/?format=json`)
                        .then(response => {
                            return response.json()
                        })
                    // .then(data => {                    
                    //     console.log("Personaje data: ", JSON.stringify(data))
                    // })
                    personaje = {key: personaje.name, ...personaje}
                    console.log("Nombre del personaje: ", personaje)
                    // console.log("Personaje.response: ", personaje.response)
                    guardarElemento(personaje, tipo)
                    setObjetoPersonaje(personaje)
                    // return (personaje)
                    break
                }

                case "naves": {
                    var nave = await fetch(`https://swapi.dev/api/starships/${value}${regularFormat}`)
                        .then(response => {
                            return response.json()
                        })
                    // .then(data => {                    
                    //     console.log("Nave data: ", JSON.stringify(data))
                    //     return JSON.stringify(data)
                    // })                    
                    nave = {key: nave.name, ...nave}
                    console.log("Esta es la nave: ", nave)
                    guardarElemento(nave, tipo)
                    setObjetoNave(nave)
                    // return (nave)
                    break
                }


                case "planetas": {
                    var planeta = await fetch(`https://swapi.dev/api/planets/${value}/?format=json`)
                        .then(response => {
                            return response.json()
                        })
                    // .then(data => {                    
                    //     console.log("Planeta data: " + JSON.stringify(data))
                    // })                    
                    planeta = {key: planeta.name, ...planeta}
                    setObjetoPlaneta(planeta)
                    guardarElemento(planeta, tipo)
                    return ({ planeta })
                }

                default: {
                    return ({})
                }
            }
        }
    }
    return (
        <React.Fragment>

            {
                //Si se encuentra un nuevo personaje/nave/planeta se mostrará una label indicándolo.
                //Si ya existiese en el registro un personaje/nave/planeta con ese id, se mostrará otra
                //label con el texto: "Ese personaje/nave/planeta ya lo conoces, desgraciao."
                //{(!elemento.existe) && <label></label>}
            }
            <div style={{display:"inline-block"}}>
                {/* {tipo === "personajes" && <Personaje data={objetoPersonaje}></Personaje>} */}
                {tipo === "personajes" && <label style={{fontSize: "25px", textDecoration:"underline"}}><br/>{objetoPersonaje.name}</label>}
                <FichaTecnicaPersonaje elemento={objetoPersonaje}></FichaTecnicaPersonaje>

                {/* {tipo === "naves" && <Nave data={objetoNave}></Nave>} */}
                {tipo === "naves" && <label style={{fontSize: "25px"}}> {objetoNave.name}</label>}
                <FichaTecnicaNave elemento={objetoNave}></FichaTecnicaNave>

                {/* {tipo === "planetas" && <Planeta data={objetoPlaneta}></Planeta>} */}
                {tipo === "planetas" && <label style={{fontSize: "25px"}}> {objetoPlaneta.name}</label>}
                <FichaTecnicaPlaneta elemento={objetoPlaneta}></FichaTecnicaPlaneta>
                
                {(tipo === "" || value === 0) && <label>Introduce un número mayor que 0 y selecciona un tipo para buscar</label>}
            </div>
        </React.Fragment>
    )
}
