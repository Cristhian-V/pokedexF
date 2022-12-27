import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'

const Pokedex = () => {
    const trainer = useSelector(state => state.trainer)
    const [pokemons, setPokemons] = useState()
    const [URL, setURL] = useState('https://pokeapi.co/api/v2/pokemon?limit=16&offset=0')

    const getPokemons = () => {
        if (URL.indexOf('pokemon?limit') !== -1) {
            axios.get(URL)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))
        } else if (URL.indexOf('type') !== -1) {
            axios.get(URL)
                .then(res => setPokemons(res.data.pokemon.map(e => e.pokemon)))
                .catch(err => console.log(err))
        } else {
            axios.get(URL)
                .then(res => setPokemons([{
                    name: res.data.name,
                    url: `https://pokeapi.co/api/v2/pokemon/${res.data.id}/`
                }]))
                .catch(err => console.log(err))
        }

    }

    useEffect(() => {
        getPokemons()
    }, [URL])

    const handleChange = (e) => {
        setURL(e.target.value)
    }

    const handleSubmit = (e) => {
        setURL(`https://pokeapi.co/api/v2/pokemon/${e.target.namePokemon.value}`)
        console.log(URL)
    }

    return (
        <div>
            <header>Aqui entra Header</header>
            <h2>{trainer}</h2>
            <form onSubmit={handleSubmit}>
                <select id="typeSelect" onChange={handleChange} >
                    <option value='https://pokeapi.co/api/v2/pokemon?limit=16&offset=0'>All Pokemons</option>
                    <option value="https://pokeapi.co/api/v2/type/1/">normal</option>
                    <option value="https://pokeapi.co/api/v2/type/2/">fighting</option>
                    <option value="https://pokeapi.co/api/v2/type/3/">flying</option>
                    <option value="https://pokeapi.co/api/v2/type/4/">poison</option>
                    <option value="https://pokeapi.co/api/v2/type/5/">ground</option>
                    <option value="https://pokeapi.co/api/v2/type/6/">rock</option>
                    <option value="https://pokeapi.co/api/v2/type/7/">bug</option>
                    <option value="https://pokeapi.co/api/v2/type/8/">ghost</option>
                    <option value="https://pokeapi.co/api/v2/type/9/">steel</option>
                    <option value="https://pokeapi.co/api/v2/type/10/">fire</option>
                    <option value="https://pokeapi.co/api/v2/type/11/">water</option>
                    <option value="https://pokeapi.co/api/v2/type/12/">grass</option>
                    <option value="https://pokeapi.co/api/v2/type/13/">electric</option>
                    <option value="https://pokeapi.co/api/v2/type/14/">psychic</option>
                    <option value="https://pokeapi.co/api/v2/type/15/">ice</option>
                    <option value="https://pokeapi.co/api/v2/type/16/">dragon</option>
                    <option value="https://pokeapi.co/api/v2/type/17/">dark</option>
                    <option value="https://pokeapi.co/api/v2/type/18/">fairy</option>
                </select>

                <input type="text" id='namePokemon' />
                <button>Buscar</button>
            </form>
            {
                pokemons?.map((pokemon) => (
                    <PokeCard
                        pokemon={pokemon}
                        key={pokemon.url}
                    />
                ))}
        </div>
    )
}

export default Pokedex