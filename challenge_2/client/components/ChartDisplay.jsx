import React from 'react';
import {Line} from 'react-chartjs-2';

class ChartDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      chartState: {
        labels: [],
        datasets: [
          {
            label: 'Price',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [],
          }
        ],
      }
    }

    this.getData = this.getData.bind(this);
  }

  getData(pData) {
    let result = {
      labels: [],
      data: [],
    }

    for (let key in pData) {
      result.labels.push(key)
      result.data.push(pData[key])
    }
    return result;
  }

  componentDidMount() {
    console.log("CHART", this.props.data)
    let data = this.getData(this.props.data.bpi)
    this.setState({
      chartState: {
        labels: data.labels,
        datasets: [
          {
            label: 'Price',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: data.data,
          }
        ],
      },
      isLoaded: true,
    })
  }

  render() {
    if (this.state.isLoaded) {
      console.log("CHART: ", this.state.data)
      return (
        <div>
          <Line
            data={this.state.chartState}
            options={{
              title:{
                display:true,
                text:'Bitcoin Price Index (BPI)',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
       </div>
      )
    } else {
      return(
        null
      )
    }
  }
}


export default ChartDisplay;