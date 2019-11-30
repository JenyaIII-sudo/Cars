import React, { useState } from "react";
import ReactModal from "./ReactModal";
import { Link } from "react-router-dom";

const Table = props => {
  const [selectItem, setSelectItem] = useState({});
  const [modal, setModal] = useState(false);

  const handleOpenModal = item => {
    setSelectItem(item);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectItem({});
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
            <th>Hours per week</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(item => (
            <tr>
              <td>
                <Link to={`/UserList/${item.id}`}>{item.username}</Link>
              </td>
              <td>
                <span
                  className="modal-button"
                  onClick={() => handleOpenModal(item)}
                >
                  {item.projectname}
                </span>
              </td>
              <td>{item.hoursperweek}</td>
              <td>{item.rate}</td>
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
