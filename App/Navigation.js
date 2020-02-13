import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Dashboard from '../App/components/Dashboard';
import HomeScreen from '../App/components/Home';
import LoginScreen from '../App/components/Login';
import Signup from '../App/components/Signup';
import InitialLoadingScreen from '../App/screens/InitialLoadingScreen';

const MainStack = createStackNavigator(
  {
    home: {screen: HomeScreen},
    dashboard: {screen: Dashboard},
  },
  {
    initialRouteName: 'home',
  },
);

const AuthStack = createStackNavigator({
  login: {screen: LoginScreen},
  register: {screen: Signup},
});

const Routes = createSwitchNavigator(
  {
    initialLoading: InitialLoadingScreen,
    auth: AuthStack,
    all: MainStack,
  },
  {
    initialRouteName: 'initialLoading',
  },
);

const Navigation = createAppContainer(Routes);

export default Navigation;
