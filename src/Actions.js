//actions best practice #2: constants

const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';
const RESET = 'RESET';

// Actions best practice #1: action creator functions

function actionIncremenet() {
    return({
        type: 'INCREMENT' 
    })
}

function actionDecrement() {
    return({
        type: 'DECREMENT'
    })
}

function actionReset() {
    return({
        type: 'RESET'
    })
}
