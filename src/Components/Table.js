import React, { useState } from "react";
import ReactModal from "./ReactModal";

const Table = props => {
  const [selectItem, setSelectItem] = useState("");
  const [modal, setModal] = useState(false);

  const handleOpenModal = item => {
    setModal(true);
    setSelectItem(item);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectItem("");
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
              <td>{item.username}</td>
              <td>
                <button onClick={() => handleOpenModal(item)}>
                  {item.projectname}
                </button>
              </td>
              <td>{item.emailname}</td>
              <td>{item.skype}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactModal
        item={selectItem}
        modal={modal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default Table;
