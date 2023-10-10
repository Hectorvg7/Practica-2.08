import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './componentes/Contenedor'
import Contenedor from './componentes/Contenedor.jsx'

function App() {
  return (
    <Contenedor>
      <Cartela/>
      <Resumen/>
      <Elenco>
        <Actor nombre="" foto="" biografía=""/>
      </Elenco>
    </Contenedor>
  )
}

export default App
