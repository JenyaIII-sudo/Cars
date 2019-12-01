import React from "react";

const Autocomplete = () => {
  const [userData, setUserData] = useState([]);

  const initialValue = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ""
  };

  const handleChange = event => {
    const userInput = event.target.value;
  };
};
