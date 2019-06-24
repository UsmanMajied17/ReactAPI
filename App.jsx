import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import showDogImage from './showDogImage';

class App extends Component {
constructor() {
  super();
  this.state = {
    names: {},
    breed: ''
  }

}

displaybreed(breed) {
  this.setState( {
    breed: breed
  })
  console.log('this.state.breed',this.state)
}
componentDidMount() {
  axios.get('https://dog.ceo/api/breeds/list/all').then(res => {
    console.log(res.data.message)
    let names = res.data.message;
    this.setState({names})
  })
  .catch(error => {
    console.log(error);
  });

}

  render () {
    return (
      <div>
        <h2 id="heading" style = {{textAlign: 'center', color: 'Blue'}}> Hello, Choose a Breed to View its Images</h2>
      <ul>

        {Object.keys(this.state.names).map(breed=>{
          return <div>
            <Link to = {{ pathname: `/showDogImage/${breed}`, state: {breed}}}>
            <li>{breed}</li> </Link>
              </div>
      })

    }
      </ul>

      </div>
    )



  }
}
export default App;
