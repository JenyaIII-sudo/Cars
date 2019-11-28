import React, { useState } from "react";
import Modal from "react-modal";

const ReactModal = ({ modal, handleCloseModal, item }) => {
  console.log("SELECT", item);

  return (
    <div>
      <Modal isOpen={modal} contentLabel="Project">
        <h1>{item.projectInfo}</h1>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ReactModal;
