import React, { useState, useEffect } from 'react'
import { getPokemonList } from './methods/pokeList.js'

import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getPokemonList().then(setPokemonList).catch(console.error)
  }, [])

  return (
    <>
      <possibleHeader/>

      <div className="data-container">

        <div className="top-container">
          <div className="smalldata">
            <h1>small data</h1>
          </div>
          <div className="dataselect">

            <ul>
              {pokemonList.map((pokemon) => (
                <li key={pokemon.id}>
                  {pokemon.id + "."}
                  <img src={pokemon.sprite} alt={pokemon.name} />
                  {pokemon.name}
                </li>
              ))}
            </ul>

          </div>

          <div className="filters">
            <h1>filters</h1>
          </div>

        </div>

        <div className="bigdata">
          <h1>large data</h1>
        </div>

      </div>

      <possibleFooter/>
    </>
  )
}

export default App
