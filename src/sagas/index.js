import { call, put, takeEvery, all } from 'redux-saga/effects';
import API_PATH from '../constants/apiPath';
import ACTION_TYPE from '../constants/actionType';

function* fetchOrders() {
    try {
        const response = yield call(fetch, API_PATH.ORDERS.GET);

        yield put({ type: ACTION_TYPE.FETCH.ORDERS_RECEIVED, response });
    }
    catch(error) {
        yield put({ type: ACTION_TYPE.FETCH.ORDERS_REQUEST_FAILED, error });
    }
}

function* watchFetchOrders() {
    yield takeEvery('FETCH_ORDERS', fetchOrders);
}

export default function* rootSaga() {
    yield all([
        fetchOrders(),
        watchFetchOrders()
    ])
}