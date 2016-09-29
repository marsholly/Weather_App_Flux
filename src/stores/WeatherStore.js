import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _weather = null;
let _local = null;

class WeatherStore extends EventEmitter {
  constructor(props) {
    super(props);
    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_WEATHER':
          _weather = action.payload.weather;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_LOCAL':
          _local = action.payload.local;
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

  getLocal() {
    return _local;
  }
}

export default new WeatherStore();
