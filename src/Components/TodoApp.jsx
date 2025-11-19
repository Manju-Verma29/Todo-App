import {useState} from 'react'

export default function TodoApp() {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    function addTask(){
        if(task.trim() === "") return;
        setList([...list, task]);
        setTask("");
    }

    function removeTask(index){
        setList(list.filter((_, i) => i !== index));
    }

  return (
    <div className='bg-white w-96 p-8 rounded-xl shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>Todo List</h1>

        <div className="flex gap-2 mb-4">
        <input className='border rounded px-3 py-2'  placeholder='Enter a task..' value={task} onChange={(e) => setTask(e.target.value)} />
        <button className='px-4 py-2 bg-blue-500 rounded text-white' onClick={addTask} >Add</button>
        </div>
   

    {list.length === 0 ? (
        <p className="text-gray-500">No tasks yet...</p>
    ) : (
        <ul className="space-y-2">
        {list.map((item, index) => (
            <li key={index} className='flex justify-between items-center bg-gray-100 px-3 py-2 rounded'>
                <span>{item}</span>
                <button onClick={() => removeTask(index)} className='!text-red-500'>
                    X
                </button>
            </li>
        ))}
        </ul>
    )}
    </div>
  );
  }

