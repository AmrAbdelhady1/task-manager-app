import { useStateContext } from '@/context/StateContext'
import React from 'react'
import { Todo } from '.';

const Layout = () => {

    const { setTask, submitForm, task } = useStateContext();

    return (
        <div className='p-10 items-center flex justify-center '>
            <div className='md:w-1/2 w-full rounded-lg bg-white p-6 shadow-lg'>
                <h1 className='text-gray-500 text-center text-xl font-medium mb-10'>Create Your Task</h1>
                <form onSubmit={(e) => submitForm(e)} className='mb-10' >
                    <div className='flex items-center gap-4'>
                        <input
                            type="text"
                            className='py-2.5 px-0 w-full border-b-2 text-gray-500 border-gray-300  focus:outline-none focus:border-blue-600'
                            value={task}
                            onChange={e => setTask(e.target.value)}
                            required
                        />
                        <button className='py-1 p-1 md:text-base text-sm md:py-2 md:px-8 rounded-full border-2 text-gray-400 border-gray-400 hover:text-white hover:bg-gray-400 hover:underline'>ADD</button>
                    </div>
                </form>

                <Todo />

            </div>
        </div>
    )
}

export default Layout