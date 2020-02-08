import langs from "../constants/lang";
import ACTION_TYPE from '../constants/actionType';

const lang = (state = langs[0].value, action) => {
    switch (action.type) {
        case ACTION_TYPE.LANG.SET_LANGUAGE:
            return action.lang
        default:
            return state;
    }
};

export default lang;