import { DISPLAY_DOG_NAMES } from '../constants';


export default (state = {}, action) => {

    switch (action.type) {
        case DISPLAY_DOG_NAMES:
            const {names} = action;
            return names;
        default:
            return state;
    }
}