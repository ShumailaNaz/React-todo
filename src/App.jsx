import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'
import { Tasks } from './components/Tasks'


function App() {
const [tasks,setTasks]=useState([])
const addTask=(taskTitle)=>{
  setTasks([
    ...tasks,
    {
      id:crypto.randomUUID(),
      title:taskTitle,
      status:false
    }
  ])
}
  return (
    <div className="App">
    <Header onAddTask={addTask} />
    <Tasks task={tasks}/>
    </div>
  )
}

export default App
