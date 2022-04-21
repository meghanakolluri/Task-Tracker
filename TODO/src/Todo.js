import React,{ useRef , useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Modal from "./Modal";

const Todo=(props)=>{
      const modalRef=useRef();
      const [modal,setModal]=useState(true);
      const closeModal=(e)=>{
          if(e.target===modalRef.current)
          {
              props.setShowModal(false);
          }
      };
      if(props.add=="true"){
      return ReactDOM.createPortal(
        <div className="container" ref={modalRef} onClick={closeModal}>
        <div className="modal">
          {modal?<Modal setModal={props.setShowModal} add="true"/>:null}
          {modal?null:closeModal}
          <button className='diffbtn' onClick={() => props.setShowModal(false)}>X</button>
        </div>
      </div>,
      document.getElementById("portal")
      )
      }
      else if(props.add=="false")
      {
        return ReactDOM.createPortal(
          <div className="container" ref={modalRef} onClick={closeModal}>
          <div className="modal">
            {modal?<Modal setModal={props.setShowModal} add="false"/>:null}
            {modal?null:closeModal}
            <button className='diffbtn' onClick={() => props.setShowModal(false)}>X</button>
          </div>
        </div>,
        document.getElementById("portal")
        )
      }
}

export default Todo;