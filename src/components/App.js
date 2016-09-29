import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import SearchArea from './SearchArea';
import WeatherShowcase from './WeatherShowcase';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <h1 className="text-center">Weather App</h1>
          <SearchArea />
          <WeatherShowcase />
        </div>
      </MuiThemeProvider>
    )
  }
};
