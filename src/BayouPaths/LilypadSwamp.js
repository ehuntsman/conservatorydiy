import React from 'react'
import lilpad from '../img/lilypad.jpg';
import { Link } from 'react-router-dom';

export default class LilypadSwamp extends React.Component {
  state = {
    stealthDone: false,
    almostDead: false,
    dead: false,
    complete: false
  }

  sneakThrough = () => {
    this.setState({
      stealthDone: true,
      complete: true
    })
  }

  caught = () => {
    this.setState({
      almostDead: true,
      stealthDone: true
    })
  }

  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Lilypad Swamp</h1>
        <img className="headerimg" src={lilpad} alt="Swamp Border" />
        <h2>What {user} sees</h2>
        <p>The swamp grows murkey as {user} moves over to a giant patch of lilypads. In the distance they can make out a house, or another stretch of the bayou. They look strong enough to stand on, and makes for a nice bridge through the swamp. As {user} starts to make their way through, they notice a body in the water.</p>
        {!this.state.stealthDone ?
          <div>
            <h2>Roll Stealth</h2>
            <button onClick={() => this.caught()} className="button-list">Rolled a 14 or lower</button>
            <button onClick={() => this.sneakThrough()} className="button-list">Rolled 15+</button>
          </div>
        :null}
        {this.state.almostDead ?
        <div><h2>An arm reaches up to {user}</h2><p>From the muddy waters, an arm grabs onto the leg of {user}. Roll strength to escape.</p>
        <Link to='/end' className="button-list">Rolled a 8 or lower</Link>
        <button onClick={() => this.sneakThrough()} className="button-list">Rolled 9+</button></div>
        :null}
        {this.state.complete ? 
          <div>
            <h2>Exits</h2>
            <div className="room-list">
              <Link to='/blackwater'>Blackwater Bayou</Link>
              <Link to ='/bayouhouse'>Bayou House</Link>
            </div>
          </div>
        : null}
      </div>
    )
  }
}


