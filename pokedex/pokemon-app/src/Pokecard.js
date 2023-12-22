import React from 'react';
import './Pokecard.css';

const POKE_API_BASE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

/** Individual Pokemon card. */
function Pokecard({ id, name, type, exp }) {
  const imgSrc = `${POKE_API_BASE}${id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{name}</div>
      <img className="Pokecard-image" src={imgSrc} alt={name} />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {exp}</div>
    </div>
  );
}

export default Pokecard;
