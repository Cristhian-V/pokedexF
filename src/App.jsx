import { useDispatch, useSelector } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import { setTrainer } from './store/slices/trainer.slice'

function App() {

  const trainer = useSelector(state => state.trainer)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
