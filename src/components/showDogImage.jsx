import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDogImagesSuccess } from '../actions';

class showDogImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImage: []
    }
  }

  componentDidMount() {
    const { breed } = this.props.location.state
    this.props.setDogImagesSuccess(breed); //calling the thunked function
  }

  componentWillReceiveProps(NextProps) {
    if (this.props.dogImage !== NextProps.dogImage) {
      this.setState({
        dogImage: NextProps.dogImage
      })
    }
  }
  render() {

    return (
      <div>
        <ul>
          {this.state.dogImage.map(img => {
            return <img src={img} border="5" style={{ width: '150px', height: '150px', margin: '5px' }} ></img>
          })

          }
        </ul>

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { dogImage } = state;
  return {
    dogImage
  }
}
export default connect(mapStateToProps, { setDogImagesSuccess })(showDogImage);
