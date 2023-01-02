import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img_1 from '../assets/img/image_1.png'

const PokeCardInfo = () => {

    const { id } = useParams()

    const [pokemonData, setPokemonData] = useState()
    const [porcentHp, setPorcentHp] = useState()
    const [porcentAtaque, setPorcentAtaque] = useState()
    const [porcentDefensa, setPorcentDefensa] = useState()
    const [porcentVelocidad, setPorcentVelocidad] = useState()
    const [gradient, setGradiente] = useState()
    const [color, setColor] = useState()


    const getPokemonData = () => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
        axios.get(URL)
            .then(res => setPokemonData(res.data))
            .catch(err => consolelog(err))
    }

    useEffect(() => {
        getPokemonData()
    }, [])

    useEffect(() => {
        if(pokemonData){
            setPorcentHp(`${((pokemonData.stats[0].base_stat * 0.006667) * 100)}%`)
            setPorcentAtaque(`${((pokemonData.stats[1].base_stat * 0.006667) * 100)}%`)
            setPorcentDefensa(`${((pokemonData.stats[2].base_stat * 0.006667) * 100)}%`)
            setPorcentVelocidad(`${((pokemonData.stats[5].base_stat * 0.006667) * 100)}%`)

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
                  setColor('#416460')
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
              }
            }
        },[pokemonData])

    console.log(porcentAtaque)
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
            <div className='cardInfo-container-container'>
            <div className='cardInfo-container'>
                <div className='cardInfo-Info'>
                    <figure className='cardInfo-imgContainer' style={{'background':gradient}}>
                    <img src={pokemonData?.sprites.other['official-artwork'].front_default} alt="pokemon" className='cardInfo-img'/>
                    </figure>
                    <h1 className='cardInfo-id' style={{'borderColor': color, 'color': color}}># {id}</h1>
                    <div className='cardInfo-nameContainer'>
                    <hr />
                    <h2 className='carInfo-name' style={{'color':color}}>{pokemonData?.name}</h2>
                    </div>
                    <div className='cardInfo-complexion'>
                        <div className='cardInfo-compWeight'>
                            <p className='cardInfo-compWeight-title'>Peso</p>
                            <p className='cardInfo-compWeight-stat'>{pokemonData?.weight}</p>
                        </div>
                        <div className='cardInfo-compHeight'>
                            <p className='cardInfo-compHeight-title'>Altura</p>
                            <p className='cardInfo-compHeight-stat'>{pokemonData?.height}</p>
                        </div>
                    </div>
                    <div className='cardInfo-container-tipHab'>
                        <div className='cardInfo-tipo-container'>
                            <h3 className='cardInfo-tipo-title'>Tipo</h3>
                            <div className='cardInfo-container-Types'>
                            {
                            pokemonData?.types.map(type => (
                                <p className='cardInfo-tipo-description' style={{'background': color}}>{type.type.name}</p>
                            ))
                            }
                            </div>
                        </div>
                        <div className='cardInfo-habilities-container'>
                        <   h3 className='cardInfo-abiliti-title' >Habilidades</h3>
                            <div className='cardInfo-container-abilities'>
                            {
                            pokemonData?.abilities.map(ability => (
                                <p className='cardInfo-abilities-description'>{ability.ability.name}</p>
                            ))
                            }
                            </div>
                        </div>
                    </div>
                    <div className='cardInfo-statContainer'>
                    <hr />
                        <h3 className='cardInfo-stat-title'>Stat</h3>
                        <div className='cardInfo-statContainer-container'>
                        <div>
                            <div className='cardInfo-stat-description'>
                            <span>HP:</span><span>{pokemonData?.stats[0].base_stat} / 150</span>
                            </div>
                            <div className='porcent-stat' style={{'--porcent':porcentHp, '--color':color}}></div>
                        </div>
                        <div>
                            <div className='cardInfo-stat-description'>
                            <span>ATAQUE:</span><span>{pokemonData?.stats[1].base_stat} / 150</span>
                            </div>
                            <div className='porcent-stat' style={{'--porcent':porcentAtaque, '--color':color}}></div>
                            </div>
                        <div>
                            <div className='cardInfo-stat-description'>
                            <span>DEFENSA:</span><span>{pokemonData?.stats[2].base_stat} / 150</span>
                            </div>
                            <div className='porcent-stat' style={{'--porcent':porcentDefensa, '--color':color}}></div>
                            </div>
                        <div>
                            <div className='cardInfo-stat-description'>
                            <span>VELOCIDAD:</span><span>{pokemonData?.stats[5].base_stat} / 150</span>
                            </div>
                            <div className='porcent-stat' style={{'--porcent':porcentVelocidad, '--color':color}}></div>
                            </div>
                        </div>
                    </div>
                </div>   


            </div>
            <div className='movements-container-container'>
            <h3 className='movements-title'>Movements</h3>
                <div className='movements-container'>
                    {
                        pokemonData?.moves.map(move => (
                            <p className='movements-description' style={{'--color':color}}>{move.move.name}</p>
                        ))
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default PokeCardInfo