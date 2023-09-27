import { useState } from "react";
export function TodoList() {
  const [todolist, settodolist] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const updateTask = () => {
    settodolist([...todolist, inputValue]);
  };
  return (
    <div className="input">
      <input type="text" onChange={handleChange} />
      <button onClick={updateTask}>Add Task</button>
      {todolist.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}