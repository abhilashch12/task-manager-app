function SearchInput({search,setSearch,filter,setFilter}){
    function handler(e){
          setSearch(e.target.value);
    }

    return(
        <div>
        <input type="text" placeholder="search for tasks" onChange={handler}/>
        <button onClick={()=>setFilter("all")}>All</button>
        <button onClick={()=>setFilter("active")}>Active</button>
        <button onClick={()=>setFilter("completed")}>Completed</button>
        </div>
    )
}
export default SearchInput;