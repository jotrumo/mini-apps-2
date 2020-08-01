import React from 'react';
import BoardTile from './BoardTile.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Board</h2>
        <BoardTile/>
      </div>
    );
  };
};

export default Board;