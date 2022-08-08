import React from 'react';
import styles from './Tasks.module.css';
import Trash from '../Logos/Trash.svg';




const Task = ({text,task,tasks,setTasks}) => {
   
const deleteHandeler=()=>{
    setTasks(tasks.filter((element)=>element.id!==task.id))

}
    
   
    return (
        <div className={styles.item}>
            <li >{text}</li>
            <button className={styles.DeleteItem} onClick={deleteHandeler} >
                <img src={Trash} alt="trash"/>
            </button>
            
        </div>
    );
};

export default Task;