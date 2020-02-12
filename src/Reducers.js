import { 
        INCREMENT,
        DECREMENT,
        RESET
}  from "./Actions";
// our ideal/default state is just a number 
// 0
// -1

// state is yor bank balance, action is your transactiuon

export function count(state=0, action) {
    let newState = state;
    switch(action.type) {
        case INCREMENT:
            // increment!
            newState += 1;
            break;
        case DECREMENT:
            //decrement
            newState -= 1;
            break;
        case RESET:
            // reset to 0
            newState = 0;
            break;
        default:
            break;
    }
    return newState;
}
