import React, { useContext, useState }  from 'react';
import ProjectForm from './ProjectForm';
import firebase from '../firebase'
import { TodoContext } from '../context'


const RenameProject = ({project, setShowModal}) => {
  //State
  const [newProjectName,setNewProjectName] = useState(project.name);
  
  //Context
  const {selectedProject, setSelectedProject} = useContext(TodoContext)
  
  //Rename Project
  const renameProject = (project, newProjectName) => {
    const projectsRef = firebase.firestore().collection('projects');
    const todosRef = firebase.firestore().collection('todos');

    const {name: oldProjectName} = project //destructured my project//

    projectsRef
    .where('name', '==', newProjectName)
    .get()
    .then( querySnapshot => {
      if(!querySnapshot.empty){
        alert('Project with thesame name already exist!')
      }else{
        projectsRef
        .doc(project.id)
        .update({
          name: newProjectName
        })
        .then(() => {
          todosRef
          .where('projectName', '==', oldProjectName)
          .get()
          .then( querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.update({
                projectName: newProjectName
              })
            })
          })
          .then(() => {
            if(selectedProject === oldProjectName){
              setSelectedProject(newProjectName)
            }
          })
        })
      }
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    renameProject(project, newProjectName)

    setShowModal(false)
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
