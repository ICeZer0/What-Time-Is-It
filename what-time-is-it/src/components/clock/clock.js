import React, { Component } from "react";
import CircularProgressBar from "../circularProgressBar/circularProgressBar";
import "../../styles/clock.css";

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
      <div className="clock-container">
        <CircularProgressBar
          strokeWidth="8"
          sqSize="360"
          offsetTime="60"
          //regex to parse out seconds
          currentTime={this.state.dateObj.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}
          percentage={this.state.dateObj.getSeconds()}
        />
        <h2 className="clock-date">{this.showDate()}</h2>
        <div className="ticker-container">
          <div className="ticker-wrap">
            <div className="ticker-move">
              <div className="ticker-item">UTC Time: {new Date().toUTCString()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
