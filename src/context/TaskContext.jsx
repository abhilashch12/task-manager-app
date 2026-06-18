import {createContext,useContext} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {useState} from "react";
const TaskContext = createContext();
export function TaskProvider ({children}){
    const[tasks,setTasks]=useLocalStorage("tasks", []);
    function addTask(task){
        setTasks((prev)=>[...prev,task]);
    }
    function toggleTask(id){
        setTasks((prev)=>prev.map((task)=>(task.id===id?{...task,completed:!task.completed}:task)))
    }
    function deleteTask(id){
        setTasks(tasks.filter((task)=>task.id!==id));
    }

    return(
        <TaskContext.Provider value={{tasks,addTask,deleteTask,toggleTask}}>
            {children}
        </TaskContext.Provider>
    )
}
export function useTaskContext(){
    return useContext(TaskContext);
}