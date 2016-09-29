import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  lookUpByCity(cityArr) {
    axios.get(`https://api.wunderground.com/api/4949edfac53bb304/conditions/q/${cityArr[1]}/${cityArr[0]}.json`)
      .then(weather => {
        ServerActions.receiveWeather(weather);
      })
      .catch(err => {
        console.log('err:', err);
      })
  },
  lookUpByNumber(number) {
    axios.get(`https://api.wunderground.com/api/4949edfac53bb304/conditions/q/${number}.json`)
      .then(weather => {
        ServerActions.receiveWeather(weather);
      })
      .catch(err => {
        console.log('err:', err);
      })
  },
  lookUpByAutoIP() {
    axios.get('https://api.wunderground.com/api/4949edfac53bb304/conditions/q/autoip.json')
      .then(weather => {
        ServerActions.receiveWeather(weather);
      })
      .catch(err => {
        console.log('err:', err);
      })
  }
}

export default API;
