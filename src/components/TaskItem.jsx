import {useTaskContext} from "../context/TaskContext";
function TaskItem({task}){
const {toggleTask,deleteTask}=useTaskContext();
    return(
        <div>
            <article>
            <input type="checkbox" checked={task.completed} onChange={()=>(toggleTask(task.id))} />
            <h2>title:{task.title}</h2>
            <span>priority:{task.priority}</span>
            <p>dueDate:{task.dueDate}</p>
            <button onClick={(e)=>{e.stopPropagation();deleteTask(task.id)}}>delete</button>
            </article>
        </div>
    )
}
export default TaskItem;