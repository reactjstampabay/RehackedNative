import React from 'react';
import {Navigator, AppRegistry, AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import createStore from 'rehacked-common/lib/store';
import initStorage from 'rehacked-common/lib/initializers/storage';

import StartScreen from './src/containers/StartScreen';

/**
 * create Redux store
 */
const store = createStore();

/**
 * initialize storage
 */
initStorage(global, AsyncStorage);

export default RehackedNative = () => {

  /**
   * Optional function where you can configure scene animations and gestures.
   * Will be invoked with route and routeStack parameters.
   * @param route
   *  current scene being rendered by the Navigator
   * @param routeStack
   *  set of currently mounted routes
   */
  function configureScene(route, routeStack) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }

  /**
   * Required function which renders the scene for a given route.
   * Will be invoked with the route and the navigator object.
   */
  function renderScene(route, nav) {
    if (route.component) {
      // pass navigator and route info
      var props = {navigator: nav, route: route};
      // expose any additional props
      if (route.props) {
        Object.assign(props, route.props);
      }
      return React.createElement(route.component, props);
    }
  }

  return (
    <Provider store={store}>
      <Navigator
        style={{flex: 1}}
        title="ReHacked Native"
        renderScene={renderScene}
        configureScene={configureScene}
        initialRoute={{
          component: StartScreen, title: 'ReHacked Native Title!'
        }}>
      </Navigator>
    </Provider>
  );
}

AppRegistry.registerComponent('RehackedNative', () => RehackedNative);
