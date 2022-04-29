import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Square extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return(
      <button className='square' onClick={function() { console.log('click'); }}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i){
    return <Square value={i} />;
  }
  render(){
    const status = 'Siguiente Jugador X'

    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component{
  render(){
    return(
      <div className="game">
        <div className="game-borad">
          <Board />
        </div>
        <div className="game-Info">
          <div>{/* status */}</div>
          <ol>{/* Todo */}</ol>
        </div>
      </div>
    );
  }
}
//**********************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
