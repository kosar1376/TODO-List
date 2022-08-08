import React,{ useState } from 'react';
import Button from './Components/Button';

import './App.css'
import Input from './Components/Input';
import TasksList from './Components/TasksList';




function App() {
  const [inputText,setInputtext]=useState("")
  const [tasks,setTasks]=useState([])
  const [error,setError]=useState("");
 
  

  return (
    <div className="App">
     <form>
        <h1>Todo App</h1>
      <Input inputText={inputText} setInputtext={setInputtext} tasks={tasks} setTasks={setTasks} error={error} setError={setError}/>
      <p className='errortext'>{error}</p>
      
      
      <TasksList tasks={tasks} setTasks={setTasks} />
     

      <Button tasks={tasks} setTasks={setTasks}  />
     

      </form>
    
    </div>
  );
}

export default App;
