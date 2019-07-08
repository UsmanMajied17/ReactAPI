import {combineReducers} from 'redux';
import names from './reducer_setDogNames';
import dogImage from './reducer_setDogImages';

export default combineReducers({
    names, 
    dogImage
})