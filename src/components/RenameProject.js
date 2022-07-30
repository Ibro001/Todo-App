import React, { useState }  from 'react';
import ProjectForm from './ProjectForm';


const RenameProject = ({project, setShowModal}) => {

  const [newProjectName,setNewProjectName] =useState(project.name);
  const handleSubmit = (e) => {

  }

  return (
    <div className='renameProject'>
      <ProjectForm 
          handleSubmit={handleSubmit}
          heading='Edit project name'
          value={newProjectName}
          setValue={setNewProjectName}
          setShowModal={setShowModal}
          confirmButtonText='confirm'
        />
    </div>
  )
}

export default RenameProject
