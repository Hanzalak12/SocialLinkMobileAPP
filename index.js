/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Introduction} from './src/app/containers/Intro/IntroductionPage';
import {Login} from './src/app/containers/Login/Login';
import {Payment} from './src/app/containers/paymentPage/payment';
import {MyProfile} from './src/app/containers/Profile/profile';
import {Social} from './src/app/containers/SocialLinks/Social';
import {Favorite} from './src/app/containers/Favorite/Favorite';
import {DOB} from './src/app/containers/DOB/DOB';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Payment);
