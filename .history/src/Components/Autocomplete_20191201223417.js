import React from "react";

const Autocomplete = () => {
  const [userData, setUserData] = useState([]);

  const initialValue = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ""
  };
  const [completed, setCompleted] = useState(initialValue);

  const handleChange = e => {
    setCompleted({ ...userInput, [e.target.name]: e.target.value });
  };
};
