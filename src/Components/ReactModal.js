import React, { useState } from "react";
import Modal from "react-modal";

const ReactModal = ({ modal, handleCloseModal, data }) => {
  console.log("NAME", data);

  return (
    <div>
      <Modal isOpen={modal} contentLabel="Project">
        {data.map(item => (
          <h1>{item.Project}</h1>
        ))}
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ReactModal;
