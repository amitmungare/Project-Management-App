import React, { useState } from "react";

const NewTask = ({onAdd}) => {
  const [enteredTask, setEnteredtask] = useState("");

  function handleChange(event) {
    setEnteredtask(event.target.value);
  }

  function handleClick(){
    if(enteredTask.trim()===''){
      return
    }
    setEnteredtask('');
    onAdd(enteredTask)
  }

  return (
    <div className="flex items-center justify-between">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        onChange={handleChange}
        value={enteredTask}
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default NewTask;
