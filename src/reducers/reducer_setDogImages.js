import {DISPLAY_DOG_IMAGES} from '../constants';

export default (state = [], action) => {

    switch (action.type) {
        case DISPLAY_DOG_IMAGES:
            const {dogImage} = action;
            return dogImage;
        default:
            return state;
    }
}