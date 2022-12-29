import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ pokemon }) => {

  const [pokemonData, setPokemonData] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => setPokemonData(res.data))
      .catch(err => console.log(err))
  }, [])

  const renderTypePokemon = (types) => {
    if (types.slot >= 2) {
      return <span> / {types.type.name}</span>
    } else {
      return <span>{types.type.name}</span>
    }
  }

  const handleClick = () => {
    navigate(`/pokedex/${pokemonData.id}`)
  }

  return (
    <section onClick={handleClick}>
      <div>
        <img src={pokemonData?.sprites.other['official-artwork'].front_default} alt="image Pokemon" />
        <p>{pokemonData?.name}</p>
        {
          pokemonData?.types.map(type => (
            renderTypePokemon(type)
          ))
        }
        <p>Tipo</p>
      </div>
      <div>
        <div><p>HP</p><p>{pokemonData?.stats[0].base_stat}</p></div>
        <div><p>defensa</p><p>{pokemonData?.stats[2].base_stat}</p></div>
        <div><p>ataque</p><p>{pokemonData?.stats[1].base_stat}</p></div>
        <div><p>velociadad</p><p>{pokemonData?.stats[5].base_stat}</p></div>
      </div>
    </section >
  )
}

export default PokeCard