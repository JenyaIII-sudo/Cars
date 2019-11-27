import React, { useState } from "react";
import ReactModal from "./ReactModal";

const Table = props => {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };
  console.log("PROPS", props.data);
  return (
    <div className="container">
      <h4 className="center">TABLE</h4>
      <table className="highlight centered z-depth-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Current project</th>
            <th>Clock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(item => (
            <tr>
              <td>{item.Firstname}</td>
              <td>
                <button onClick={handleOpenModal}>Eclair</button>
              </td>
              <td>{item.Lastname}</td>
              <td>{item.Skype}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactModal
        data={props.data}
        modal={modal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default Table;
