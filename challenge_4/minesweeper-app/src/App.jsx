import React from 'react';
import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Minesweeper</h1>
        <Board/>
      </div>
    );
  };
};

export default App;
