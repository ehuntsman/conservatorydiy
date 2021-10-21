import React from 'react'
import blackwater from '../img/blackwater.jpg';
import { Link } from 'react-router-dom';

export default class Blackwater extends React.Component {
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
        <h1>Blackwater Bayou</h1>
        <img className="headerimg" src={blackwater} alt="Blackwater Bayou" />
        <h2>What {user} sees</h2>
        <p>The bayou is properly named, with the waters so dark {user} can't even see their own reflection.</p>
        <p>The crows haven't seemed to notice {user} yet, but they get the feeling they should try to move by unnoticed.</p>
        {!this.state.agilityDone ?
          <div>
            <h2>Roll Stealth</h2>
            <button onClick={() => this.down()} className="button-list">Rolled a 11 or lower</button>
            <button onClick={() => this.getUp()} className="button-list">Rolled 12+</button>
          </div>
        :null}
        {this.state.almostDead ?
        <div><h2>{user} makes a noise</h2><p>The crows look to {user}. </p>
        <p>Roll persuasion to convince the crows you belong.</p>
        <Link to='/end' className="button-list">Rolled a 9 or lower</Link>
        <button onClick={() => this.getUp()} className="button-list">Rolled 10+</button></div>
        :null}
        {this.state.complete ? 
          <div>
            <p>Well, they bought it. The crows look away and {user} hurries off to the house in the distance.</p>
            <h2>Exits</h2>
            <div className="room-list">
              <Link to='/bayouhouse'>Bayou House</Link>
            </div>
          </div>
        : null}
      </div>
    )
  }
}


