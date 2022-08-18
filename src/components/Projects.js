import React, { useContext, useState } from 'react'
import { Palette, PencilFill, CaretUp } from 'react-bootstrap-icons';
import AddNewProjects from './AddNewProjects';
import Project from './Project';
import { TodoContext } from '../context';
import {useSpring, animated} from 'react-spring'



const Projects = () => {

  const [edit,setEdit] = useState(false);
  const pencilColor = edit ? '#1EC94C' : '#000000';
  const [showMenu,setShowMenu] = useState(true);
  
  //Import project using Context API//
  const { projects } = useContext(TodoContext)

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
          <Palette size={18}/>
          <p>Projects</p>
        </div>
        <div className='btns'>
          {
            showMenu && projects.length > 0 &&
            <span  className='edit' onClick={() => setEdit(edit => !edit)}>
              <PencilFill size= '15' color={pencilColor}/>
            </span>
          }
          <AddNewProjects />
          <animated.span 
            className='arrow'
            style={spin}
            onClick={() => setShowMenu(!showMenu)}
          >
            <CaretUp size='20' />
          </animated.span>
        </div>
      </div>
      <animated.div style={menuAnimation} className='items'>
        {
          projects.map(project => 
            <Project 
                project={project}
                key={project.id}
                edit={edit}
            />  
          )
        }
      </animated.div>
    </div>
  )
}

export default Projects
