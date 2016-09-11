![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked: Going Native with React [ Step 4 ]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Install Redux related dependencies, and import the create store function
1. Import the `Provider` HOC from `react-redux`, wrap our `Navigator` component, and create our Redux store
1. Connect the `StartScreen` component to the Redux store
1. Wire up the Login component to use Redux

# ReHacked

## Goal 1: Install Redux related dependencies, and import the create store function

### Explanation

* In this step, we will install `react-redux` as a dependency.  
* Next, we will install the `rehacked-common` repository as a dependency. This repo contains our shared Redux and fetch logic.
* Last, we will import the `createStore` function from `rehacked-common`.

### Instructions

1. Open a terminal window in the root of the project, and run `npm i react-redux https://github.com/reactjstampabay/rehacked-common --save`
1. Edit `/RehackedNative/index.ios.js`, and import the `createStore` function.
```javascript
import createStore from 'rehacked-common/lib/store';
```

## Goal 2: Import the `Provider` HOC from `react-redux`, wrap our `Navigator` component, and create our Redux store

### Explanation

* In this step, we will wrap the root component with `<Provider>`.  This will make the Redux store available to the `connect()` calls in the component hierarchy (same concept as React web).
* We will also create our Redux store, and pass that as an attribute to the `<Provider>` HOC.

### Instructions

1. Replace the contents of `/RehackedNative/index.ios.js` with [`/RehackedNative/index.ios.js`](https://raw.githubusercontent.com/reactjstampabay/RehackedNative/step-4/index.ios.js)
1. Commit locally and compare the differences

## Goal 3: Connect the `StartScreen` component to the Redux store

### Explanation

* In this step, we will import `connect` from `react-redux`, and connect the StartScreen component to the Redux store.

### Instructions

1. Modify the contents of `/src/containers/StartScreen/index.ios.js` with [replace me]()

## Goal 4: Wire up the Login component to use Redux

### Explanation

* In this step, we will wire up the Login component to use Redux.  This will allow us to login and store the returned profile in our Redux store.

### Instructions

1. 

[Back to Step 3](https://github.com/reactjstampabay/RehackedNative/tree/step-3) | [Continue to Step 5](https://github.com/reactjstampabay/RehackedNative/tree/step-5)
