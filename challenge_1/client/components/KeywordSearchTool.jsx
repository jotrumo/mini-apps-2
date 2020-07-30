import React from 'react';

var KeywordSearchTool = (props) => {

  return(
    <form onSubmit={props.handleSubmit}>
      <label>Enter Keyword: <input onChange={props.handleKeyword}></input></label>
      <button>Submit Entry</button>
    </form>
  )
}

export default KeywordSearchTool;