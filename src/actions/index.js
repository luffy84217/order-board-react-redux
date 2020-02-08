import ACTION_TYPE from '../constants/actionType';
import { uuid } from '../utils';

export const addOrder = (name, price, desc) => {
    return {
        type: ACTION_TYPE.ORDER.ADD_ORDER,
        id: uuid(),
        createdTime: new Date().getTime(),
        name,
        price,
        desc
    };
};

export const toggleOrder = id => {
    return {
        type: ACTION_TYPE.ORDER.TOGGLE_ORDER,
        id
    };
};

export const removeOrder = id => {
    return {
        type: ACTION_TYPE.ORDERS.REMOVE_ORDER,
        id
    };
};

export const removeAllOrder = () => {
    return {
        type: ACTION_TYPE.ORDERS.TOGGLE_ALL_ORDER
    };
}

export const toggleAllOrder = () => {
    return {
        type: ACTION_TYPE.ORDERS.TOGGLE_ALL_ORDER
    };
};

export const edit = (id, item, payload) => {
    switch (item) {
        case 'name':
            return {
                type: ACTION_TYPE.ORDERS.EDIT,
                id,
                item,
                name: payload
            };
        case 'price':
            return {
                type: ACTION_TYPE.ORDERS.EDIT,
                id,
                item,
                price: payload
            };
        case 'desc':
            return {
                type: ACTION_TYPE.ORDERS.EDIT,
                id,
                item,
                desc: payload
            };
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: ACTION_TYPE.VISIBILITY_FILTER.SET_VISIBILITY_FILTER,
        filter
    };
};

export const setLanguage = lang => {
    return {
        type: ACTION_TYPE.LANG.SET_LANGUAGE,
        lang
    };
};