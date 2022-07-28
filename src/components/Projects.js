import React, { useState } from 'react'
import { Palette, PencilFill, CaretUp } from 'react-bootstrap-icons';
import AddNewProjects from './AddNewProjects';
import Project from './Project';


const Projects = () => {

  const [edit,setEdit] = useState(false);
  const pencilColor = edit ? '#1EC94C' : '#000000';
  const [showMenu,setShowMenu] = useState(true);
  const Projects = [
    {id:1, name: 'personal', numOfTodos: 0},
    {id:2, name: 'work', numOfTodos: 1},
    {id:3, name: 'other', numOfTodos: 2}
  ]

  return (
    <div className='projects'>
      <div className='header'>
        <div className='title'>
          <Palette size={18}/>
          <p>Projects</p>
        </div>
        <div className='btns'>
          {
            showMenu && Projects.length > 0 &&
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
          Projects.map(project => 
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
