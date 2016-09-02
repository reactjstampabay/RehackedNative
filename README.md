![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked: Going Native with React [ Step 3 ]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Add a Login component

# ReHacked

## Goal 1: Add a Login component

### Explanation

* In this step, we will add a Login component to allow users to login with their email. We will use the same [API](https://github.com/reactjstampabay/rehacked-spa-basics-api) as our previous labs.

### Instructions

1. Replace the contents of `/StartScreen/index.ios.js` with the following:
```javascript
import React from 'react';
import Login from './Login';

export default () => {
  return (
    <Login/>
  );
}
```
- If you are wondering why the StartScreen is simply returning the Login component - this will allow us to expand the StartScreen at a later time and add a SignUp component with some cool transition animation.

[Back to Step 2](https://github.com/reactjstampabay/RehackedNative/tree/step-2) | [Continue to Step 4](https://github.com/reactjstampabay/RehackedNative/tree/step-4)
