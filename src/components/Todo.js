import React, { useContext, useState } from 'react'
import { CheckCircleFill, Circle, ArrowClockwise, Trash } from 'react-bootstrap-icons'
import firebase from '../firebase';
import moment from 'moment'
import { TodoContext } from '../context';
import {useTransition,useSpring,animated} from 'react-spring'



const Todo = ({todo}) => {

  //State
  const [hover,setHover] = useState(false);

  //Context
  const {selectedTodo, setSelectedTodo} = useContext(TodoContext);
  
  const handleDelete = todo => {
    deleteTodo(todo)
    if (selectedTodo === todo){
      setSelectedTodo(undefined)
    }
  }

  const deleteTodo = todo => {
    firebase
    .firestore()
    .collection('todos')
    .doc(todo.id)
    .delete()
  }

  const checkTodo = todo => {
    firebase
    .firestore()
    .collection('todos')
    .doc(todo.id)
    .update({
      checked: !todo.checked
    })
  }

  const repeatNextDay = todo => {
    const nextDayDate = moment(todo.date, 'MM/DD/YYYY').add(1, 'days')

    const repeatedTodo = {
        ...todo,
        checked : false,
        date : nextDayDate.format('MM/DD/YYYY'),
        day : nextDayDate.format('d')
    }

    delete repeatedTodo.id

    firebase
        .firestore()
        .collection('todos')
        .add(repeatedTodo)
}
  
  //Animation
  const fadeIn = useSpring({
    from: {marginTop: '-12px', opacity: 0},
    to: {marginTop: '0px', opacity: 1}
  })

  const checkTransitions = useTransition(todo.checked,{
    from: {position: 'absolute', transform: 'scale(0)'},
    enter: {transform: 'scale(1)'},
    leave: {transform: 'scale(0)'}
  })

  return (
    <animated.div style={fadeIn} className='todo'>
      <div className = 'todo-container'
           onMouseEnter={()=> setHover(true)}
           onMouseLeave={()=> setHover(false)}
      >
        <div 
          className='checked-todo'
          onClick={() => checkTodo(todo)}
        >
          {
            checkTransitions((props, checked) => 
              checked ? 
              <animated.span style={props} className='checked'>
                <CheckCircleFill color= '#bebebe'/>
              </animated.span>
              :
              <animated.span style={props} className='unchecked'>
                <Circle color={todo.color} />
              </animated.span>
            )
          }
        </div>
        <div 
          className='text'
          onClick={() => setSelectedTodo(todo)}
        >
          <p style={{color: todo.checked ? '#bebebe' : '#000000 '}}>{todo.text}</p>
          <span>
            {todo.time} - {todo.projectName}
          </span>
          <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
        </div>
        <div 
          className='add-to-next-next-day'
          onClick={() => repeatNextDay(todo)}
        >
          {
            todo.checked &&
            <span>
              <ArrowClockwise /> 
            </span>
          }
        </div>
        <div 
          className='delete-todo'
          onClick={() => handleDelete(todo)}
        >
          {
            (hover || todo.checked) &&
            <span>
              <Trash />
            </span>
          }
        </div>
      </div>
    </animated.div>
  )
}

export default Todo
