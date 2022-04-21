import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import todo from "./todo.png";
import Todo from "./Todo";
const Home =()=>{
    const [showModal,setShowModal]=useState(false);
    const openModal=()=>{
        setShowModal(true);
    }
    return(
        <>
        <h1>Welcome to your Personal Task Tracker!!</h1>
        <figure>
            <img src={todo} alt="img"/>
            <figcaption>Add your tasks, delete them and update based on your priorities.</figcaption>
        </figure>
        <button onClick={openModal}>Add Task</button>
        {showModal?<Todo setShowModal={setShowModal} add="true"/>:null}
        <button onClick={openModal}>My Task list</button>
        {showModal?<Todo setShowModal={setShowModal} add="false"/>:null}
        </>
    );
}

export default Home;