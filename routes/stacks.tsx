import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAccountScreen from '../screens/createaccount';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import SettingsScreen from '../screens/settings';

const screens = {
  Login: {
    screen: LoginScreen
  },
  CreateAccount: {
    screen: createAccountScreen
  },
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack)