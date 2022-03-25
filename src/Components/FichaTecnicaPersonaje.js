import React from "react";

export default function FichaTecnicaPersonaje({elemento}){
    // {"first": 1, "second": 2, "third": 3}
    const items = Object.entries(elemento)
    // var itemsDeconstr
    items.forEach(dato => {
        console.log("Dato 0: " + dato[0], "Dato 1: ", dato[1])
    })
    return (
        <React.Fragment>
            {/* <li key={elemento.name} style={{width:"180px"}}></li>      */}
            {items.map(dato => {
                if(dato[0]==="key") return(<></>)
                if(dato[0]==="name") return(<></>)

                if(dato[0]==="height") return(
                    <div style={{ maxWidth:"200px"}}>
                        <label style={{color:"goldenrod", wordWrap:"break-word", fontFamily:"cursive", marginLeft:"10px"}}>{dato[0].toUpperCase()}: {dato[1]} </label>
                    </div>
                )
                if(dato[0]==="name") return(<></>)
                if(dato[0]==="name") return(<></>)
                // if(dato[0]==="films") return(<></>)
                return(
                    <div style={{ maxWidth:"200px"}}>
                        <label style={{color:"goldenrod", wordWrap:"break-word", fontFamily:"cursive", marginLeft:"10px"}}>{dato[0].toUpperCase()}: {dato[1]} </label>
                    </div>
                )
            })}
            {/* <li>Nacimiento: {elemento.birth_year}</li><br/>
            <li>Color de ojos: {elemento.eye_color}</li><br/>
            <li>Género: {elemento.gender}</li><br/>
            <li>Color de pelo: {elemento.hair_color}</li><br/>
            <li>Altura: {elemento.height}</li> */}

            {/* <img alt={personaje.name}></img> */}   
        </React.Fragment>
    )
}



