![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked: Going Native with React [ Step 1 ]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Install [Watchman](https://facebook.github.io/watchman/) and [React Native command line interface](https://www.npmjs.com/package/react-native-cli)
1. Initialize our React Native Project
1. Run our iOS App in the simulator
1. Project review

# ReHacked

## Goal 1: Install Watchman and React Native CLI

### Explanation

* **Watchman** is a file watching service we will install with [Homebrew](http://brew.sh/)
* **react-native-cli** allows us to initalize new projects and installs the react native package from npm

### Instructions

1. `brew install watchman`
1. `npm install -g react-native-cli`

## Goal 2: Initialize our React Native Project

### Explanation

* This step will create our baseline iOS and Android apps

### Instructions

1. `react-native init RehackedNative` 
  - answer **yes** to the following ```prompt: Directory RehackedNative already exists. Continue?:  (no) ```
1. `cd RehackedNative`

## Goal 3: Run our iOS App in the simulator

### Explanation

* This step demonstrates one way to run your app - you can also run it directly from within Xcode or [Nuclide](https://nuclide.io/)

### Instructions

1. `react-native run-ios`

## Goal 4: Project review

### Explanation

* Walk through the directories created by the React Native CLI
* Note JS entry point in `index.ios.js`

### Instructions

1. Expand and review the `android` and `ios` directories
2. Discuss [AppRegistry](https://facebook.github.io/react-native/docs/appregistry.html)

`AppRegistry is the JS entry point to running all React Native apps. App root components should register themselves with AppRegistry.registerComponent, then the native system can load the bundle for the app and then actually run the app when it's ready by invoking AppRegistry.runApplication.`

[Back to Initial](https://github.com/reactjstampabay/RehackedNative/tree/initial) | [Continue to Step 2](https://github.com/reactjstampabay/RehackedNative/tree/step-2)
