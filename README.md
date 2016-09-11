![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked: Going Native with React [ Step 5 ]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Convert StartScreen to a class that extends _Component_
1. Add a Tabbed Dashboard component

# ReHacked

## Goal 1: Convert StartScreen to a class that extends _Component_

### Explanation

* In this step, we will convert `StartScreen` to a class that extends *_Component_*, so we can hook into React's lifecycle events. This is where we will check for state mutations and navigate to the `Dashboard` when appropriate.
* You will notice that we previously handled _web_ routing in the Redux layer using [`react-router-redux`](https://github.com/reactjs/react-router-redux). We will not be covering _native_ navigation via Redux during this lab, so we can clearly demonstrate how to navigate within the React Native context.
* If Redux was handling our navigation, it would not be necessary to hook into the _componentWillReceiveProps_ lifecycle event.

### Instructions

1. Replace the contents of `/src/containers/StartScreen/index.ios.js` with [`/src/containers/StartScreen/index.ios.js`](https://github.com/reactjstampabay/RehackedNative/blob/step-5/src/containers/StartScreen/index.ios.js)

## Goal 2: Add a Tabbed Dashboard component

### Explanation

* In this step, we will add a tabbed Dashboard component for authenticated users.

### Instructions

1. Create a `Dashboard` folder under `containers`
1. Create an empty `index.ios.js` file in the new `Dashboard` directory
1. 

[Back to Step 4](https://github.com/reactjstampabay/RehackedNative/tree/step-4) | [Continue to Step 6](https://github.com/reactjstampabay/RehackedNative/tree/step-6)
