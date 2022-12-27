import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import PokeCardInfo from './components/PokeCardInfo'
import Pokedex from './components/Pokedex'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokeCardInfo />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
