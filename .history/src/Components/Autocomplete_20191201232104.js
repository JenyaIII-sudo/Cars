import React, { Component, Fragment } from "react";

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  handleChange = e => {
    const { data } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = data.filter(
      item => item.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };
  handleClick = e => {};
}
