![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked: Going Native with React [ Step 3 ]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Ehance the StartScreen component
2. Add a placeholder for the Login component
3. Add `react-native-vector-icons` library
4. Enhance the Login component

# ReHacked

## Goal 1: Ehance the StartScreen component

### Explanation

* In this step, we will enhance the StartScreen component to display our app's Login.

### Instructions

1. Replace the contents of `/StartScreen/index.ios.js` with the following:
```javascript
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Login from './Login';

export default () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.scrollContainer}>
        <View style={styles.splashImageContainer}>
          <Image style={styles.splashImage}
                 source={{uri: "https://facebook.github.io/react/img/logo_og.png"}}/>
        </View>

        <View style={styles.content}>
          <Login/>
        </View>
      </View>
    </View>
  );
}

var windowSize = Dimensions.get('window');
var styles = StyleSheet.create({
  content: {
    backgroundColor: '#384a5b',
    position: 'absolute',
    bottom: 40
  },
  wrapper: {
    backgroundColor: "#384a5b",
    height: windowSize.height
  },
  scrollContainer: {
    width: windowSize.width,
    flex: 1
  },
  splashImageContainer: {
    position: 'absolute'
  },
  splashImage: {
    width: windowSize.width,
    height: windowSize.width === 414 ? 400 : windowSize.width === 375 ? 330 : 255,
  }
});
```

## Goal 2: Add a placeholder for the Login component

### Explanation

* In this step, we will add a placeholder for the Login component.

### Instructions

1. In the `StartScreen` directory, create `Login.ios.js`.
1. Add the following to the Login component:
```javascript
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

export default () => {
  return (
    <View style={styles.loginContent}>
      <Text style={styles.login}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContent: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 60
  },
  login: {
    color: '#fff',
    fontSize: 34
  }
});
```

## Goal 3: Add `react-native-vector-icons` library

### Explanation

* In this step, we will manually install and link the [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) library.  This will allow us to use vector icons from Font-Awesome, Material Design, IonIcons, etc. in our app.

### Instructions

#### Manually Link Icons
1. Open a terminal in the root project directory and run `npm install react-native-vector-icons --save`
  - The react-native cli now includes the ablitity to _install_ and _link_ dependencies. This used to be a separate library named `rnpm`. Some libraries have files that need to be manually added to your iOS and Android projects. Font libraries are a good example of those.
1. Since we are manually adding files, we need to stop the react-native cli.  Open the terminal window running the `React Packager` and press `control + C` to stop the packager. This window can now be closed.
1. Start `Xcode` and open the iOS project located at `{project_path}/RehackedNative/ios/RehackedNative.xcodeproj`
1. Back in your JS IDE, expand the `node_modules/react-native-vector-icons` directory.
1. Drag the `Fonts` directory over to the `RehackedNative` project in `Xcode`,
  - Ensure the `Added folders: Create groups` radio button is selected, and the `Add to Targets: RehackedNative` checkbox is checked
1. In `Xcode`, expand the `Fonts` and `RehackedNative` directories. Click on `RehackedNative/Info.plist`.
1. Right click in `Info.plist`, and select `Add Row`.
1. In the new key, select `Fonts provided by Application` (or UIAppFonts if Xcode won't autocomplete/not using Xcode).
1. Double click in the `value` section, and type the names of the font files we will be using (_Ionicons.ttf_).

#### Adding Native Code
1. In `Xcode`, expand the `Libraries` directory.
1. Back in your JS IDE, expand the `node_modules/react-native-vector-icons` directory. Drag the `RNVectorIcons.xcodeproj` directory under `Libraries` in `Xcode`.
1. In `Xcode`, click on the main `RehackedNative` project file, and select `Build Phases`.
1. Expand the `Link Binary with Libraries` section.
1. In the `Project Navigator`, expand the `Libraries/RNVectorIcons.xcodeproj/Products` directory.
1. Drag the `libRNVectorIcons.a` file over to the frameworks list.

#### Start the React Native CLI
1. In the project terminal window, run `react-native run-ios`.

## Goal 4: Enhance the Login component

### Explanation

* In this step, we will add some TextInputs and a Login button.

### Instructions

1. Replace the contents of `/src/containers/StartScreen/Login.ios.js` with [/src/containers/StartScreen/Login.ios.js](https://raw.githubusercontent.com/reactjstampabay/RehackedNative/step-3/src/containers/StartScreen/Login.ios.js).

[Back to Step 2](https://github.com/reactjstampabay/RehackedNative/tree/step-2) | [Continue to Step 4](https://github.com/reactjstampabay/RehackedNative/tree/step-4)
