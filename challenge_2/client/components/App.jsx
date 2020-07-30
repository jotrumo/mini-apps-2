import React from 'react';
import axios from 'axios';
import ChartDisplay from './ChartDisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bpi: {},
      isLoaded: false,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/30_days')
    .then(data => {
      console.log("APP: ", data.data)
      this.setState({
        bpi: data.data,
        isLoaded: true,
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    if (this.state.isLoaded) {
      return(
        <div>
          <h1>CoinSpy</h1>
          <ChartDisplay data={this.state.bpi}/>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}

export default App;