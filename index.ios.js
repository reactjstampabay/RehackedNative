import React from 'react';
import {NavigatorIOS, AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import createStore from 'rehacked-common/lib/store';

import StartScreen from './src/containers/StartScreen';

/**
 * create Redux store
 */
const store = createStore();

export default RehackedNative = () => {
  return (
    <Provider store={store}>
      <NavigatorIOS
        initialRoute={{
          component: StartScreen,
          title: 'ReHacked Native Title!'
        }}
        navigationBarHidden={true}
        style={{flex: 1}}
      />
    </Provider>
  );
}

AppRegistry.registerComponent('RehackedNative', () => RehackedNative);
