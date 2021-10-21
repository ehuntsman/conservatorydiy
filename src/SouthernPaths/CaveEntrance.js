import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import caveentrance from '../img/caveentrance.jpg';

export default class CaveEntrance extends Component {
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Cave Entrance</h1>
      {/* <a href="https://www.youtube.com/watch?v=dTyqNu4vAf4" target="_blank" rel="noopener noreferrer">For ambience music, click here</a> */}
      <img className="headerimg" src={caveentrance} alt="Cave Entrance" />
      <h2>What you see</h2>
      <p>{user} moves off away fromt he house to a dark, narrow cave entrance. A deep breath seems to exhale from inside the cave.</p>
      <Link to='/end'>Move into the cave</Link>
      </div>
    )
  }
}
