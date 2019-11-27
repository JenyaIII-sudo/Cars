import React from "react";

const ReactModal = props => {
  // const handleCloseModal = () => {
  //   setModal({ showModal: false });
  // };

  return (
    <div>
      <ReactModal isOpen={props.modal} contentLabel="Project">
        <h1>HELLO</h1>
        <button>Close</button>
      </ReactModal>
    </div>
  );
};

export default ReactModal;
