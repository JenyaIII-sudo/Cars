import React, { useState, Fragment } from "react";

const Autocomplete = props => {
  const initialValue = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ""
  };
  const [suggestion, setSuggestion] = useState(initialValue);
  console.log("PRROOOOOOOOPS", props.suggest);

  const [userTags, setUserTag] = useState("");

  const handleChange = e => {
    const filteredSuggestions = props.suggest.filter(
      item =>
        item.username.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    );

    setSuggestion({
      ...suggestion,
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.target.value
    });
    console.log("FILTRED", filteredSuggestions);
  };
  console.log("SUGGESTION", suggestion);

  const handleClick = e => {
    setSuggestion({
      ...suggestion,
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    });
    setUserTag([...userTags, { tags: e.target.innerText }]);
  };
  const submitClick = () => {
    const developers = userTags.map(item => item.tags);
    console.log("DEEEEVEEEELOOOOP", developers);
    props.autoComplete(developers);
  };

  const renderComponent = () => {
    if (suggestion.showSuggestions && suggestion.userInput) {
      if (suggestion.filteredSuggestions.length) {
        return (
          <ul className="suggestions">
            {suggestion.filteredSuggestions.map((suggestion, index) => {
              let className;
              if (index === suggestion.activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion.id}
                  onClick={handleClick}
                >
                  {suggestion.username}
                </li>
              );
            })}
          </ul>
        );
      } else
        return (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
    }
  };

  return (
    <Fragment>
      <div className="username-list">
        {userTags.length &&
          userTags.map(item => (
            <div className="row">
              <h6>{item.tags}</h6>
            </div>
          ))}
      </div>
      <label>developers</label>
      <input
        value={suggestion.userInput}
        type="text"
        onChange={handleChange}
        name="developer"
      />
      {renderComponent()}
      <button
        className="col s12 waves-effect waves-light btn backuserlist"
        type="submit"
        onClick={submitClick}
      >
        Save
      </button>
    </Fragment>
  );
};

export default Autocomplete;
