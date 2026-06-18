import {useTaskContext} from "./context/TaskContext";
import {useTheme} from "./context/ThemeContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";
import {useState,useMemo} from "react";
import EmptyState from "./components/Emptystate";
import TaskStats from "./components/TaskStats";
function App() {
  const {tasks} = useTaskContext(); 
  const {theme}= useTheme();
  const [search,setSearch]=useState("");
  const [filter,setFilter]=useState("all");
  console.log(tasks);
  const filteredtasks = useMemo(()=>{
     let filtered=tasks;
  filtered= filtered.filter((task)=>(task.title.includes(search)));
  if(filter==="active"){
    filtered=filtered.filter((task)=>(!task.completed));
  }
  if(filter==="completed"){
    filtered=filtered.filter((task)=>(task.completed));
  }
  return filtered;
  },[tasks,search,filter])
  let message="";
  if(tasks.length===0){
    message="add your first task";
  }
  else if(search.trim()!==""&&filteredtasks.length===0){
    message="search something else";
  }
   else if (filter==="active"&&filteredtasks.length===0){
    message="no active tasks";
   }
   else if (filter==="completed"&&filteredtasks.length===0){
    message="no completed tasks";
   }
  return (
    <div className={theme}>
    <NavBar/>
     <TaskForm />
     {filteredtasks.length===0?(<EmptyState message={message}/>):<TaskList tasks={filteredtasks}/>}
     <SearchInput search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}  />
     <TaskStats  filteredtasks={filteredtasks}/>
    </div>
  );
}

export default App;