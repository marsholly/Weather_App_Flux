import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveWeather(weather) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_WEATHER',
      payload: { weather }
    })
  }
}

export default ServerActions;
