import React from 'react';
import peliculas from '../peliculas.json';
import Pelicula from './Pelicula.jsx';
import Elenco from './Ejercicio1/Elenco.jsx';

const Peliculas = () => {
    const movie = peliculas.peliculas;
  return (
    movie.map((v, c) => {
        return(
            <>
            <Pelicula key={c}
            titulo={v.nombre}
            director={v.director}
            cartelera={v.cartelera}
            resumen={v.resumen}
            >
            <Elenco actores={v.actores} taquilla={v.recaudacion}/>
            </Pelicula>
            </>
        )
    })
  )
}

export default Peliculas