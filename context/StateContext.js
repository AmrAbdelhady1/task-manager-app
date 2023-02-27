import React, { useState, createContext, useContext } from "react";

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

    // Check if the task in edit mode
    const handleedit = idx => {
        setNewTask(todoList.find((task, index) => index === idx)?.name);
        setIseditting(prev => {
            return prev.map((value, index) => {
                if (idx === index)
                    return !value;
                return value;
            })
        })
    }

    const editTask = idx => {
        setTodoList(prev => prev[idx] = { ...prev[idx], name: newTask });
        handleedit(idx);
        setNewTask("");
    }

    // To check if the task is marked or not
    const handleChecked = idx => {
        setIsChecked(prev => {
            return prev.map((value, index) => {
                if (idx === index)
                    return !value;
                return value;
            })
        })
    }

    const deleteTask = idx => {
        setTodoList(prev => prev.filter((task, index) => index != idx));
        setIsChecked(prev => prev.filter((task, index) => index != idx));
        setIseditting(prev => prev.filter((task, index) => index != idx));
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