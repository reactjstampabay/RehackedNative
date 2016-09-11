import React from 'react';
import {Navigator, AppRegistry} from 'react-native';
import StartScreen from './src/containers/StartScreen';

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
    <Navigator
      style={{flex: 1}}
      title="ReHacked Native"
      renderScene={renderScene}
      configureScene={configureScene}
      initialRoute={{
        component: StartScreen, title: 'ReHacked Native Title!'
      }}>
    </Navigator>
  );
}

AppRegistry.registerComponent('RehackedNative', () => RehackedNative);
