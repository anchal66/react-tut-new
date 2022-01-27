import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo({title}) {

    const [showModal, setShowModal] = useState(false);

    function deleteHandler(){
        setShowModal(true);
    }
    function closeModalHandler(){
        setShowModal(false);
    }
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions ">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {showModal && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
}

export default Todo;
