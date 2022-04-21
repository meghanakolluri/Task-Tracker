import React, { useState } from 'react';

const listoftasks=[];
const Modal=(props)=>{
    let req="";
    const trythis=(line)=>{
        req=line;
        console.log(req);
    }
    const added=()=>{
        listoftasks.push(req);
        console.log(listoftasks);
        props.setModal(false);
    }
    console.log(props.add);
    if (props.add==="true"){
    console.log("Inside if");
    return(
        <div>
            <h1>Add Task</h1>
            <input className='inputbox' type="text" onChange= {(e) => trythis(e.target.value)} placeholder='Add your task here'/>
            <button id='btn1' onClick={added}>Add</button>
        </div>
    )
    }
    else if (props.add==="false"){
        console.log("Inside else");
        const listitems=listoftasks.map((task)=> <li>task</li>);
        return(
            <div>
            <h1>Task List</h1>
            <ul>listitems</ul>
        </div>
        )
    }
}
export default Modal;