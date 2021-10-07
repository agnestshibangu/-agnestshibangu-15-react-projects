import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import Pokemons from './Pokemons'
import EmptyPage from './EmptyPage'

import './App.css';

const url = 'https://pokeapi.co/api/v2/pokemon'

function App() {

  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  

  const removePokemon = (name) => {
    const newPokemons = pokemons.filter((pokemon) => pokemon.name !== name);
    setPokemons(newPokemons)
  }

  const fetchPokemons = async () => {
    setLoading(true)
    try{
      const response = await fetch(url);
      const pokemons = await response.json();
      console.log(pokemons.results)
      setLoading(false)
      setPokemons(pokemons.results)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };


  useEffect(() => {
    fetchPokemons();
    }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  
  if (pokemons.length == 0) {
    return (
      <main>
      <EmptyPage />
    </main>
    );
  }


  return (
    <main>
      <Pokemons pokemons={pokemons}  removePokemon={removePokemon} />
    </main>
  );


}

export default App;
