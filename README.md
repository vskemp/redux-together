# Node modules you need:
- `redux`
- `react-redux`


## Conventions (what files to put in your app)

## REDUX

- `actions.js` - action constants and your action creator functions
- `reducers.js` - (or a folder) - import your actions and define reducer functions
- `counterApp.js` - define the store so that React app can use it

## REACT

### DUMB COMPONENET (aka: "Jon Snow components")

- they know nothing about redux
- they accept props!
    - show the props 
    - use props as event handlers
- `components/` - holdsa all your dumb components

### "Smart containers" (aka 'the Iron Man Suit")

- they know all about redux!
    - have access to redux `state`
    - can call the store's `dispatch()`
- they don't know about React
    - they import your dumb components
- they wire togtehr your dumb components and redux's `state` and `dispatch`
    - define `mapStateToProps` function
    - define `mapDispatchToProps` function 