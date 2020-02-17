/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import {Introduction} from './src/app/containers/Intro/IntroductionPage';
// import {Login} from './src/app/containers/Login/Login';
// import {MyProfile} from './src/app/containers/Profile/profile';
import {Favorite} from './src/app/containers/Favorite/Favorite';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Favorite);
