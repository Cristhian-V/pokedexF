import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import imgPokedex from '../assets/img/image_1.png'
import { setTrainer } from '../store/slices/trainer.slice'

const Home = () => {
  const trainer = useSelector(state => state.trainer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(setTrainer(e.target.name.value))
    navigate('/pokedex')
  }

  return (
    <div className='home-container'>
      <img src={imgPokedex} alt="" className='home-img' />
      <p className='home-greeting'>Hola Entrenador!</p>
      <p className='home-incription'>Para poder comenzar dame tu nombre</p>
      <form className='home-from-container' onSubmit={handleClick} >
        <input type="text" className='home-input' id='name' />
        <button className='home-button'>Comenzar</button>
      </form>
    </div>
  )
}

export default Home