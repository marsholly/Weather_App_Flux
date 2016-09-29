import React, { Component } from 'react';
import WeatherActions from '../actions/WeatherActions';


export default class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeywords: ''
    }

    this.searchWeather = this.searchWeather.bind(this);
  }

  searchWeather(e) {
    e.preventDefault();
    let { searchKeywords } = this.state;
    let searchKeywordsArr;
    if (searchKeywords.includes(',')) {
      searchKeywordsArr = searchKeywords.split(',');
      WeatherActions.lookUpByCity(searchKeywordsArr);
    } else {
      WeatherActions.lookUpByNumber(searchKeywords)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className = "showArea">
            <form onSubmit={this.searchWeather}>
              <div className="form-group has-feedback">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search city, zip or place ( eg: San_Francisco,CA )"
                  value = {this.state.searchKeywords}
                  onChange = {(e) => this.setState({ searchKeywords: e.target.value })}
                />
                <span className="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
