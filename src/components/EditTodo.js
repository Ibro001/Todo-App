import React, { useContext, useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import {TodoContext} from '../context'
import moment from 'moment';
import firebase from '../firebase';
const EditTodo = () => {
  //State
  const [text,setText] = useState();
  const [day,setDay] = useState(new Date());
  const [time,setTime] = useState(new Date());
  const [todoProject, setTodoProject] = useState('');

  //Context
  const {selectedTodo, projects} = useContext(TodoContext)
  
  useEffect(() => {
    if(selectedTodo){
      setText(selectedTodo.text)
      setDay(moment(selectedTodo.date, 'MM/DD/YYYY'))
      setTime(moment(selectedTodo.time, 'hh:mm A'))
      setTodoProject(selectedTodo.projectName)
    }
  },[selectedTodo]);

  useEffect(() => {
    if (selectedTodo){
      firebase
      .firestore()
      .collection('todos')
      .doc(selectedTodo.id)
      .update({
        text,
        date: moment(day).format('MM/DD/YYYY'),
        time: moment(time).format('hh:mm A'),
        day: moment(day).format('d'),
        projectName: todoProject
      })
    }
  },[time,text,day,todoProject])

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
