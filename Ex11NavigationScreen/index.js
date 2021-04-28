/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './Main';

// StackNavigator 연습
AppRegistry.registerComponent(appName, () => Main);
