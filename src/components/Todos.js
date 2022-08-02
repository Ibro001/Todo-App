import React from 'react'
import Todo from './Todo';
import Next7Days from './Next7Days';

const Todos = () => {

  const selectedProject = 'today';
  const todos = [
    {
        id: 'd54sd4',
        text: 'Go for a run',
        time: '10:00 AM',
        date: '2/08/2022',
        day: '6',
        checked: false,
        color: '#000000',
        project: 'personal'
    },
    {
       id: 'd54fdf',
       text: 'Meeting',
       time: '09:00 AM',
       date: '03/08/2022',
       day: '3',
       checked: true,
       color: '#000000',
       project: 'work'
    }

]


  return (
    <div className='todos'>
      <div className='selected=project'>
        {selectedProject}
      </div>
      <div className='todos'>
        {
          selectedProject === 'next 7 days' ?
          <Next7Days todos = {todos} />
          :
          todos.map(todo => 
            <Todo key={todo.key}  todo = {todo} />
          )
        }
      </div>
    </div>
  )
}

export default Todos
