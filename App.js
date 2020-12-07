import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import GiphyScreen from './src/screens/GiphyScreen';
import NebulaeScreen from './src/screens/NebulaeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Giphy: GiphyScreen,
    Nebulae: NebulaeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Yuito'
    }
  }
);

export default createAppContainer(navigator);
