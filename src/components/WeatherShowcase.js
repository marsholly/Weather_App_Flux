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
      weather: WeatherStore.getWeather(),
      local: WeatherStore.getLocal()
    }
    this._onChange = this._onChange.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleReduce = this.handleReduce.bind(this);

  }

  componentWillMount() {
    WeatherActions.searchLocalByAutoIP();
    WeatherActions.lookUpByAutoIP();
    WeatherStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    WeatherStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      weather: WeatherStore.getWeather(),
      local: WeatherStore.getLocal()
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
    let { weather, local } = this.state;
    if(weather) {
      let { data } = weather;
      // let {  } = data;
    }

    console.log('weather:', weather);
    return (
      <div className="container">
        <div className="row">
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
            <CardHeader
              title="Pleasanton(city)"
              subtitle="CA, United States (Country)"
              avatar="http://icons.wxug.com/i/c/k/nt_clear.gif"
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
              overlay={<CardTitle title="clear" />}
            >
              <div className="row">
                <div className="leftArea">
                  <h2>
                    <img src="http://icons.wxug.com/i/c/k/nt_clear.gif" width='200' height="200"/>
                    82
                  </h2>
                </div>
                <div className="rightArea">
                  <table>
                    <tbody>
                      <tr >
                        <td>Feels like</td>
                        <td>86</td>
                      </tr>
                      <tr>
                        <td>Visibility</td>
                        <td>12344</td>
                      </tr>
                      <tr>
                        <td>Humidity</td>
                        <td>29%</td>
                      </tr>
                      <tr>
                        <td>UV Index</td>
                        <td>5 Moderate</td>
                      </tr>
                      <tr>
                        <td>Dew Point</td>
                        <td>51</td>
                      </tr>
                      <tr className="trBottom">
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
