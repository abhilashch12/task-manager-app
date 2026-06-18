function TaskStats({tasks}){
  const total = tasks.length;
  const completed = tasks.filter((task)=>(task.completed)).length;
  const remaining = tasks.filter((task)=>(!task.completed)).length;

    return(
        <div>
         <p>total:{total}</p>
         <p>completed:{completed}</p>
         <p>remaining:{remaining}</p>
        </div>
    )
}
export default TaskStats;