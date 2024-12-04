import React, { isValidElement, ReactElement, useEffect, useMemo, useState } from 'react'
import axios from "axios"
import './App.css'

interface TaskType{
  id: number,
  title: string,
}

function App()
{
  const [TasksList, setTasksList] = useState<TaskType[]>([]);
  const [currentTask,setCurrentTask] = useState<string>('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => 
  {
    setCurrentTask(e.target.value);
  }

  function handleClick()
  {
    const AddTask = ({
      id: TasksList.length+1,title: currentTask 
    });

    const updatedTasks = [...TasksList,AddTask];

    setTasksList(updatedTasks);
  }

  return (
    <div className='p-4'>
      <h1 className='text-4xl font-bold my-2'> Todo-List App </h1>
      <hr />
      <input type="text" className='p-2 rounded-md ' placeholder='Enter Task' value={currentTask} onChange={handleChange}/>
      <button className='p-2 border-black rounded-md bg-slate-300 ' onClick={handleClick}> Add Task </button>
      <div className='py-4'>
        {TasksList.map((task) => <p>
            <div className='p-2 ' key={task.id}>
                <div className='flex items-center text-center'>
                  <div className='text-4xl p-2'>Task-{task.id} | </div>
                  <div className='text-2xl'>{task.title}</div>    
                </div>
              <button className='bg-slate-300 p-2 m-2 rounded-md hover:bg-green-500' > Mark as Completed </button>
              <br />
            </div> 
          </p>)}
      </div>
    </div>
  )

}

export default App;

