import React from 'react';
import { Link } from 'react-router-dom';

import fadelunafair from '../img/fadelunafair.jpg'

export default class FadeLunaFair extends React.Component {

  state = {
    checkfair: false,
    moveForward: false,
    grappled: false,
    dodge: false,
    showbuttons: true,
    complete: false
  }

  investigate = () => {
    this.setState({
      showbuttons: false,
      checkfair: true,
      complete: true
    })
  }
  leave = () => {
    this.setState({
      showbuttons: false,
      moveForward: true,
      complete: true
    })
  }
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    let perc = <div>
      <p>As {user} moves through the garden, they see there are three paths they can take. One heads off towards a dark swamp, one leads to a large floral area, and another drifts off towards a fountain.</p>
    </div>
    if(this.state.checkfair){
        perc= <div><p>{user} steps into the fair, looking around at the various sights and sounds.</p>
        <p>{user} notices that there are several attractions available, including a tunnel of love, a hall of mirros, a carousel and a fortune teller tent.</p>
        </div>
    }
    return (
      <div>
      <h1>Fade Luna Fair</h1>
      <a href="https://www.youtube.com/watch?v=lIEP53VNp_0" target="_blank" rel="noopener noreferrer">For new ambience music, click here</a>
      <img className="headerimg" src={fadelunafair} alt="Outside Garden" />
      <h2>What {user} sees</h2>
      <p>The trees part to unveil a large purple arch. Signs all around advertise the Fade Luna Fair. There seems to be several attractions all around, though not another soul can be found.</p>
      {this.state.showbuttons ?
        <div>
          <h2>Roll perception</h2>
          <button onClick={() => this.leave()} className="button-list">Rolled 12 or lower</button>
          <button onClick={() => this.investigate()} className="button-list">Rolled 13+</button>
        </div>
      :
      <div>
        {perc}
      </div>
      }

      {this.state.complete ?
        <div>
          <h2>Exits</h2>
            <div className="room-list">
              <Link to='/carousel'>Carousel</Link>
              <Link to='/fortuneteller'>Fortune Teller</Link>
              <Link to="/tunneloflove">Tunnel of Love</Link>
              {this.state.checkfair ? 
              <Link to='/hallofmirrors'>Hall of Mirrors</Link>
              :null}
            </div>
        </div>
      : 
        <p>Please continue above in order to proceed.</p>
      }
    </div>
    )
  }
}
