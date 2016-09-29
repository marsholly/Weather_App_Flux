import React, { Component } from 'react';
import WeatherStore from '../stores/WeatherStore';
import WeatherActions from '../actions/WeatherActions';

export default class WeatherShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: WeatherStore.getWeather()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    WeatherActions.lookUpByAutoIP();
    WeatherStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    WeatherStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      weather: WeatherStore.getWeather()
    })
  }

  render() {
    let { weather } = this.state;
    console.log('weather:', weather);
    return (
      <div className="container">
        <div className="row">
          WeatherShowcase
        </div>
      </div>
    )
  }
};
