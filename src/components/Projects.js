import React, { useContext, useState } from 'react'
import { Palette, PencilFill, CaretUp } from 'react-bootstrap-icons';
import AddNewProjects from './AddNewProjects';
import Project from './Project';
import { TodoContext } from '../context';



const Projects = () => {

  const [edit,setEdit] = useState(false);
  const pencilColor = edit ? '#1EC94C' : '#000000';
  const [showMenu,setShowMenu] = useState(true);
  
  //Import project using Context API//
  const { projects } = useContext(TodoContext)

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
          <span className='arrow'>
            <CaretUp size='20' />
          </span>
        </div>
      </div>
      <div className='items'>
        {
          projects.map(project => 
            <Project 
                project={project}
                key={project.id}
                edit={edit}
            />  
          )
        }
      </div>
    </div>
  )
}

export default Projects
