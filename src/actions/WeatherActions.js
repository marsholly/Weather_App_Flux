import API from '../API';

const WeatherActions = {
  lookUpByCity(cityArr) {
    API.lookUpByCity(cityArr);
  },
  lookUpByNumber(number) {
    API.lookUpByNumber(number);
  },
  lookUpByAutoIP() {
    API.lookUpByAutoIP();
  }
}

export default WeatherActions;
