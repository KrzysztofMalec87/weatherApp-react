import React, { Component } from 'react';

class Form extends Component {
  submitForm = event => {
    event.preventDefault();

    const {
      target: {
        location: { value },
      },
    } = event;
    const API_ENDPOINT = `${process.env.REACT_APP_WEATHER_API_URL}${value}${process.env.REACT_APP_WEATHER_API_KEY}`;

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(response => this.props.setWheaterData(response))
      .catch(error => console.error('Error:', error));
  };

  render() {
    return (
      <div className="search-form" onSubmit={this.submitForm}>
        <h5 className="search-form__heading">Search by location</h5>
        <form autoComplete="off" className="search-form__form">
          <input
            className="search-form__text-input"
            name="location"
            type="text"
          />
          <input
            className="search-form__submit-input"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default Form;
