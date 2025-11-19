import {useState} from 'react'

export default function TodoApp() {

  return (
    <div className='bg-white w-96 p-8 rounded-xl shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>Todo List</h1>

        <div className="flex gap-2 mb-4">
        <input className='border rounded px-3 py-2'  placeholder='Enter a task..' value={task} />
        <button className='px-4 py-2 bg-blue-500 rounded text-white' >Add</button>
        </div>
    </div>
  )
}
