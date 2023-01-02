import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ pokemon }) => { 
  const [pokemonData, setPokemonData] = useState()
  const [color, setColor] = useState()
  const [gradiente, setGradiente] = useState()
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
  useEffect(() => {
    if(pokemonData){
      switch (pokemonData.types[0].type.name) {
        case 'normal':
          setColor('#735259')
          setGradiente('linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)')
          break;
        case 'fighting':
          setColor('#96402A')
          setGradiente('linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)')
          break;
        case 'flying':
          setColor('#30a7d7')
          break;
        case 'poison':
          setColor('#b97fc9')
          setGradiente('linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)')
          break;
        case 'ground':
          setColor('#ab9842')
          setGradiente('linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)')
          break;
        case 'rock':
          setColor('#7E7E7E')
          setGradiente('linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)')
          break;
        case 'bug':
          setColor('#729f3f')
          setGradiente('linear-gradient(177.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 209.53%)')
          break;
        case 'ghost':
          setColor('#7b62a3')
          setGradiente('linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)')
          break;
        case 'steel':
          setColor('#9eb7b8')
          setGradiente('linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)')
          break;
        case 'fire':
          setColor('#fd7d24')
          setGradiente('linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)')
          break;
        case 'water':
          setColor('#4592c4')
          setGradiente('linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)')
          break;          
        case 'grass':
          setColor('#9bcc50')
          setGradiente('linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)')
          break;          
        case 'electric':
          setColor('#0C1290')
          setGradiente('linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)')
          break;          
        case 'psychic':
          setColor('#E52D2D')
          setGradiente('linear-gradient(179.75deg, #E62D2D -19.96%, #D13E3E 43.67%, #F07F7F 138.4%)')
          break;          
        case 'ice':
          setColor('#51c4e7')
          setGradiente('linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)')
          break;          
        case 'dragon':
          setColor('#53a4cf')
          setGradiente('linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)')
          break;          
        case 'dark':
          setColor('#707070')
          setGradiente('linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)')
          break;
        case 'fairy':
          setColor('#fdb9e9')
          setGradiente('linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)')
          break;
        default:
         
      }
    }
  }, [pokemonData])
  

  return (
    <section onClick={handleClick} className='pokeCard' style={{'border-color': color}}>
      <div className='pokecard-img-container'>
        <figure style={{'background': gradiente}}>
        <img src={pokemonData?.sprites.other['official-artwork'].front_default} alt="image Pokemon" className='pokeCard-img'/>
        </figure>
        <p className='pokeCard-name' style={{'color': color}}>{pokemonData?.name}</p>
        <p className='pokeCard-tipoDes'>
        {
          pokemonData?.types.map(type => (
            renderTypePokemon(type)
          ))
        }
        </p>
        <p className='pokeCard-tipo'>Tipo</p>
      </div>
      <hr />
      <div className='pokeCard-info'>
        <div><p className='pokeCard-info-title'>HP</p><p className='pokeCard-info-stat' style={{'color': color}}>{pokemonData?.stats[0].base_stat}</p></div>
        <div><p className='pokeCard-info-title'>DEFENSA</p><p className='pokeCard-info-stat' style={{'color': color}}>{pokemonData?.stats[2].base_stat}</p></div>
        <div><p className='pokeCard-info-title'>ATAQUE</p><p className='pokeCard-info-stat' style={{'color': color}}>{pokemonData?.stats[1].base_stat}</p></div>
        <div><p className='pokeCard-info-title'>VELOCIDAD</p><p className='pokeCard-info-stat' style={{'color': color}}>{pokemonData?.stats[5].base_stat}</p></div>
      </div>
    </section >
  )
}

export default PokeCard