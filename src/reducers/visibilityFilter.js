import ACTION_TYPE from '../constants/actionType';
import FILTER_TYPE from '../constants/filterType';

const visibilityFilter = (state = FILTER_TYPE.SHOW_ALL, action) => {
    switch (action.type) {
        case ACTION_TYPE.VISIBILITY_FILTER.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter