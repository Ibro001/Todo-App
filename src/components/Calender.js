import React, { useContext, useState } from 'react'
import {CalendarDate, CaretUp} from 'react-bootstrap-icons'
import {calendarItems} from '../constants/index';
import { TodoContext } from '../context';
import {useSpring, animated} from 'react-spring'


const Calender = () => {

  //State
  const [showMenu,setShowMenu] = useState(true)

  //Contextt//
  const {setSelectedProject} = useContext(TodoContext)

  //Animation

  const spin = useSpring({
    transform: showMenu ? 'rotate(0deg)' : 'rotate(180deg)',
    config: {friction: 10}
  })

  const menuAnimation = useSpring({
    display: showMenu ? 'block' : 'none',
    lineHeight: showMenu ? 1.2 : 0
  })

  return (
    <div className='projects'>
      <div className='header'>
        <div className='title'>
          <CalendarDate 
            size= "18"
          />
          <p>calendar</p>
        </div>  
          <animated.div 
            style={spin} 
            className='btns'
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>
              <CaretUp 
                size='20'
              />
            </span>
          </animated.div>
      </div>
      <animated.div style={menuAnimation} className='items'>
        {
          calendarItems.map(item => 
            <div 
              className='item' 
              key={item}
              onClick={()=> setSelectedProject(item)}
            >
                {item}
            </div>
            
          )
        }
      </animated.div>
    </div>
  )
}

export default Calender
