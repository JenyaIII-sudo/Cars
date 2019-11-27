import React, { useState } from "react";
import ReactModal from "./ReactModal";

const Table = () => {
  // const initialValue = { showModal: false };
  // const [modal, setModal] = useState(initialValue);

  // const handleOpenModal = () => {
  //   setModal({ showModal: true });
  // };

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
          <tr>
            <td>Alvin</td>
            <td>
              <button>Eclair</button>
            </td>
            <td>$0.87</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td>Jellybean</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td>Lollipop</td>
          </tr>
        </tbody>
        {/* <ReactModal modal={modal} /> */}
      </table>
    </div>
  );
};

export default Table;
