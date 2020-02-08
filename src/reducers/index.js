import { combineReducers } from 'redux';
import orders from './orders';
import visibilityFilter from './visibilityFilter';
import lang from './lang';

const orderReducer = combineReducers({
    orders,
    visibilityFilter,
    lang
})

export default orderReducer