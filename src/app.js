import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

//stateless functional component
//do not have access to this
//can use props, but not state
//faster and less overhead, no need to manage state
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: -21000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 3000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1950 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
