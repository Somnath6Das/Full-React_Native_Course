/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import App1 from './src/App1';
import Images from './src/Images';
import {name as appName} from './app.json';
import ScrollViewComp from './src/ScrollViewComp';
import ButtonComp from './src/BottonComp';
import PressableComp from './src/PressableComp';
import ModalComp from './src/ModalComp';
import StatusBarComp from './src/StatusBarComp';
import ActivityIndicatorComp from './src/ActivityIndicatorComp';
import AlertComp from './src/AlertComp';
import CustomMain from './src/components/custom/CustomMain';
import StyleSheetComp from './src/components/styleComp/StyleSheetComp';
import Multistyle from './src/components/mutiStyleComp/Multistyle';
import MainBox from './src/components/FlexLayout/MainBox';
import MainRelativeAbsolute from './src/components/FlexLayout/MainRelativeAbsolute';
import MainResponsive from './src/ResponsiveUI/MainResponsive';
import MainResponsiveOne from './src/ResponsiveUI/MainResponsiveOne';
import SafeAreaViewComp from './src/ResponsiveUI/SafeAreaViewComp';

AppRegistry.registerComponent(appName, () => SafeAreaViewComp);
