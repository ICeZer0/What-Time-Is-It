import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.state = { dateObj: new Date() };
    this.month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    this.day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setNewTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  showDate() {
    const { dateObj } = this.state;
    let day = this.day[dateObj.getDay()];
    let date = dateObj.getDate();
    let month = this.month[dateObj.getMonth()];
    let year = dateObj.getFullYear();

    return `${day} ${month} ${date}, ${year}`;
  }

  setNewTime() {
    this.setState({
        dateObj: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.dateObj.toLocaleTimeString()}</h1>
        <h2>{this.showDate()}</h2>
      </div>
    );
  }
}

export default Clock;
