import React, {Component} from 'react';
import App from './App';
import axios from 'axios';

class showDogImage extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      dogImage: []
    }
  }


componentDidMount() {
       const { breed } = this.props.location.state
       axios.get(`https://dog.ceo/api/breed/${breed}/images`)
       .then(res => {
         console.log('image', res.data.message)
         let dogImage = res.data.message
         this.setState({dogImage})
       }).catch(error => {
         console.log(error)
       });
  }

  render() {

    return (
      <div>
      <ul>
              {this.state.dogImage.map(img=>{
                  return <img src = {img} style={{width: '150px', height: '150px', margin: '5px'}} ></img>
              })

            }
      </ul>

      </div>
    )
  }
}
export default showDogImage;
