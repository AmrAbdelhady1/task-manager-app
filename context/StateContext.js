import React, { useState, useEffect, createContext, useContext } from "react";
// import axios from "axios";


const Context = createContext();

export const StateContext = ({ children }) => {

    const [task, setTask] = useState("");
    const [id, setId] = useState(0);
    const [todoList, setTodoList] = useState([]);
    const [isChecked, setIsChecked] = useState([]);
    const [iseditting, setIseditting] = useState([]);
    const [newTask, setNewTask] = useState("");

    const submitForm = e => {
        e.preventDefault();
        setTodoList([...todoList, { id, name: task }]);
        setTask("");
        setId(prev => prev + 1);
        setIsChecked([...isChecked, false]);
        setIseditting([...iseditting, false]);
    }

    const handleedit = id => {
        setNewTask(todoList.find(task => task.id === id).name);
        setIseditting(prev => {
            return prev.map((value, index) => {
                if (id === index)
                    return !value;
                return value;
            })
        })
    }

    const editTask = id => {
        const newTodoList = [...todoList];
        newTodoList[id] = { ...newTodoList[id], name: newTask };
        setTodoList(newTodoList);
        handleedit(id);
        setNewTask("");
    }

    const handleChecked = id => {
        setIsChecked(prev => {
            return prev.map((value, index) => {
                if (id === index)
                    return !value;
                return value;
            })
        })
    }

    const deleteTask = id => {
        const newTodoList = todoList.filter((task) => task.id != id);
        setTodoList(newTodoList);
    }

    return (
        <Context.Provider
            value={{
                setTask,
                submitForm,
                todoList,
                task,
                isChecked,
                setIsChecked,
                deleteTask,
                handleChecked,
                handleedit,
                iseditting,
                editTask,
                setNewTask,
                newTask
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);