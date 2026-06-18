import TaskItem from "./TaskItem";
function TaskList({tasks}){


    return(
         <div>
            <ul>
            {tasks.map((task)=>(<li key={task.id}><TaskItem task={task}/></li>))}
            </ul>
         </div>
    )
}
export default TaskList;