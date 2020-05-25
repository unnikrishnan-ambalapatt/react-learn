import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i) {
        return (<Square
            value={this.state.squares[i]}
            onClick={() => { this.handleClick(i) }} />);
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
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

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

/**
 * This Square component was refactored to be a light-weight 'function component'.
 * Retaining the original component for recall value during learing.
 *
 * class Square extends React.Component {

    constructor(props) {
        super(props);

        // Use the below line to bind 'this' to the function if clickBehaviour() is defined
        // as a normal (non-arrow) function. This is because util arrow functions,
        // every new function defined its own 'this' value.

        // From ES7+ (ES2016), this can also be written as (syntactic sugar):
        // this.clickBehaviour = ::this.clickBehaviour

        // The below line is currently redundant as 'clickBehaviour' is an arrow function.

       this.clickBehaviour = this.clickBehaviour.bind(this);
    }

    render() {
        return (
            <button className="square" onClick={this.clickBehaviour}>
                {this.props.value}
            </button>
        );
    }

    clickBehaviour = () => {
        this.props.onClick();
    }
}
*/