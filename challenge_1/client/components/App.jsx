import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import KeywordSearchTool from './KeywordSearchTool.jsx';
// import SearchResults from './SearchResults.jsx';

window.React = React;

class App extends React.Component {
  constructor(props) {
    super(props)

    App.propTypes = {

    }

    this.state = {
      userName: '',
      keyword: '',
      canSearch: false,
      data: [],
      renderResults: false,
    }

    this.handleKeyword = this.handleKeyword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      userName: 'Joey',
    })
  }

  componentDidUpdate() {

  }

  handleKeyword(e) {
    this.setState({
      keyword: e.target.value,
    }, console.log(this.state.keyword))
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get(`http://localhost:3000/events?q=${this.state.keyword}&_page=10&_limit=10`)
    .then(data => console.log(data))
  }

  render() {
    if (this.state.renderResults === false) {
      return(
        <div>
          <h1>gHistory</h1>
          <KeywordSearchTool handleKeyword={this.handleKeyword} handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
    if (this.state.renderResults === true) {
      return(
        <SearchResults results={this.state.data}/>
      )
    }
  }
}

export default App;