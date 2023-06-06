// eslint-disable-next-line
import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'

const App = () => {
  const [tasks, setTasks] =  useState([
    {
       id: 1,
       text: 'class',
       day: 'June 7th at 8:30',
       remainder: true,
    },
    {
       id: 2,
       text: 'meet',
       day: 'June 7th at 6:30',
       remainder: true,
    },
    {
       id: 3,
       text: 'Exam',
       day: 'June 10th at 11:15',
       remainder: false,
    },
   ]
   )
   //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder:!task.reminder } : task))
  }
  return (
    <div className="app">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) :('All tasks completed!!!')}
    </div>
  )
}

export default App;
