import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveWeather(weather) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_WEATHER',
      payload: { weather }
    })
  },
  receiveLocal(local) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_LOCAL',
      payload: { local }
    })
  }
}

export default ServerActions;
