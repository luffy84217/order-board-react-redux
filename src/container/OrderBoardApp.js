import FILTER_TYPE from '../constants/filterType';
import { connect } from 'react-redux';
import {
    toggleOrder,
    toggleAllOrder,
    addOrder,
    removeOrder,
    removeAllOrder,
    setVisibilityFilter,
    edit,
    setLanguage
} from '../actions';
import OrderApp from '../components/OrderBoard';
import { $$ } from '../utils';

const getVisibleOrders = (orders, filter) => {
    switch (filter) {
        case FILTER_TYPE.SHOW_ALL:
            return orders;
        case FILTER_TYPE.SHOW_COMPLETED:
            return orders.filter(t => t.completed);
        case FILTER_TYPE.SHOW_ACTIVE:
            return orders.filter(t => !t.completed);
    }
};

const mapStateToProps = state => {
    return {
        orders: getVisibleOrders(state.orders, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter,
        completedCount: state.orders.reduce((a, t) => a + (t.completed ? 1 : 0), 0),
        orderCount: state.orders.reduce((a, t) => a + (t.completed ? 0 : 1), 0),
        lang: state.lang
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleToggleClick: id => {
            dispatch(toggleOrder(id));
        },
        handleAddOrderKeyDown: event => {
            const KEY_ENTER = 13;
            const name = $$('.new-order')[0].value;
            const price = $$('.new-order')[1].value;
            const desc = $$('.new-order')[2].value;
            
            if (event.keyCode === KEY_ENTER && name && price) {
                if (!Number.isNaN(+price)) {
                    dispatch(addOrder(name, price, desc));
                    $$('.new-order')[0].value = '';
                    $$('.new-order')[1].value = '';
                    $$('.new-order')[2].value = '';
                } else {
                    alert('Please type number value instead of characters.');
                }
            }

            return;
        },
        handleDestroyClick: id => {
            dispatch(removeOrder(id));
        },
        handleShowClick: filter => {
            dispatch(setVisibilityFilter(filter));
        },
        handleClearCompletedClick: () => {
            dispatch(removeAllOrder());
        },
        handleToggleAllOrderClick: () => {
            dispatch(toggleAllOrder());
        },
        handleEditDBClick: event => {
            event.target.parentElement.parentElement.classList.add('editing');
            event.target.parentElement.nextSibling.focus();
        },
        handleEditingKeyDown: (id, type, event) => {
            const KEY_ENTER = 13;
            const KEY_ESC = 27;
            const li = event.target.parentElement.classList;
            const val = event.target.value;
            
            if (event.keyCode === KEY_ESC) {
                li.remove('editing');
            }

            if (event.keyCode === KEY_ENTER && val) {
                if (type === 'price' && Number.isNaN(+val)) {
                    alert('Please type number value instead of characters.');
                    return;
                } 
                dispatch(edit(id, type, event.target.value));
                li.remove('editing');
            }
        },
        handleEditingBlur: event => {
            event.target.parentElement.classList.remove('editing');
        },
        handleLangChange: event => {
            dispatch(setLanguage(event.target.value));
        }
    };
};

const OrderAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderApp);

export default OrderAppContainer