import React from 'react'
import tunneloflove from '../img/tunneloflove.jpg';
import { Link } from 'react-router-dom';

export default class TunnelofLove extends React.Component {
  state = {
    agilityDone: false,
    almostDead: false,
    dead: false,
    complete: false
  }

  getUp = () => {
    this.setState({
      agilityDone: true,
      complete: true
    })
  }

  down = () => {
    this.setState({
      almostDead: true,
      agilityDone: true
    })
  }

  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Tunnel of Love</h1>
        <img className="headerimg" src={tunneloflove} alt="Tunnel of Love" />
        <h2>What {user} sees</h2>
        <p>The water inside has long since dried up, and flickering florencents strobe the halls as {user} walks through the attraction.</p>
        <p>Creepy dolls appear all along the sides of the former water ride, holding hands and smiling. {user} gets the impression that they should perhaps avoid grabbing the attention of the dolls.</p>
        {!this.state.agilityDone ?
          <div>
            <h2>Roll Stealth</h2>
            <button onClick={() => this.down()} className="button-list">Rolled a 11 or lower</button>
            <button onClick={() => this.getUp()} className="button-list">Rolled 12+</button>
          </div>
        :null}
        {this.state.almostDead ?
        <div><h2>{user} makes a noise</h2><p>The eyes of all the dolls snap to look at {user}, folling them as they move.</p>
        <p>Roll persuasion to the dolls.</p>
        <Link to='/end' className="button-list">Rolled a 9 or lower</Link>
        <button onClick={() => this.getUp()} className="button-list">Rolled 10+</button></div>
        :null}
        {this.state.complete ? 
          <div>
          {this.state.almostDead ? 
            <p>Well, they bought it. The dolls eyes continue to follow {user} but they don't seem to interfere as {user} continues through the attraction.</p>
          :<p>{user} moves carefully through the tunnel, avoiding the dolls.</p>}
            <h2>Exits</h2>
            <div className="room-list">
              <Link to='/fadeluna'>Exit the Tunnel of Love</Link>
            </div>
          </div>
        : null}
      </div>
    )
  }
}


