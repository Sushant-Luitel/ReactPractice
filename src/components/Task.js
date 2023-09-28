export const Task=(props)=>{
    return (
        
    <div className="display-items" style={{color:props.iscompleted?"green":"red"}}>
            <h1 >{props.name}</h1>
            <button onClick={()=>props.completeTask(props.id)}>Complete</button>
        <button onClick={()=>props.deleteTask(props.id)}>Delete Task</button>
        </div>
    )
}