import { useState } from 'react'
import './App.css'
import FuncComponent from './Components/FuncComponent'

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <div className="App">
      <h1>Su pedido de pizzas:</h1>
      {toggle &&
      <FuncComponent/>
      }
      <button onClick={() => setToggle(!toggle)}>{toggle ? 'Cancelar' : 'Agregar'} pedido</button>
      
    </div>
  )
}

export default App
