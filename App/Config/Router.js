import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../Screens/Home';
import ValidateScreen from '../Screens/Validate';
import ProspectsScreen from '../Screens/Prospects';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Validate: {
      screen: ValidateScreen,
    },
    Prospects: {screen: ProspectsScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: false,
    },

    tabBarVisible: false,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
