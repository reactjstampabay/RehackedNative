![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked: Going Native with React [ Step 4 ]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Install Redux related dependencies, and import the create store function.
1. Import the `Provider` HOC from `react-redux`, wrap our `Navigator` component, and create our Redux store.

# ReHacked

## Goal 1: Install Redux related dependencies, and import the create store function.

### Explanation

* In this step, we will install `react-redux` so we can use the `Provider` HOC.  
* Next, we will install the `rehacked-common` repository as a dependency. This repo contains our shared Redux and fetch logic.
* Last, we will import the `createStore` function from `rehacked-common`.

### Instructions

1. Open a terminal window in the root of the project, and run `npm i react-redux https://github.com/reactjstampabay/rehacked-common --save`
1. Edit `/RehackedNative/index.ios.js`, and import the `createStore` function.
```javascript
import createStore from 'rehacked-common/lib/store';
```

# ReHacked

## Goal 2: Import the `Provider` HOC from `react-redux`, wrap our `Navigator` component, and create our Redux store.

### Explanation

* In this step, we will wrap the root component with `<Provider>`.  This will make the Redux store available to the `connect()` calls in the component hierarchy (same concept as React web).
* We will also create our Redux store, and pass that as an attribute to the `<Provider>` HOC.

### Instructions

1. Edit `/RehackedNative/index.ios.js` and paste the following code:
```javascript
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
```

[Back to Step 3](https://github.com/reactjstampabay/RehackedNative/tree/step-3) | [Continue to Step 5](https://github.com/reactjstampabay/RehackedNative/tree/step-5)
