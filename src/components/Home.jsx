import React from 'react'
import imgPokedex from '../assets/img/image_1.png'

const Home = () => {



  return (
    <div className='home-container'>
      <img src={imgPokedex} alt="" className='home-img' />
      <p className='home-greeting'>Hola Entrenador!</p>
      <p className='home-incription'>Para poder comenzar dame tu nombre</p>
      <div className='home-input-container'>
        <input type="text" className='home-input' />
        <button className='home-button'>Comenzar</button>
      </div>
    </div>
  )
}

export default Home