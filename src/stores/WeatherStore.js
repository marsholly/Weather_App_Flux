import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _weather = null;

class WeatherStore extends EventEmitter {
  constructor(props) {
    super(props);
    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_WEATHER':
          _weather = action.payload.weather;
          this.emit('CHANGE');
          break;
        
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getWeather() {
    return _weather;
  }

}

export default new WeatherStore();
