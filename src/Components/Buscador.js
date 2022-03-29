import React, {Component, useState, useEffect, useRef } from "react"
import Select from 'react-select'
// "react-select/dist/declarations/src/Select"
import ListaPersonajesDescubiertos from './ListaPersonajesDescubiertos'
import ListaNavesDescubiertas from './ListaNavesDescubiertas'
import ListaPlanetasDescubiertos from './ListaPlanetasDescubiertos'
import RecuperadorElementos from "./RecuperadorElementos"
import AnimatedText from "react-animated-text-content"
import SlideInUp from "../Components/SlideInUp"

const elementosSelectTipo = [
    // { value: 'todos', label: 'Todos' },
    { value: 'personajes', label: 'Personajes' },
    { value: 'naves', label: 'Naves'},
    { value: 'planetas', label: 'Planetas'}
]
const elementosSelectLanguage = [
    { value: 'human', label: 'Hooman' },
    { value: 'wookiee', label: 'Wookiee'}
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
        height: '25px'
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
    const [encontrado, setEncontrado] = useState(false)
    const [tipo, setTipo] = useState("")
    const [language, setLanguage] = useState("human")
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

    const handleSelectLanguage = (event) => {
        setLanguage(event.value)
        if(event !== "") console.log(event.value)
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
                // console.log("Resultado comprobar: ", encontrado)
                // console.log("Elemento en guardar elemento:", elemento)
                // console.log("Personajes descubiertos: ", personajesDescubiertos)
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
        <div>
        <div style={{ display:'inline-block', fontSize:'17px'}}>
            {!busqueda && <div>
                <div style={{display:'inline-block', margin: '0 auto'}}>
                    <Select 
                        options={elementosSelectTipo} 
                        className="m-3 pb-4" 
                        styles={estilosSelect1} 
                        // theme={temaSelect}
                        // maxMenuHeight='200px'
                        // autoFocus
                        isSearchable
                        placeholder="Elige un tipo"       
                        onChange={handleSelect}
                        />
                </div>
                <div style={{display:"inline-block"}}>
                    <input 
                        type="text" 
                        autoFocus
                        style={{fontSize:"15px"}}
                        onChange={(e) => {setIndice(e.target.value)}} 
                        ref={entradaRef} 
                        onKeyDown={handleKeyDown}
                        />
                    <button onClick={buttonBuscarPressed} style={{fontSize:"15px"}}>
                        {/* <img></img> */}
                        Buscar
                    </button>
                </div>
                <div style={{display:'inline-block', margin: '0 auto'}}>
                    <Select
                        options={elementosSelectLanguage}
                        defaultValue={{ label: "Hooman", value: "human" }} 
                        className="m-3 pb-4" 
                        styles={estilosSelect1} 
                        // theme={temaSelect}
                        // maxMenuHeight='200px'
                        isSearchable                    
                        onChange={handleSelectLanguage}
                        />
                </div>
                {!busqueda && <div style={{fontSize:"21px", verticalAlign:"middle"}}>
                    <div style={{ display: 'inline-block', margin: 20, fontFamily: 'bold', color: 'goldenrod', verticalAlign:"top"}}>
                        <h3 style={{textDecoration: 'underline', textDecorationStyle:"double", fontWeight:"lighter"}}>Personajes descubiertos</h3>
                        <ListaPersonajesDescubiertos personajesDescubiertos={personajesDescubiertos}></ListaPersonajesDescubiertos>
                    </div>
                    <div style={{ display: 'inline-block', margin: 20, fontFamily: 'bold', color: 'goldenrod', verticalAlign:"top" }}>
                        <h3 style={{textDecoration: 'underline', textDecorationStyle:"double", fontWeight:"lighter"}}>Naves descubiertas</h3>
                        <ListaNavesDescubiertas navesDescubiertas={navesDescubiertas}></ListaNavesDescubiertas>
                    </div>
                    <div style={{ display: 'inline-block', margin: 20, fontFamily: 'bold', color: 'goldenrod', verticalAlign:"top" }}>
                        <h3 style={{textDecoration: 'underline', textDecorationStyle:"double", fontWeight:"lighter"}}>Planetas descubiertos</h3>
                        <ListaPlanetasDescubiertos planetasDescubiertos={planetasDescubiertos}></ListaPlanetasDescubiertos>
                    </div>
                    {/* <div style={{marginLeft:"100px", minHeight:"20px", color:"goldenrod", textAlign:"center", display:"inline-block"}}>
                        {busqueda && <RecuperadorElementos tipo={tipo} language={language} value={indice} guardarElemento={guardarElemento}></RecuperadorElementos>}
                    </div>             */}
                </div>}
            </div>}

            {/* {busqueda && <div className="flex items-start justify-between max-w-sm p-3 space-x-4 rounded-md dark:bg-coolGray-900 dark:text-coolGray-100" style={{}}>
                <div className="flex flex-col flex-1 px-2 space-y-1">
                    <div style={{ minHeight:"20px", color:"goldenrod", textAlign:"center", display:"inline-block"}}>
                        <AnimatedText
                            type="words"                            
                            interval={-0.000000001}
                            duration={4}
                            animation={{x: '0px', y:"500px", scale:"10", ease: "linear"}}
                            animationType="blocks"
                            className="animated-paragraph"
                            includeWhiteSpaces
                            fontSize="40px">
                            afsdafsdafsd  afsfsafas añfsdafjk
                            {busqueda && <RecuperadorElementos tipo={tipo} language={language} value={indice} guardarElemento={guardarElemento}></RecuperadorElementos>}
                        </AnimatedText>
                    </div> 
                </div>
                <button type="button" title="Close snackbar" className="dark:border-transparent" onClick={() => setBusqueda(false)}>
                    X
                </button>
            </div>} */}

            


        </div>
            {busqueda && <div class="baseLetrasIntro">
                <button type="button" title="Close snackbar" className="dark:border-transparent" onClick={() => setBusqueda(false)}>
                    X
                </button>
                <div class="letrasIntro">
                    <div style={{ minHeight:"20px", color:"goldenrod", textAlign:"center", display:"inline-block"}}>
                       <p >sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                       <p>sdafjdñslfjsdñlfj</p>
                    </div> 
                </div>
            </div>}
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