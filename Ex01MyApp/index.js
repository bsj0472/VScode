/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';

//AppRegistry : 첫번째 실행될 컴포넌트(화면구성요소)를 등록
// AppRegistry.registerComponent(appName, () => App);

//첫번째 실행된 컴포넌트를 내가 만든 MyApp으로 등록
AppRegistry.registerComponent(appName, () => MyApp);
