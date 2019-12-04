import React, { useState } from "react";
import ReactModal from "./ReactModal";
import SearchBar from "./SearchBar";

const Table = props => {
  const [selectItem, setSelectItem] = useState({});
  const [modal, setModal] = useState(false);

  const [keyWord, setKeyWord] = useState("");

  const filteredProject = props.projectData.filter(item =>
    item.projectname.toLowerCase().includes(keyWord.toLowerCase())
  );

  // const searchChange = e => {
  //   setKeyWord(e.target.value);
  // };
  console.log("KEY", keyWord);

  // const clearSearchBar = e => {
  //   setKeyWord();
  // };

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
      <h5 className="center">PROJECTS</h5>
      <SearchBar keyWord={keyWord} setKeyWord={setKeyWord} />
      <table className="highlight centered z-depth-4">
        <thead>
          <tr>
            <th>Current project</th>
            <th>Developer</th>
            <th>Hours per week</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProject.length
            ? filteredProject.map(item => (
                <tr>
                  <td>{item.projectname}</td>
                  <td>
                    <span
                      className="modal-button"
                      onClick={() => handleOpenModal(item)}
                    >
                      {item.developer}
                    </span>
                  </td>
                  <td>{item.hoursperweek}</td>
                  <td>{item.rate}</td>
                  <td>
                    <a
                      onClick={() => props.deleteProject(item.id)}
                      className="btn-floating btn-small waves-effect waves-light red"
                    >
                      X
                    </a>
                  </td>
                </tr>
              ))
            : ""}
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
