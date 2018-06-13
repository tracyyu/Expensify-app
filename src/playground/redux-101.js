import { createStore } from 'redux';

//Action generators = functions that return action objects

// const add = ({ a, b}, c) => {
//     return a + b + c;
// };
//console.log(add({ a:1, b:2 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
    });


const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

 const setCount = ({count} = {}) => ({
    type: 'SET',
    count
 });

 const resetCount = () => ({
     type: 'RESET'
 });

 // Reducers
 // 1. Reducers are pure functions --> output only determined by input
 //                                 --> doesnt use anything outside the func
 // 2. Never change state or action directly

 const countReducer = (state = { count: 0 }, action ) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state;
    }
};

const store = createStore(countReducer);


//function passed in gets called every time the store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// action is a way with communicating with the store
// how do increment or change the count?
// Actions - nothing more than an object that gets sent to the store
// increment, decrement, reset
// I like to increment the count

// store.dispatch({ 
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));