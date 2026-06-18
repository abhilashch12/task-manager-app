function TaskStats({filteredtasks}){
  const total = filteredtasks.length;
  const completed = filteredtasks.filter((task)=>(task.completed)).length;
  const remaining = filteredtasks.filter((task)=>(!task.completed)).length;

    return(
        <div>
         <p>total:{total}</p>
         <p>completed:{completed}</p>
         <p>remaining:{remaining}</p>
        </div>
    )
}
export default TaskStats;