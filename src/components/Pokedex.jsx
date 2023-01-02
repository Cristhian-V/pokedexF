import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'
import PokeCard from './PokeCard'
import img_1 from '../assets/img/image_1.png'

const Pokedex = () => {
    const trainer = useSelector(state => state.trainer)
    const [pokemonPaginationSelector, setPokemonPaginationSelector] = useState()
    const [pokemons, setPokemons] = useState()
    const [end, setEnd] = useState()
    const [pagina, setPagina] = useState(0)
    const [URL, setURL] = useState('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

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
        setPagina(0)
    }, [URL])

    useEffect(() => {
        if(pokemons){
            let arrayTempTotal = []
            for(let x = 0; x < pokemons.length; x = x + 16){
                let arrayTemp = []
                let Limit = x + 16
                for(let i = x; i < Limit; i++){
                    if(pokemons[i]){arrayTemp.push(pokemons[i])}
                }
                arrayTempTotal.push(arrayTemp)
            } 
            setPokemonPaginationSelector(arrayTempTotal[pagina])
            setEnd(arrayTempTotal.length - 1)
        }
    },[pokemons, pagina])

    const handleChange = (e) => {
        setURL(e.target.value)
    }

    const handleSubmit = (e) => {
        setURL(`https://pokeapi.co/api/v2/pokemon/${e.target.namePokemon.value}`)
        console.log(URL)
    }


    return (
        <div>
            <header>
                <div className='header-red'>
                    <figure className='header-img'><img src={img_1} alt="" /></figure>
                </div>
                <div className='header-black'>
                    <div className='header-circleWhite'>
                        <div className='header-circleBlack'></div>
                    </div>
                </div>
            </header>
            <span className='bienvenida'><h2>Bienvenido {trainer}</h2>, aquí podrás encontrar tu pokemón favorito</span>
            <form onSubmit={handleSubmit} className='formSharePokemon'>
                <div>
                <input className='formSharePokemon-input' type="text" id='namePokemon' />
                <button className='formSharePokemon-button'>Buscar</button>
                </div>
                <select className='formSharePokemon-select' id="typeSelect" onChange={handleChange} >
                    <option value='https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'>All Pokemons</option>
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
            </form>

            <div className='pokeCard-cotainer-container'>
            <div className='pokeCard-cotainer'>
            {
                pokemonPaginationSelector?.map((pokemon) => (
                    <PokeCard
                        key={pokemon.url}
                        pokemon={pokemon}
                    />
                ))}
                </div>
                </div>
                
            <Pagination 
                pagina={pagina}
                setPagina={setPagina}
                end={end}
            />
        </div>
    )
}

export default Pokedex