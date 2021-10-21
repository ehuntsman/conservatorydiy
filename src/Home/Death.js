import React, { Component } from 'react';
import death from '../img/death.jpg';
import { Link } from 'react-router-dom';

export default class Death extends Component {
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <img src={death} alt="you've died" />
        <h1>{user} has died.</h1>
        <p>The ghost of {user} haunts the area, unable to leave the place they died.</p>
        <p>Feel free to RP out how you died.</p>
        <p>If you were in a group, and someone is in the same area you died, you may be ressurected (if they can). Otherwise  From there you can either try again or head back into the mansion.</p>
        <Link to='/'>Back to the home page</Link>
      </div>
    )
  }
}
