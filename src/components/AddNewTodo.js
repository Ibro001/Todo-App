import React, { useState } from 'react'
import Modal from './Modal';


const AddNewTodo = () => {

  const [showModal,setShowModal] = useState(false);

  return (
    <div className='addNewTodo'>
      <div className='btn'>
        <button onClick={() => setShowModal(true)}>
          + New Todo
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          hello world
          <button onClick={()=> setShowModal(false)}>
            hide
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default AddNewTodo
