import React from "react"
import Personaje from './Personaje'
import Nave from './Nave'
import Planeta from './Planeta'
import { useState, useEffect } from "react"
import FichaTecnicaPersonaje from "./FichaTecnicaPersonaje.js"
import FichaTecnicaNave from "./FichaTecnicaNave.js"
import FichaTecnicaPlaneta from "./FichaTecnicaPlaneta.js"

export default function RecuperadorElementos({ tipo = "", language="human", value = 0, guardarElemento}) {
    console.log("Tipo: " + tipo)
    console.log("Indice: " + value)

    var textoElemento = ""

    const regularFormat = '/?format=json'
    const wookieeTranslation = '/?format=wookiee'

    const [objetoPersonaje, setObjetoPersonaje] = useState({})
    const [objetoNave, setObjetoNave] = useState({})
    const [objetoPlaneta, setObjetoPlaneta] = useState({})

    const [encontrado, setEncontrado] = useState(false)

    useEffect(() => {
        getFetch()
    }, [])


    async function getFetch() {
        // console.log("Tipo: " + tipo)
        // console.log("Indice: " + value)
        // console.log("Wookie?: " + language)

        if (value !== 0) {
            switch (tipo) {

                case "personajes": {
                    var personaje = await fetch(`https://swapi.dev/api/people/${value}`+ (language === "wookiee" ? wookieeTranslation : regularFormat))
                        .then(response => {
                            return response.json()
                        })
                    // .then(data => {                    
                    //     console.log("Personaje data: ", JSON.stringify(data))
                    // })
                    console.log("Nombre del personaje: ", personaje)
                    if(personaje.name===undefined) {
                        if(language==="wookiee") {
                            if(personaje.whrascwo === undefined){
                                setEncontrado(false)
                                setObjetoPersonaje({name: "No se ha encontrado ningún personaje en esas coordenadas. ¡Sigue buscando!"})
                                break
                            }
                            personaje = {key: (personaje.whrascwo + {value}), ...personaje}
                            setEncontrado(true)
                            setObjetoPersonaje(personaje)
                            break
                        }
                        setEncontrado(false)
                        setObjetoPersonaje({name: "No se ha encontrado ningún personaje en esas coordenadas. ¡Sigue buscando!"})
                        break
                    }
                    personaje = {key: personaje.name, ...personaje} 
                    // console.log("Personaje.response: ", personaje.response)
                    setEncontrado(true)
                    guardarElemento(personaje, tipo)
                    setObjetoPersonaje(personaje)
                    // return (personaje)
                    break
                }

                case "naves": {
                    // var nave = await fetch(`https://swapi.dev/api/starships/${value}${language}`)
                    var nave = await fetch(`https://swapi.dev/api/starships/${value}`+ (language === "wookiee" ? wookieeTranslation : regularFormat))
                        .then(response => {
                            return response.json()
                        })
                    // .then(data => {                    
                    //     console.log("Nave data: ", JSON.stringify(data))
                    //     return JSON.stringify(data)
                    // })                    
                    console.log("Nombre de la nave: ", nave)
                    if(nave.name===undefined) {
                        if(language==="wookiee") {
                            if(nave.whrascwo === undefined){
                                console.log("No hay whrasco en la nave")
                                setEncontrado(false)
                                nave = {name: "No se ha encontrado ninguna nave en esas coordenadas. ¡Sigue buscando!", ...nave}
                                setObjetoNave(nave)
                                console.log(nave)
                                break
                            }
                            nave = {key: (nave.whrascwo + {value}), ...nave}
                            setEncontrado(true)
                            setObjetoNave(nave)
                            break
                        }
                        setEncontrado(false)
                        setObjetoNave({name: "No se ha encontrado ninguna nave en esas coordenadas. ¡Sigue buscando!"})
                        break
                    }
                    nave = {key: nave.name, ...nave}
                    setEncontrado(true)
                    setObjetoNave(nave)
                    guardarElemento(nave, tipo)
                    console.log("Esta es la nave: ", nave)
                    // return (nave)
                    break
                }


                case "planetas": {
                    var planeta = await fetch(`https://swapi.dev/api/planets/${value}`+ (language === "wookiee" ? wookieeTranslation : regularFormat))
                        .then(response => {
                            return response.json()
                        })
                    // .then(data => {                    
                    //     console.log("Planeta data: " + JSON.stringify(data))
                    // })
                    
                    console.log("Nombre del planeta: ", planeta)
                    if(planeta.name===undefined){
                        if(language==="wookiee") {
                            if(planeta.whrascwo === undefined){
                                console.log("No hay whrasco en el planeta")
                                setEncontrado(false)
                                setObjetoPlaneta({name: "No se ha encontrado ningún planeta en esas coordenadas. ¡Sigue buscando!"})
                                console.log("No planeta en wookie: ", planeta)
                                break
                            }
                            planeta = {key: (planeta.whrascwo + {value}), ...planeta}
                            setEncontrado(true)
                            setObjetoPlaneta(planeta)
                            break
                        }
                        setEncontrado(false)
                        setObjetoPlaneta({name: "No se ha encontrado ningún planeta en esas coordenadas. ¡Sigue buscando!"})
                        console.log("Planeta tras undefined: ", planeta)
                        break
                    }
                    planeta = {key: planeta.name, ...planeta}
                    setEncontrado(true)
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
            <div style={{display:"inline-block", margin:20}}>
                {(tipo === "personajes" && encontrado === false) && <label style={{fontSize: "25px", color:"skyblue"}}><br/>{objetoPersonaje.name}</label>}
                {(tipo === "personajes" && encontrado === true) && <label style={{fontSize: "25px", textDecoration:"underline", textDecorationStyle:"double"}}>{objetoPersonaje.name}</label>}
                {/* Aquí convendría ocultar la ficha técnica o cambiarla para otra ubicación, accesible a través de un enlace*/}
                {(tipo === "personajes" && language==="human" ) && <FichaTecnicaPersonaje elemento={objetoPersonaje}></FichaTecnicaPersonaje>}

                {(tipo === "naves" && encontrado === false) && <label style={{fontSize: "25px", color:"skyblue"}}> {objetoNave.name}</label>}
                {(tipo === "naves" && encontrado === true)  && <label style={{fontSize: "25px", textDecoration:"underline", textDecorationStyle:"double"}}> {objetoNave.name}</label>}
                {tipo === "naves" && <FichaTecnicaNave elemento={objetoNave}></FichaTecnicaNave>}

                {(tipo === "planetas" && encontrado === false) && <label style={{fontSize: "25px", color:"skyblue"}}> {objetoPlaneta.name}</label>}
                {(tipo === "planetas" && encontrado === true) && <label style={{fontSize: "25px", textDecoration:"underline", textDecorationStyle:"double"}}> {objetoPlaneta.name}</label>}
                {tipo === "planetas" && <FichaTecnicaPlaneta elemento={objetoPlaneta}></FichaTecnicaPlaneta>}
                
                {/* Ahora los elementos para la version wookiee */}
                
                {((tipo === "personajes" && encontrado === true) && language === "wookiee") && <label style={{fontSize: "25px", textDecoration:"underline", textDecorationStyle:"double"}}><br/>{objetoPersonaje.whrascwo}</label>}
                {(tipo === "personajes" && language==="wookiee" ) && <FichaTecnicaPersonaje elemento={objetoPersonaje}></FichaTecnicaPersonaje>}

                {((tipo === "naves" && encontrado === true) && language === "wookiee") && <label style={{fontSize: "25px", textDecoration:"underline", textDecorationStyle:"double"}}> {objetoNave.whrascwo}</label>}
                {tipo === "naves" && <FichaTecnicaNave elemento={objetoNave}></FichaTecnicaNave>}

                {((tipo === "planetas" && encontrado === true) && language === "wookiee") && <label style={{fontSize: "25px", textDecoration:"underline", textDecorationStyle:"double"}}> {objetoPlaneta.whrascwo}</label>}
                {tipo === "planetas" && <FichaTecnicaPlaneta elemento={objetoPlaneta}></FichaTecnicaPlaneta>}


                {(tipo === "" || value === 0) && <label>Introduce un número mayor que 0 y selecciona un tipo para buscar</label>}
            </div>
        </React.Fragment>
    )
}
