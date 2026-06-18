import {useState} from "react";
import {useTaskContext} from "../context/TaskContext";
function TaskForm(){
   const {addTask}=useTaskContext();
   const intialvalues = {title:"",priority:"",dueDate:""}
   const[formdata,setFormdata]=useState(intialvalues);
   const[err,setErr]=useState({});
   function handler(e){
    const {name,value} = e.target;
    setFormdata({...formdata,[name]:value});
    setErr({...err,[name]:""});
   }
   function handlesubmit(e){
    e.preventDefault();
    const error ={};
    if(formdata.title.trim()===""){
        error.title="add some title";
    }
    if(formdata.priority.trim()===""){
        error.priority="please select priority";
    }
    if(formdata.dueDate.trim()===""){
        error.dueDate="please enter the date";
    }
    setErr(error);
    if(Object.keys(error).length>0){
        return;
    }
    const newtask={id:Date.now(),...formdata,completed:false};
    addTask(newtask);
    setFormdata(intialvalues);
    setErr({});

   }
    return(
        <div>
         <form onSubmit={handlesubmit}>
            <div>
                <input type="text" name="title" value={formdata.title} placeholder="add a task" onChange={handler} />
                <p>{err.title}</p>
            </div>
            <div>
                <select name="priority" value={formdata.priority} onChange={handler}>
                    <option value="">select</option>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>
                <p>{err.priority}</p>
            </div>
            <input type="date" name="dueDate" value={formdata.dueDate} onChange={handler} />
            <p>{err.dueDate}</p>
            <div>
             <button type="submit">submit</button>
            </div>

         </form>
        </div>
    )
}
export default TaskForm;