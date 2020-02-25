import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import GiphyScreen from './src/screens/GiphyScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Giphy: GiphyScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
