# redux
### a way to handle state in an application using reducers and action creators

___
#### Some definitions

**action** : action is a javascript object(json), which has a ```type``` property specifying the action type and an optional ```payload``` property. ```payload``` is used/discarded depending on action type

**action creator**: a plain old javascript function, which create an action object. which is used by reducers to update the state at global level

**reducer**: reducer is a javascript function, which takes currentState, action as arguments and updates the state globally.

**dispatcher**: dispath is inbuilt feature of redux, which delivers the action to all reducers, reducers then decide whether to act up on or ignore the action.

**store**: store is a central place where we keep our state information

### Points to remember:

while using redux, we cannot directly access the state using dot notation. We should use ```getState()``` method of store object to get all varaibles of state.
We cannot directly alter the state object values directly, instead we should go through reducers using action creators to change state.

Using redux is wonderful and makes the developemnt pretty easier and easily maintainable. But we need to write very much boilerplate code to wireup out app with redux

### pre requisites
```sh
    $ npm install -s redux
```

### How to execute:

```sh
    $ npm start
```

**Disclaimer**: All the examples are inspired from a lecture by stephen girder in udemy