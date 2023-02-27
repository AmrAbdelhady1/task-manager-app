import React from 'react'
import { useStateContext } from '@/context/StateContext'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'

const Todo = () => {

  const { todoList, isChecked, deleteTask, handleChecked, handleedit, iseditting, editTask, setNewTask, newTask } = useStateContext();

  return (
    <div className=''>
      {todoList?.map((item,index) =>
        <div key={item.id} className='py-2 border-2 border-black px-2 mb-5 rounded-xl '>
          {iseditting[index] === true ?
            <div className='flex justify-between'>
              <input
                type="text"
                className='py-2.5 px-0 w-full border-b-2 text-gray-500 border-gray-300  focus:outline-none focus:border-blue-600'
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                required
              />
              <div className='flex gap-2'>
                <button onClick={()=>editTask(index)} className='py-1 p-1 md:text-base text-sm md:py-2 md:px-8 rounded-full border-2 text-gray-400 border-green-700 hover:text-white hover:bg-green-700 hover:underline'>Save</button>
                <button onClick={()=>handleedit(index)} className='py-1 p-1 md:text-base text-sm md:py-2 md:px-8 rounded-full border-2 text-gray-400 border-red-500 hover:text-white hover:bg-red-500 hover:underline'>Cancel</button>
              </div>
            </div>
            :
            <div className='flex justify-between'>
              <h1 className={`text-xl ${isChecked[index] ? 'line-through text-red-600' : 'text-gray-500'}`}>{item.name}</h1>
              <div className='flex gap-3'>
                <button className={`text-gray-500 ${isChecked[index] && 'hidden'}`} onClick={() => handleedit(index)}><AiOutlineEdit /></button>
                <button className='text-green-600' onClick={() => handleChecked(index)}><IoCheckmarkDoneOutline /></button>
                <button className='text-red-600' onClick={() => deleteTask(index)}><BsTrash /></button>
              </div>
            </div>
          }
        </div>
      )}
    </div>
  )
}

export default Todo