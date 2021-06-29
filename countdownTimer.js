import React from 'react';
import moment from 'moment';

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.getTimeDifference(this.props.countDate, this.props.expireDays);
    this.interval = setInterval(
      () => this.getTimeDifference(this.props.countDate, this.props.expireDays),
      1000
    );
  }

  // Quick and easy function that adds a zero if the any number is less than 10. I.E. 10 hours vs. 09 hours
  leadingZero(num) {
    return num < 10 && num > 0 ? '0' + num : num;
  }

  getTimeDifference(timestamp, days_until_expire) {
    const calculatedDate = moment(timestamp).add(days_until_expire, 'days');
    const time = Date.parse(calculatedDate._d) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    this.setState({ days, hours, minutes, seconds });
  }

  // on render, determine if the item is expired and return the proper Div
  renderCheckForExpire() {
    if (this.state.seconds < 0 && this.props.isEdited === false) {
      clearInterval(this.interval);
      const itemName = this.props.name;

    //   pluralize item names
      const itemNameSlice = itemName.slice(-1);
      if (itemNameSlice === 's') {
        return (
          <div className="expiredBox">
            <h3>Item: {this.props.name} have expired</h3>
          </div>
        );
      } else {
        return (
          <div className="expiredBox">
            <h3>Item: {this.props.name} has expired</h3>
          </div>
        );
      }
    } else
      return (
        <div className="countDownBox">
          <div className="clockDays">
            {this.leadingZero(this.state.days)}
            <div className="days">{this.state.days === 1 ? 'day' : 'days'}</div>
          </div>
          <div className="clockHours">
            {this.leadingZero(this.state.hours)}
            <div className="hours">
              {this.state.hours === 1 ? 'hour' : 'hours'}
            </div>
          </div>
          <div className="clockMinutes">
            {this.leadingZero(this.state.minutes)}
            <div className="minutes">
              {this.state.minutes === 1 ? 'minute' : 'minutes'}
            </div>
          </div>
          <div className="clockSeconds">
            {this.leadingZero(this.state.seconds)}
            <div className="minutes">
              {this.state.seconds === 1 ? 'second' : 'seconds'}
            </div>
          </div>
        </div>
      );
  }

  render() {
    return <div className="timerBox">{this.renderCheckForExpire()}</div>;
  }
}

export default CountDownTimer;
