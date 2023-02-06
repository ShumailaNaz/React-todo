import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'
import { Tasks } from './components/Tasks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header />
    <Tasks />
    </div>
  )
}

export default App
