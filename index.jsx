import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { $, getElement, save } from './src/utils';
import OrderBoardApp from './src/container/OrderBoardApp';
import reducer from './src/reducers/index';
import fetchOrders from './src/sagas/index';
import './src/style.css';

if (process.env.NODE_ENV !== 'production') {
    console.info('Looks like we are in development mode!');
}

const sagaMiddleware = createSagaMiddleware();
const storage = localStorage.getItem('order-board');
const store = storage ? 
    createStore(reducer, JSON.parse(storage), applyMiddleware(sagaMiddleware)) :
    createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchOrders);

getElement('div', 'root')
    .then(element => {
        $('div.order-board').appendChild(element);

        ReactDOM.render(
            <Provider store={store}>
                <OrderBoardApp />
            </Provider>,
            $('#root')
        );

        const unsubscribe = store.subscribe(() => {
            save('order-board', store.getState());
            console.log(store.getState());
        });
    });
