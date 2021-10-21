import React from 'react';
import { Link } from 'react-router-dom';

import darkforest from '../img/darkforest.jpg'

export default class DarkForest extends React.Component {

  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
      <h1>Dark Forest</h1>
      {/* <a href="https://www.youtube.com/watch?v=dTyqNu4vAf4" target="_blank" rel="noopener noreferrer">For ambience music, click here</a> */}
      <img className="headerimg" src={darkforest} alt="Outside Garden" />
      <h2>What {user} sees</h2>
      <p>Up aheead, there seems to be a light in the forest. Sweet smells and light music floats through the air.</p>
      <h2>Exits</h2>
      <div className="room-list">
        <Link to='/fadeluna'>Fade Luna Fair</Link>
      </div>

    </div>
    )
  }
}
