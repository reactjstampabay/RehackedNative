![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked: Going Native with React [ Step 2 ]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Build a StartScreen component
1. Add navigation with the `Navigator` component
1. Enable Live Reload and Debug JS

# ReHacked

## Goal 1: Build a StartScreen component

### Explanation

* In this step we will create our StartScreen and Login components following the same project structure as our last lab, [rehacked-redux-basics](https://github.com/reactjstampabay/rehacked-redux-basics)

### Instructions

1. Create `src/containers` directory in the root of our project
1. Create a `StartScreen` directory under `containers`
1. Create `index.ios.js` under the `StartScreen` directory
  - Naming our files with `.ios` or `.android` allows us to build [Platform Specific Code](https://facebook.github.io/react-native/docs/platform-specific-code.html)
1. In your editor of choice (WebStorm, Atom, etc.), copy/paste the following into `StartScreen/index.ios.js`
```javascript
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to ReHacked Native!
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

## Goal 2: Add navigation with the `Navigator` component

### Explanation

* In this step we will add navigation using [Navigator](https://facebook.github.io/react-native/docs/navigator.html). Navigator is implemented in JavaScript and is available on both iOS and Android.

### Instructions

1. Edit `/RehackedNative/index.ios.js`, and replace the contents with [`/RehackedNative/index.ios.js`](https://raw.githubusercontent.com/reactjstampabay/RehackedNative/step-2/index.ios.js)
1. Open the simulator, and press `⌘ + R` to reload

## Goal 3: Enable Live Reload and Debug JS

### Explanation

* In this step we will demonstrate React Native's Live Reload feature

### Instructions
1. In the iOS simulator, press `⌘ + D` to open the dev menu
1. Select the `Enable Live Reload` menu option
1. Open the dev menu, and select `Debug JS Remotely`
1. Edit `/src/containers/StartScreen/index.ios.js`, and change the _welcome text_ to **Welcome to ReHacked Native Lab!**
1. Save, and notice the text is updated in the simulator without having to press `⌘ + R`

[Back to Step 1](https://github.com/reactjstampabay/RehackedNative/tree/step-1) | [Continue to Step 3](https://github.com/reactjstampabay/RehackedNative/tree/step-3)
