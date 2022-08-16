import React, { useContext, useEffect, useRef } from 'react'
import { TodoContext } from '../context';

const Sidebar = ({children}) => {
  //Context
  const {setSelectedTodo} = useContext(TodoContext);

  //Ref
  const sidebarRef = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  })

  const handleClick = e => {  //checks if sidebar and it sorrunding is clicked,then hide EditTodo//
    if(e.target === sidebarRef.current || sidebarRef.current.contains(e.target)){
      setSelectedTodo(undefined)
    }
  }


  return (
    <div 
      className = 'sidebar'
      ref={sidebarRef}
    >
      {children}
    </div>
  )
}

export default Sidebar
