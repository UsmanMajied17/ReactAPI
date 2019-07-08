import { DISPLAY_DOG_IMAGES, DISPLAY_DOG_NAMES } from '../constants';
import axios from 'axios';

export function setDogNamesSuccess() {
    return dispatch => {axios.get('https://dog.ceo/api/breeds/list/all').then(res => {
        console.log(res.data.message)
        let names = res.data.message;
        //this.setState({ names })
        dispatch(setDogName(names));
    })
        .catch(error => {
            console.log(error);
        });

    };
}

export function setDogName(names) {
    const action = {
        type: DISPLAY_DOG_NAMES,
        names
    }
    return action;
}



export function setDogImagesSuccess(breed) {

   return dispatch => { axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => {
      console.log('image', res.data.message)
      let dogImage = res.data.message
      //this.setState({dogImage})
      dispatch(setDogImages(dogImage));
    }).catch(error => {
      console.log(error)
    });
}
}
export function setDogImages(dogImage) {
    const action = {
        type: DISPLAY_DOG_IMAGES,
        dogImage
    }
    return action;
}