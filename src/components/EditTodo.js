import React, { useContext, useState } from 'react'
import TodoForm from './TodoForm';
import {TodoContext} from '../context'

const EditTodo = () => {
  //State
  const [text,setText] = useState();
  const [day,setDay] = useState();
  const [time,setTime] = useState();
  const [todoProject, setTodoProject] = useState();

  //Context
  const {selectedTodo, projects} = useContext(TodoContext)
  


  const handleSubmit = (e) => {

  }

  return (
    <div>
      {
        selectedTodo &&
        <div className='editTodo'>
          <div className='header'>
            EditTodo
          </div>
          <div className='container'>
            <TodoForm 
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              day={day}
              setDay={setDay}
              time={time}
              todoProject={todoProject}
              setTodoProject={setTodoProject}
              setTime={setTime}
              projects={projects}
            />
          </div>
    </div>
      }
    </div>
  )
}

export default EditTodo
