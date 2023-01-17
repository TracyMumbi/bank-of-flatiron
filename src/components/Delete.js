import React from 'react'

function Delete() {

    const handleDelete = (index) => {
        setTasks(tasks.filter((task, i) => i !== index))
      };

  return (
    <div>Delete</div>
  )
}

export {handleDelete, Delete}