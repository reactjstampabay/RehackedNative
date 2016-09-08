import React from 'react';
import {NavigatorIOS, AppRegistry} from 'react-native';
import StartScreen from './src/containers/StartScreen';

export default RehackedNative = () => {
  return (
    <NavigatorIOS
      initialRoute={{
        component: StartScreen,
        title: 'ReHacked Native Title!'
      }}
      navigationBarHidden={true}
      style={{flex: 1}}
    />
  );
}

AppRegistry.registerComponent('RehackedNative', () => RehackedNative);
