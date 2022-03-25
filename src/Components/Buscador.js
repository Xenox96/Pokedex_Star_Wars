import React, {Component, useState, useEffect, useRef } from "react"
import Select from 'react-select'
// "react-select/dist/declarations/src/Select"
import ListaPersonajesDescubiertos from './ListaPersonajesDescubiertos'
import ListaNavesDescubiertas from './ListaNavesDescubiertas'
import ListaPlanetasDescubiertos from './ListaPlanetasDescubiertos'
import RecuperadorElementos from "./RecuperadorElementos"

const elementosSelect = [
    // { value: 'todos', label: 'Todos' },
    { value: 'personajes', label: 'Personajes' },
    { value: 'naves', label: 'Naves'},
    { value: 'planetas', label: 'Planetas'}
]

//#region
const estilosSelect1 = {
    option: base => ({
        ...base,
        borderBottom: '1px dotted pink',
        color: 'red'
    }),
    control: (provided, state) => ({
        ...provided,
        background: '#bbb',
        borderColor: 'goldenrod',
        minHeight: '10px',
        height: 'auto',
        innerHeight: '5px',
        outerHeight: '5px',
        maxMenuHeight: '5px',
        margin: '10px'
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        height: 'auto',
        padding: '0 6px'
    }),

    input: (provided, state) => ({
        ...provided,
        margin: '0px',
        padding: '0px',
        height: 'auto',

    }),

    placeholder: (provided, state) => ({
        ...provided,
        height: '18px'
    }),
    indicatorSeparator: state => ({
        display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '25px',
    })
}
//#endregion

export default function Buscador(){
    const [busqueda, setBusqueda] = useState(false)
    const [tipo, setTipo] = useState("")
    const [indice, setIndice] = useState(0)
    const entradaRef = useRef()
    const [personajesDescubiertos, setPersonajesDescubiertos] = React.useState([]);
    const [navesDescubiertas, setNavesDescubiertas] = React.useState([]);
    const [planetasDescubiertos, setPlanetasDescubiertos] = React.useState([]);
    
    useEffect(() => {      
    }, [])
  
    useEffect(() => {      
    }, [personajesDescubiertos])
  
    useEffect(() => {      
    }, [navesDescubiertas])
  
    useEffect(() => {      
    }, [planetasDescubiertos]) 


    const handleKeyDown = (event) => {
        if(event.key === "Enter" && (indice !== 0 && tipo !== "")) setBusqueda(true)
        else (setBusqueda(false))
    }

    const handleSelect = (event) => {
        setTipo(event.value)
        if(event !== "") console.log(event)
    }

    function buttonBuscarPressed(){
        // Para las pruebas se eliminan las condiciones para evitar tener que andar introduciendo valores constantemente.
        if(tipo !== "" && indice !== 0 ) setBusqueda(true)
        else (setBusqueda(false))
        // setBusqueda(true)
    }

    const guardarElemento = (elemento, tipo) => {
        switch(tipo){
            case "personajes": {
                let encontrado = false
                personajesDescubiertos.forEach(element => {
                    if(element.key === elemento?.key) encontrado = true
                })
                if (!encontrado) setPersonajesDescubiertos([...personajesDescubiertos, elemento])
                console.log("Resultado comprobar: ", encontrado)
                console.log("Elemento en guardar elemento:", elemento)
                console.log("Personajes descubiertos: ", personajesDescubiertos)
                break
            }
            case "naves": {
                let encontrado = false
                navesDescubiertas.forEach(element => {
                    if(element.key === elemento?.key) encontrado = true
                })
                if(!encontrado) setNavesDescubiertas([...navesDescubiertas, elemento])
                break
            }
            case "planetas": {
                let encontrado = false
                planetasDescubiertos.forEach(element => {
                    if(element.key === elemento?.key) encontrado = true
                })
                if (!encontrado) setPlanetasDescubiertos([...planetasDescubiertos, elemento])
                break
            }
            default: {
                break
            }
        }
    }
    
    return(        
        <div style={{ display:'inline-block', fontSize:'15px'}}>
            <div style={{display:'inline-block', margin: '0 auto'}}>
                <Select 
                    options={elementosSelect} 
                    className="m-3 pb-4" 
                    styles={estilosSelect1} 
                    // theme={temaSelect}
                    maxMenuHeight='200px'
                    autoFocus
                    isSearchable
                    placeholder="Elige un tipo"
                    
                    onChange={handleSelect}
                    />
            </div>
            <input 
                type="text" 
                onChange={(e) => {setIndice(e.target.value)}} 
                ref={entradaRef} 
                onKeyDown={handleKeyDown}
                />
            <button onClick={buttonBuscarPressed}>
                {/* <img></img> */}
                Buscar
            </button>
            <div style={{minHeight:"20px", color:"goldenrod", fontFamily:"cursive"}}>
                {busqueda && <RecuperadorElementos tipo={tipo} value={indice} guardarElemento={guardarElemento}></RecuperadorElementos>}
            </div>            
            <div style={{fontSize:"21px", verticalAlign:"middle"}}>
                <div style={{ display: 'inline-block', margin: 20, fontFamily: 'bold', textDecoration: 'underline', color: 'goldenrod', verticalAlign:"top" }}>
                    <label>Personajes descubiertos</label>
                    <ListaPersonajesDescubiertos personajesDescubiertos={personajesDescubiertos}></ListaPersonajesDescubiertos>
                </div>
                <div style={{ display: 'inline-block', margin: 20, fontFamily: 'bold', textDecoration: 'underline', color: 'goldenrod', verticalAlign:"top" }}>
                    <label>Naves descubiertas</label>
                    <ListaNavesDescubiertas navesDescubiertas={navesDescubiertas}></ListaNavesDescubiertas>
                </div>
                <div style={{ display: 'inline-block', margin: 20, fontFamily: 'bold', textDecoration: 'underline', color: 'goldenrod', verticalAlign:"top" }}>
                    <label>Planetas descubiertos</label>
                    <ListaPlanetasDescubiertos planetasDescubiertos={planetasDescubiertos}></ListaPlanetasDescubiertos>
                </div>
            </div>
        </div>
    )
}



    //TEMA PARA SELECT
    // function temaSelect(theme) {
    //     return {
    //         ...theme,
    //         colors: {
    //             ...theme.colors,
    //             primary25: 'red',
    //             primary: 'green'
    //         }
    //     }
    // }   