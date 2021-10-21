import React, { Component } from 'react'
import maze from '../img/maze.jpg';
import { Link } from 'react-router-dom';

export default class MazeNorth extends Component {
  state = {
    percDone: false,
    badend: false,
    complete: false,
  }
  fail = () => {
    this.setState({
      badend: true,
      percDone: true
    })
  }
  allGood = () => {
    this.setState({
      complete: true,
      percDone: true
    })
  }
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Garden Maze... still</h1>
        <img className="headerimg" src={maze} alt="Maze" />
        <h2>What {user} sees</h2>
        <p>The hedges seem to move as {user} make their way through them, making it almost impossible to find their way out or even through.</p>
        {!this.state.percDone ?
          <div>
            <h2>Roll Perception</h2>
            <button onClick={() => this.fail()} className="button-list">Rolled a 18 or lower</button>
            <button onClick={() => this.allGood()} className="button-list">Rolled 19+</button>
          </div>
        :null}
        {this.state.badend ?
        <div><p>{user} wanders further and further into the maze, unable to find a direct path.</p><div className="room-list">
        <Link to='/end'>Go further into the maze</Link>
      </div></div> : null}
      {this.state.complete ?
      <div>
        <h2>{user} finds a path that was almost hidden, but it seems to go somewhere.</h2>
        <div className="room-list">
          <Link to='/secretgarden'>Hunch down and go through the hidden passage</Link>
        </div>
      </div>: null}
      </div>
    )
  }
}
