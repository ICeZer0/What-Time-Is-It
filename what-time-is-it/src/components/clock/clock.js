import React, { Component } from "react";
import CircularProgressBar from "../circlularProgressBar/circularProgressBar";

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
    this.dayOfWeek = [
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
    clearInterval(this.timer);
  }

  showDate() {
    const { dateObj } = this.state;
    let day = this.dayOfWeek[dateObj.getDay()];
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
        <CircularProgressBar
          strokeWidth="7"
          sqSize="475"
          currentTime={this.state.dateObj.toLocaleTimeString()}
          percentage={this.state.dateObj.getSeconds()}
        />
        <h2>{this.showDate()}</h2>
      </div>
    );
  }
}

export default Clock;
