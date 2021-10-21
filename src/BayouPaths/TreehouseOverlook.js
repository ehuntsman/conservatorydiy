import React from 'react'
import treehouseoverlook from '../img/treehouseoverlook.jpg';
import { Link } from 'react-router-dom';

export default class LilypadSwamp extends React.Component {
  state = {
    fallCheck: false,
    almostDead: false,
    dead: false,
    complete: false
  }

  stumbleBack = () => {
    this.setState({
      fallCheck: true,
      complete: true
    })
  }

  fall = () => {
    this.setState({
      dead: true,
      fallCheck: true
    })
  }

  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Treehouse Overlook</h1>
        <img className="headerimg" src={treehouseoverlook} alt="Swamp Border" />
        <h2>What {user} sees</h2>
        <p>From the overlook on the treehouse, mist covers the swamp. In the distance, it looks like {user} can make out a road of sorts. As they lean against the railing to get a better look, the wood spliters and breaks away.</p>
        {!this.state.fallCheck ?
          <div>
            <h2>Roll Agility to stagger back</h2>
            <button onClick={() => this.fall()} className="button-list">Rolled a 14 or lower</button>
            <button onClick={() => this.stumbleBack()} className="button-list">Rolled 15+</button>
          </div>
        :null}
        {this.state.dead ?
        <div><h2>{user} stumbles forward</h2><p>Unable to keep steady with the sudden loss of railing, {user}, and anyone with them, falls forward and falls down into the murky depths of the bayou to their death.</p>
        <p>In one hour, real time, {user} will be ressurected in the Conservatory. From there you can either try again or head back into the mansion.</p>
        <Link to='/'>Back to the home page</Link>
        </div>
        : null }
        {this.state.complete ? 
          <div>
            <p>{user} jumps back, managing to escape from the broken railing. As they do, they notice a zipline going down into the bayou.</p>
            <h2>Exits</h2>
            <div className="room-list">
              <Link to='/blackwater'>Blackwater Bayou</Link>
            </div>
          </div>
        : null}
      </div>
    )
  }
}


