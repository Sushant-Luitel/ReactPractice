import { useState } from "react";
import { Task } from "./Task";
export function TodoList() {
  const [todolist, settodolist] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    const newTask={
        id:todolist.length===0?1:todolist[todolist.length-1].id+1,
        name:inputValue,
        iscompleted: false
    }
    settodolist([...todolist, newTask]);
   
  };
  
  



  const deleteTask=(id)=>{
    const newTodolist= todolist.filter((task)=>task.id!==id)
    settodolist(newTodolist);
  }
  const completeTask=(id)=>{
    settodolist(
        todolist.map((task)=>{
            if (task.id===id){
                return {...task, iscompleted: true}
            }else 
            return task
        })
    )

  }
  return (
    <div className="main">
      <input class="input" type="text" onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
      {todolist.map((item) => {
        return <Task completeTask={completeTask} deleteTask={deleteTask} name={item.name} id={item.id} iscompleted={item.iscompleted}  />
      })}
    </div>
  );
}