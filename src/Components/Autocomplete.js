import React, { useState } from "react";

const Autocomplete = props => {
  const initialValue = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ""
  };
  const [suggestion, setSuggestion] = useState(initialValue);
  console.log("PRROOOOOOOOPS", props.suggest);

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
      userInput: e.target.innerText
    });
  };
  const subClick = () => {
    props.nameComplete(suggestion.userInput);
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
    <div>
      <label>developer</label>
      <input
        value={suggestion.userInput}
        type="text"
        onChange={handleChange}
        name="developer"
        required
      />
      {renderComponent()}
      <button
        className="col s12 m8 l8 waves-effect waves-light btn backuserlist"
        type="submit"
        onClick={subClick}
      >
        Save
      </button>
    </div>
  );
};

export default Autocomplete;
