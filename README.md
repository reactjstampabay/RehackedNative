![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked: Going Native with React [ Step 6 ]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Add the Camera dependency
1. Enhance the Camera component
1. Debug on an iOS Device

# ReHacked

## Goal 1: Add the Camera dependency

### Explanation

* In this step, we will add the [`react-native-camera`](https://github.com/lwansbrough/react-native-camera) dependency

### Instructions

1. In a termianl window at the root of the project, run the following to install the camera dependency, `npm i react-native-camera@https://github.com/lwansbrough/react-native-camera.git --save`
 * We are installing from the GitHub repo vs npm to ensure we are using the latest goodness.
1. Run the following `react-native link react-native-camera` to automatically link the camera to the native platforms
 * More information on [Linking Libraries](https://facebook.github.io/react-native/docs/linking-libraries-ios.html)
1. Stop and restart the `React Packager`

## Goal 2: Enhance the Camera component

### Expanation

* In this step, we will build out our Camera component

### Instructions

1. Replace the contents of `/src/containers/Dashboard/Camera.ios.js` with [`/src/containers/Dashboard/Camera.ios.js`](https://raw.githubusercontent.com/reactjstampabay/RehackedNative/step-6/src/containers/Dashboard/Camera.ios.js)
1. Commit locally and compare differences

## Goal 3: Debug on an iOS Device

### Explanation

* In this step, we will demonstrate how to debug the app on an iOS Device.
* Assumptions
  * An _iOS Provisioning Profile_ and _Certificate_ have been created for Development.  We won't be covering these topics during the lab, but are more than happy to help out offline (ping us on Slack).
  * The `Team` (under _General_ -> _Identity_) is properly set to the correct _Apple Developer_ account
* When cloning this repo and running locally, you will most likely be prompted to enter your _Apple Developer_ credentials during this step.

### Instructions

1. Stop the `React Packager` that is running the simulator
1. Open Xcode and ensure the `RehackedNative` project is selected in the project selector
1. Ensure your device is selected in the device selector
1. Click on the `Build and Run` button

[Back to Step 5](https://github.com/reactjstampabay/RehackedNative/tree/step-5)
