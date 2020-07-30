import React from 'react';
import ReactPaginate from 'react-paginate';
import DataCell from './DataCell.jsx';

window.React = React;

class SearchResults extends React.Component {
  constructor(props) {
    super (props)
  }

  let Results = props.results.map((data, index) => (
    <DataCell key={index} data={data}/>
  ))

  return(
    <ul>{Results}</ul>
  )
}

export default SearchResults;