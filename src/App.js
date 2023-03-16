import {Provider} from 'react-redux';
import store from './store';
import RestaurantScreen from './components/RestaurantScreen';
function App() {
  return (
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  );
}

export default App;
// xerUXugNIuWbhMKVro60CD7PiJTTVsvI
// https://api.outsidein.dev/xerUXugNIuWbhMKVro60CD7PiJTTVsvI/restaurants
