import React from 'react';
import './App.css';
// import logo from './logo.svg'
// import {ReactComponent as CascoVaderSVG} from './imagenes/formato-svg/cascoVader.svg'
import cascoVader from './imagenes/formato-jpg-png/casco-vader-2-recortado.jpg'
import sableAzul from './imagenes/formato-jpg-png/lightsaber-blue.png'
import sableRojo from './imagenes/formato-jpg-png/lightsaber-red-horizontal.png'
import fondoEstrellas from './imagenes/formato-jpg-png/estrellas-espacio-1.png'
import Buscador from './Components/Buscador';

function App() {
  // const wookieTranslation = '/?format=wookiee'
  // const [elementos, setElementos] = React.useState();

  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage:`url(${fondoEstrellas})`}}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <CascoVaderSVG></CascoVaderSVG> */}
        <div>
          <div>
            <img src={cascoVader} className="App-logo-vader" alt="casco vader" style={{opacity:"0.6"}}/>
          </div>
        </div>
        <p className='sith-text'>
          {/* Descubre el lado oscuro de tu <code>POKEDEX</code><br></br> */}
          Hazte con todos, <code>Luke</code>
        </p>
          <div>
            {/* <img src={sableAzul}  alt="sable azul" /> */}
            <img src={sableRojo}  alt="sable rojo" />
          </div>
        
        <Buscador></Buscador>

      </header>
    </div>
  );
}

export default App;
