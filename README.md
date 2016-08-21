![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked: Going Native with React [ Step 2 ]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Build a StartScreen component
1. Add iOS specific navigation
1. Debug our app in chrome

# ReHacked

## Goal 1: Build a StartScreen component

### Explanation

* In this step we will create our StartScreen and Login components following the same project structure as our last lab, [rehacked-redux-basics](https://github.com/reactjstampabay/rehacked-redux-basics)

### Instructions

1. Create `src/containers` directory in the root of our project
1. Create a `StartScreen` directory under `containers`
1. Create `index.ios.js` under the `StartScreen` directory
  - Naming our files with `.ios` or `.android` allows us to build Platform specific components ([Platform Specific Code](https://facebook.github.io/react-native/docs/platform-specific-code.html))
1. In your editor of choice (WebStorm, Atom, etc.), copy/paste the following into `StartScreen/index.ios.js`
```javascript
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to ReHacked Native iOS!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
```

## Goal 2: Add iOS specific navigation

### Explanation

* In this step we will create iOS specific navigation using [NavigatorIOS](https://facebook.github.io/react-native/docs/navigatorios.html)

### Instructions

1. Edit `{project_root}/index.ios.js`
1. Replace the contents with the following: 
```javascript
import React from 'react';
import {NavigatorIOS, AppRegistry} from 'react-native';
import StartScreen from './src/containers/StartScreen';

export default RehackedNative = () => {
  return (
    <NavigatorIOS
      initialRoute={{
        component: StartScreen,
        title: 'ReHacked Native!'
      }}
      navigationBarHidden={false}
      style={{flex: 1}}
    />
  );
}

AppRegistry.registerComponent('RehackedNative', () => RehackedNative);
```

[Back to Step 1](https://github.com/reactjstampabay/RehackedNative/tree/step-1) | [Continue to Step 3](https://github.com/reactjstampabay/RehackedNative/tree/step-3)
