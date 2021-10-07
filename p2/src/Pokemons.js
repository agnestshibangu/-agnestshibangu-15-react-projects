import React from 'react';
import Pokemon from './Pokemon';
import './App.css'

const Pokemons = ({ pokemons, removePokemon  }) => {
  return ( 
  <section className='cards'>
    
      {pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.name} {...pokemon} removePokemon={removePokemon}> </Pokemon>
       }
      )}
    
  </section>
  );
};

export default Pokemons;