import React from 'react'
import Task from './task/Task'
import ClassTask from './classTask/ClassTask'

const App = () => {
  return (
    <>  
        <div>
            <h1>Class Task - Counter </h1>
            <ClassTask/>
        </div>
        <div>
            <h1>Tasks - useState</h1>
            <Task/>
        </div>
    </>
  )
}

export default App
