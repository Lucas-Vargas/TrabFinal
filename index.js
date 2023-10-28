/**
 * @format
 */

import {AppRegistry} from 'react-native';
import telaHome from './src/layouts/home';
import telaLogin from './src/layouts/telaLogin';
import {name as appName} from './app.json';
import HomeNavigator from './src/scripsts/HomeNavigator';
import TelaCadastro from './src/layouts/cadastro';
import App from './src/layouts/app';

AppRegistry.registerComponent(appName, () => App);
