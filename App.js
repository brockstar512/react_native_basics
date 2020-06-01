import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen"
import ComponentsScreen from "./src/screens/ComponentsScreen"
import ImageScreen from './src/screens/ImageScreen'
import Counter from './src/screens/Counter'
import RandomColorGen from './src/screens/RandomColorGen'
import SquareScreen from './src/screens/SquareScreens'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Count:Counter,
    Color:RandomColorGen,
    Square: SquareScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "pineapples"
      
    }
  }
);

export default createAppContainer(navigator);
