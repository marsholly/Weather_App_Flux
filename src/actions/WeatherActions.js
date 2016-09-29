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
  },
  searchLocalByAutoIP() {
    API.searchLocalByAutoIP();
  }
}

export default WeatherActions;
