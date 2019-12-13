import React, { useState } from "react";
import ReactModal from "../ReactModal";
import SearchBar from "../SearchBar";
import ProjectStatus from "./ProjectStatus";

const Table = ({ projectData, deleteProject, editRow }) => {
  const [selectItem, setSelectItem] = useState({});
  const [modal, setModal] = useState(false);

  const [keyWord, setKeyWord] = useState("");

  const filteredProject = projectData.filter(item =>
    item.projectname.toLowerCase().includes(keyWord.toLowerCase())
  );

  const handleOpenModal = item => {
    setSelectItem(item);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectItem({});
  };

  return (
    <div className="container">
      <h5 className="center">PROJECTS</h5>
      <SearchBar keyWord={keyWord} setKeyWord={setKeyWord} />
      <table className="highlight centered z-depth-4">
        <thead>
          <tr>
            <th>Current project</th>
            <th>Developers</th>
            <th>Hours per week</th>
            <th>Rate</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProject.length
            ? filteredProject.map(item => (
                <tr key={item.projectname}>
                  <td
                    className="modal-button"
                    onClick={() => handleOpenModal(item)}
                  >
                    {item.projectname}
                  </td>
                  <td>
                    <span>{item.developers}</span>
                  </td>
                  <td>{item.hoursperweek}</td>
                  <td>{item.rate}</td>
                  <td>
                    <ProjectStatus item={item.status} />
                  </td>
                  <td>
                    <button
                      onClick={() => editRow(item)}
                      className="btn-floating btn-small waves-effect waves-light
                      red"
                    >
                      <i className="large material-icons">create</i>
                    </button>
                    <span> </span>
                    <button
                      onClick={() => deleteProject(item.id)}
                      className="btn-floating btn-small waves-effect waves-light red"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))
            : null}
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
