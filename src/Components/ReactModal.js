import React from "react";
import Modal from "react-modal";

const ReactModal = ({ modal, handleCloseModal, item }) => {
  console.log("SELECT", item);

  return (
    <div>
      <Modal isOpen={modal} contentLabel="Project">
        <h4>{item.projectInfo}</h4>
        <button
          className=" waves-effect waves-light btn"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ReactModal;
