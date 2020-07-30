import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ChartDisplay from './ChartDisplay.jsx';

const MainWrapper = styled.div`
  height: 100vh;
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 900;
  font-size: 30px;
`;

const Title = styled.div`
  position: absolute;
  color: black;
  font-weight: 900px;
  font-size: 40px;
  top: 60px;
  left: 150px;
`;

const ChartWrapper = styled.div`
  top: 150px;
  left: 275px;
  width: 80%;
  height: auto;
  position: absolute;
  background: #f4f4f4;
`;

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
        <MainWrapper>
          <Title>CoinSpy</Title>
          <ChartWrapper>
            <ChartDisplay data={this.state.bpi}/>
          </ChartWrapper>
        </MainWrapper>
      )
    } else {
      return (
        null
      )
    }
  }
}

export default App;