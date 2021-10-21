import React from 'react'
import maze from '../img/maze.jpg';
import { Link } from 'react-router-dom';

export default class GardenMaze extends React.Component {
  state = {
    mentalDone: false,
    complete: false,
    failedMental: false
  }
  
  allGood = () => {
    this.setState({
      complete: true,
      mentalDone: true
    })
  }

  fail = () => {
    this.setState({
      failedMental: true,
      mentalDone: true
    })
  }
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Garden Maze</h1>
        <img className="headerimg" src={maze} alt="Garden Maze" />
        <h2>What {user} sees</h2>
        <p>The hedges are far too tall to see over and too dense to look through. As {user}
         continues to wander, they find themselves easily lost.</p>
         {!this.state.mentalDone ?
          <div>
            <h2>Roll Mental Check</h2>
            <button onClick={() => this.fail()} className="button-list">Rolled a 13 or lower</button>
            <button onClick={() => this.allGood()} className="button-list">Rolled 14+</button>
          </div>
        :null}
        {this.state.failedMental ?
        <div>
        <p>{user} finds a path, but there doesn't seem to be a good feeling about this.</p>
        <h2>Exits</h2>
        <div className="room-list">
          <Link to='/mazenorth'>Go North</Link>
        </div>
      </div>
        :null}
        {this.state.complete ? 
          <div>
            <p>{user} finds two paths.</p>
            <h2>Exits</h2>
            <div className="room-list">
              <Link to='/mazenorth'>Go North</Link>
              <Link to='/mazeeast'>Go East</Link>
            </div>
          </div>
        : null}
      </div>
    )
  }
}
