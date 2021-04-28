/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './Main';
import MainDrawer from './MainDrawer';
import MainMaterialTopTab from './MainMaterialTopTab';

// BottomTabNavigator를 보여주는 Main컴포넌트 등록
// AppRegistry.registerComponent(appName, () => Main);

// MaterialTopTabNaivagor를 보여주는 컴포넌트 등록
// AppRegistry.registerComponent(appName, () => MainMaterialTopTab);

// DrawerNavigator를 보여주는 컴포넌트 등록
AppRegistry.registerComponent(appName, () => MainDrawer);

