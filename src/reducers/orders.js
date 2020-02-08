import ACTION_TYPE from '../constants/actionType';

const order = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPE.ORDER.ADD_ORDER:
            return {
                id: action.id,
                createdTime: action.createdTime,
                name: action.name,
                price: action.price,
                desc: action.desc,
                completed: false
            };
        case ACTION_TYPE.ORDER.TOGGLE_ORDER:
            if (state.id !== action.id) {
                return state
            }

            return {...state, completed: !state.completed};

        default:
            return state;
    }
}

const orders = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPE.ORDER.ADD_ORDER:
            return [
                ...state,
                order(undefined, action)
            ];
        case ACTION_TYPE.ORDERS.REMOVE_ORDER:
            return state.filter(t => t.id !== action.id);
        case ACTION_TYPE.ORDERS.REMOVE_ALL_ORDER:
            return state.filter(t => !t.completed);
        case ACTION_TYPE.ORDER.TOGGLE_ORDER:
            return state.map(t => order(t, action));
        case ACTION_TYPE.ORDERS.TOGGLE_ALL_ORDER:
            return state.map(t => ({...t, completed: !t.completed}));
        case ACTION_TYPE.ORDERS.EDIT:
            return state.map(t => {
                if (t.id === action.id) {
                    switch (action.item) {
                        case 'name':
                            return {...t, name: action.name};
                        case 'price':
                            return {...t, price: action.price};
                        case 'desc':
                            return {...t, desc: action.desc};
                    }
                }
                return t;
            });
        case ACTION_TYPE.FETCH.ORDERS_RECEIVED:
            return action.orders;
        default:
            return state;
    }
}

export default orders