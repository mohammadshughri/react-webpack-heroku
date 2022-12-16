import { useState } from 'react'
import AddTaskForm from './Components/AddTaskForm.jsx'
import UpdateForm from './Components/UpdateForm.jsx'
import ToDo from './Components/ToDo.jsx'
import Logo from './Components/logo.svg'

import './App.css'

function App() {

  // Tasks initial State

  const [toDo, setToDo] = useState([
    { id: 1, title: 'New list item', status: false },
    { id: 2, title: 'New list item (Hover)', status: false },
    { id: 3, title: 'New list item (Done)', status: false }

  ])

  // Temporary State
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  // Add task 
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1

      setToDo([
        ...toDo,
        { id: num, title: newTask, status: false }
      ])

      setNewTask('')

    }
  }

  // Delete the selected task 
  const deleteTask = (id) => {

    setToDo(toDo.filter(task => task.id !== id))

  }

  // Mark the task as completed
  const markDone = (id) => {

    setToDo(toDo.map(
      task => task.id === id
        ? ({ ...task, status: !task.status })
        : (task)
    ))

  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('')
  }

  // Change the task when update is selected
  const changeHolder = (e) => {

    setUpdateData({ ...updateData, title: e.target.value })

  }

  // Update the task
  const updateTask = () => {

    let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id)
    setToDo([
      ...removeOldRecord,
      updateData
    ])

    setUpdateData('')

  }

  return (
    <div className="container App">

      <br /><br />
      <h1 className="title">Daily To Do List</h1>
      <br /><br />
      <div className='container fluid rectangle'>
        <br />
        {updateData && updateData ? (
          <UpdateForm
            updateData={updateData}
            changeHolder={changeHolder}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}

        {toDo && toDo.length ? '' : 'No Tasks...'}

        <ToDo
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
        />
        <div className='d-flex taskNum'>
          <p>Number of Tasks is: {toDo.length}</p>
        </div>
      </div>

      <div className='logoContainer'>
        <a className='text-center logoText' href="https://producter.co"> Powered by <Logo /></a>
      </div>
    </div>
  );
}

export default App;
