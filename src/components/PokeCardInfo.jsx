import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeCardInfo = () => {

    const { id } = useParams()

    const [pokemonData, setPokemonData] = useState()

    const getPokemonData = () => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
        axios.get(URL)
            .then(res => setPokemonData(res.data))
            .catch(err => consolelog(err))
    }

    useEffect(() => {
        getPokemonData()
    }, [])

    return (
        <div>
            <img src="" alt="logo pokemon" />
            <div>
                <div>
                    <div>
                        <img src={pokemonData?.sprites.other['official-artwork'].front_default} alt="pokemon" />
                        <div>
                            <p>
                                <span>{pokemonData?.weight}</span>
                                <span>Weight</span>
                            </p>
                            <p>
                                <span>{pokemonData?.height}</span>
                                <span>Height</span>
                            </p>
                        </div>
                        <p>{pokemonData?.name}</p>
                        <p># {id}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Type</h3>
                        {
                            pokemonData?.types.map(type => (
                                <p>{type.type.name}</p>
                            ))
                        }
                    </div>
                    <div>
                        <h3>Abilities</h3>
                        {
                            pokemonData?.abilities.map(ability => (
                                <p>{ability.ability.name}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <p>Encounters</p>
                <div>
                    <h3>Movements</h3>
                    {
                        pokemonData?.moves.map(move => (
                            <p>{move.move.name}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PokeCardInfo