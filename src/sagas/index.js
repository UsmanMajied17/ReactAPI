import { DISPLAY_DOG_IMAGES, DISPLAY_DOG_NAMES, SET_DOG_NAMES_SUCCESS, SET_DOG_IMAGES_SUCCESS } from '../constants';
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../sagas';


function* setDogImagesSuccess(action) {

    console.log("action is",action.dogImage);
    const {breed} = action.dogImage;
    try {
        let dogImage;
       const response =  yield call(function(){ return axios.get(`https://dog.ceo/api/breed/${action.dogImage}/images`);});
            
       const result = response.data.message;
       console.log("result", result)
           
        yield put({ type: SET_DOG_IMAGES_SUCCESS, result })

    } catch (error) {
        console.log(error)
    }

}


export function setDogName(names) {
    console.log(names)
    const action = {
        type: DISPLAY_DOG_NAMES,
        names
    }
    return action;
}


function* setDogNamesSuccess() {
    try {
       
        const response = yield call(function(){
             return  axios.get('https://dog.ceo/api/breeds/list/all');
            });

        const names = response.data.message;
        console.log(names)
        yield put({ type: SET_DOG_NAMES_SUCCESS, names})

    } catch (error) {
        console.log(error)
    }

}

export function setDogImages(dogImage) {
    const action = {
        type: DISPLAY_DOG_IMAGES,
        dogImage
    }
    return action;
}


function* watchseDogNamesSucess() {
    yield takeEvery(DISPLAY_DOG_NAMES, setDogNamesSuccess)
}

function* watchseDogImagesSucess() {
    yield takeEvery(DISPLAY_DOG_IMAGES, setDogImagesSuccess)
}

export default function* rootSaga() {
    yield all([
        watchseDogImagesSucess(),
        watchseDogNamesSucess()
    ])
}