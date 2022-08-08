import React from 'react';
import './Button.css';
import Text from './Text';

const Button = ({tasks,setTasks}) => {

    const Clickhandeler=(e)=>{
        e.preventDefault();
        setTasks([])

    }
    return (
        <div className='clear-container'>
           <Text tasks={tasks}/>
            <button className='clear' onClick={Clickhandeler}>Clear all</button>
        </div>
    );
};

export default Button;