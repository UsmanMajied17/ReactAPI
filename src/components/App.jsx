import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDogNamesSuccess } from '../actions';


class App extends Component {
  constructor() {
    super();
    this.state = {
      names: {},
      breed: ''
    }

  }

  displaybreed(breed) {
    this.setState({
      breed
    })
    console.log('this.state.breed', this.state)
  }
  componentDidMount() {
    this.props.setDogNamesSuccess(); //calling the thunked-function
  }

  componentWillReceiveProps(NextProps) {
    if (this.props.names !== NextProps.names) {
      this.setState({
        names: NextProps.names
      })
    }
  }
  render() {
    return (
      <div>
        <h2 id="heading" style={{ textAlign: 'center', color: 'Blue' }}> Hello, Choose a Breed to View its Images</h2>
        <ul>

          {Object.keys(this.state.names).map(breed => {
            return <div style={{ textAlign: 'center' }}>
              <Link to={{ pathname: `/showDogImage/${breed}`, state: { breed } }}>
                {breed} 
              </Link>
            </div>
          })

          }
        </ul>

      </div>
    )



  }
}

function mapStateToProps(state) {
  const { names } = state;
  return {
    names
  }
}
export default connect(mapStateToProps, { setDogNamesSuccess })(App);
