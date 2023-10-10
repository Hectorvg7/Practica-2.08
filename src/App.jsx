import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './componentes/Contenedor'
import Contenedor from './componentes/Contenedor.jsx'
import Cartela from './componentes/Cartela.jsx'
import Resumen from './componentes/Resumen.jsx'
import Elenco from './componentes/Elenco.jsx'
import Actor from './componentes/Actor.jsx'

function App() {
  return (
    <Contenedor titulo="Origen" director="Christopher Nolan">
      <Cartela imagen="https://www.ecartelera.com/carteles/3300/3399/002_m.jpg"/>
      <Resumen resumen="Dom Cobb es un ladrón capaz de adentrarse en los sueños de la gente y hacerse con sus secretos. Sin embargo, ahora tiene que llevar a cabo una misión diferente a lo que ha hecho siempre: realizar una incepción para implantar una idea en el subconsciente de una persona. El plan se complica debido a la intervención de alguien que parece predecir cada uno de los movimientos de Cobb, alguien a quien solo él puede enfrentarse."/>
      <Elenco>
        <Actor nombre="Leonardo Di Caprio" foto="https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg" biografia="Hijo de padre italiano y madre alemana, Leonardo DiCaprio comienza sus clases de interpretación desde la escuela primaria. Hace su primera audición en 1988, y empieza su carrera haciendo anuncios publicitarios. Pronto consigue pequeños papeles para series de televisión como ‘La nueva Lassie’ y ‘Santa Bárbara’, antes de darse a conocer en ‘Los problemas crecen’, en 1991."/>
        <Actor nombre="Cillian Murphy" foto="https://es.web.img2.acsta.net/c_310_420/pictures/15/09/25/11/13/078050.jpg" biografia="Cillian Murphy comienza su carrera como actor en el teatro. Después de participar en varios telefimes, se da a conocer gracias a su interpretación en ‘Al límite’ (2001), y un año después se une al reparto de ‘Disco pigs’, adaptación cinematográfica de la obra de teatro que protagoniza años antes."/>
        <Actor/>
      </Elenco>
    </Contenedor>
  )
}

export default App
