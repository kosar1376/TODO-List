import React from 'react';

const Text = ({tasks}) => {
    if(tasks.length>0){
        return(<p>You have <span style={{color:"red",fontWeight:"bold",fontSize:"1.2rem"}}>{tasks.length}</span> work to do</p>)
    }
        
    
    
};

export default Text;