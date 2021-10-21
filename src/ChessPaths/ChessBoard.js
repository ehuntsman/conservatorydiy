import React from 'react'
import chess from '../img/chess.jpg';
import { Link } from 'react-router-dom';

export default class ChessBoard extends React.Component {
  state = {
    choose: false,
    pawn: false,
  }

  selectPawn = () => {
    this.setState({
    choose: true,
    pawn: true
    })
  }

  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Chess Gardens</h1>
        <img className="headerimg" src={chess} alt="Swamp Border" />
        <h2>What {user} sees</h2>
        <p>The lawn spreads out in front of {user} with a checkered board large and in the center of the field. Chess figures, over 10 feet tall, lay over the squares. It appears as if someone - or something - is in the middle of a game.</p>
        {!this.state.choose ?
          <div>
            <h2>Select your piece</h2>
            <button onClick={() => this.selectPawn()} className="button-list">Go to the pawn</button>
            <Link to='/knight' className="button-list">Go to the Knight</Link>
            <Link to='/queen' className="button-list">Go to the Queen</Link>
            {/* <Link to='/king' className="button-list">Go to the King</Link> */}
          </div>
        :null}
        {this.state.pawn ?
        <div>
          <h2>{user} selects the pawn</h2>
          <p>The moment {user} steps over to the pawn peice, the ground beneath them begins to shake. A rook from across the board rumbles and then rushes across the board straight into the pawn and {user}.</p>
          <Link to='/end'>Well that was unfortunate</Link>
        </div>
        :null}
      </div>
    )
  }
}


