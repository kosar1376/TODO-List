import React from 'react';
import styles from './Tasks.module.css';
import Task from './Task';


const TasksList = ({tasks,setTasks}) => {

    


    
    return (
        <div className={styles.Taskscontainer}>
            <ul className={styles.TasksList}>
                {tasks.map(task=>{
                    return(<Task text={task.text} key={task.id} task={task} tasks={tasks} setTasks={setTasks} />)
                })}
                
            </ul>

            
        </div>
    );
};

export default TasksList;