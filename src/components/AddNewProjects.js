import React, { useState } from 'react'
import Modal from './Modal';
import ProjectForm from './ProjectForm';
import { Plus} from 'react-bootstrap-icons';

const AddNewProjects = () => {

  const [showModal,setShowModal] = useState(false);
  const [projectName,SetProjectName] = useState('');
  const handleSubmit = (e)=>{

  }

  return (
    <div className='addNewProjects'>
      <div className='add-button'>
        <span onClick={()=> setShowModal(true)}>
          <Plus size='20'/>
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm 
          handleSubmit={handleSubmit}
          heading='New project'
          value={projectName}
          setValue={SetProjectName}
          setShowModal={setShowModal}
          confirmButtonText='+ Add Project'
        />
      </Modal>
    </div>
  )
}

export default AddNewProjects
