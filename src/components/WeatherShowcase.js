import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import WeatherStore from '../stores/WeatherStore';
import WeatherActions from '../actions/WeatherActions';

export default class WeatherShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      weather: WeatherStore.getWeather()
    }
    this._onChange = this._onChange.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleReduce = this.handleReduce.bind(this);

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

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }

  handleToggle(event, toggle) {
    this.setState({expanded: toggle});
  }

  handleExpand() {
    this.setState({expanded: true});
  }

  handleReduce() {
    this.setState({expanded: false});
  }

  render() {
    let { weather } = this.state;
    // console.log('weather:', weather)
    let curWeather = '', curWind_mph = '', curTemperature_string = '', curVisibility_mi = '';
    let curHumidity = '', curDewpoint = '', curFeelslike = '', curUV = '', curIcon_url = '';
    let curFull = '', curState = '';
    if (weather) {
      let { data } = weather;
      if (data) {
        let { current_observation } = data;
        let { icon_url, UV, display_location, temperature_string, weather, wind_mph, visibility_mi, relative_humidity, dewpoint_string, feelslike_string } = current_observation;
        let { full, state_name, country} = display_location;
        curWeather = weather;
        curWind_mph = wind_mph;
        curTemperature_string = temperature_string;
        curVisibility_mi = visibility_mi;
        curHumidity = relative_humidity;
        curDewpoint = dewpoint_string;
        curFeelslike = feelslike_string;
        curUV = UV;
        curIcon_url = icon_url;
        curFull = full;
        curState = `${state_name}, ${country}`;
      }
    }
    return (
      <div className="container">
        <div className="row">
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
            <CardHeader
              title={curFull}
              subtitle={curState}
              avatar={curIcon_url}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText>
              <Toggle
                toggled={this.state.expanded}
                onToggle={this.handleToggle}
                labelPosition="right"
                label="More detail from Weather...."
              />
            </CardText>
            <CardMedia
              expandable={true}
              overlay={<CardTitle title = {curWeather}/>}
            >
              <div className="row">
                <div className="leftArea">
                  <h2>
                    <img src={curIcon_url} width='200' height="200"/>
                    {curTemperature_string}
                  </h2>
                </div>
                <div className="rightArea">
                  <table>
                    <tbody>
                      <tr >
                        <td>Feels like</td>
                        <td>{curFeelslike}</td>
                      </tr>
                      <tr>
                        <td>Visibility/mi</td>
                        <td>{curVisibility_mi}</td>
                      </tr>
                      <tr>
                        <td>Humidity</td>
                        <td>{curHumidity}</td>
                      </tr>
                      <tr>
                        <td>Wind/mph</td>
                        <td>{curWind_mph}</td>
                      </tr>
                      <tr>
                        <td>Dew Point</td>
                        <td>{curDewpoint}</td>
                      </tr>
                      <tr>
                        <td>UV</td>
                        <td>{curUV}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardMedia>
            <CardTitle title="Forecast" subtitle="Forecast 10day" expandable={true} />
            <CardText expandable={true}>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </CardText>
            <CardActions>
              <FlatButton label="Expand" onTouchTap={this.handleExpand} />
              <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
};


{/* <img src="http://www.windows-8-wallpapers.com/thumbs/scenic-lake-feature-windows-8-wallpaper-t2.jpg" /> */}
