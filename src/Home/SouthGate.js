import React from 'react';
import { Link } from 'react-router-dom';

import southgate from '../img/southgate.jpg'

export default class SouthGate extends React.Component {

  state = {
    checkBushes: false,
    moveForward: false,
    grappled: false,
    dodge: false,
    showbuttons: true,
    complete: false
  }

  investigate = () => {
    this.setState({
      showbuttons: false,
      checkBushes: true
    })
  }
  leave = () => {
    this.setState({
      showbuttons: false,
      moveForward: true,
      complete: true
    })
  }
  grappled = () => {
    this.setState({
      grappled: true,
      complete: true
    })
  }
  dodge = () => {
    this.setState({
      dodge: true,
      complete: true
    })
  }
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    let perc = <div>
      <p>As {user} heads out the gate, they see there are two paths they can take.</p>
    </div>
    if(this.state.checkBushes){
      if(this.state.dodge){
        perc= <div><p>{user} steps towards the bushes, leaning closer to see what is there.</p>
        <p>The eyes blink out, and a pair of arms reaches out from the bushes to wrap around the neck of {user}!</p><p>Jumping away from the threat, {user} shakes themselves off and heads quickly out the gate where they choose where to head next.</p></div>
      }else{
        perc = <div><p>{user} steps towards the bushes, leaning closer to see what is there.</p>
        <p>The eyes blink out, and a pair of arms reaches out from the bushes to wrap around the neck of {user}!</p>
        <p>Roll agility to dodge.</p>
        <button onClick={() => this.grappled()} className="button-list">Rolled 1-10</button>
        <button onClick={() => this.dodge()} className="button-list">Rolled 11 or higher</button></div>
      }
    }
    if(this.state.grappled){
      perc=<div><p>{user} steps towards the bushes, leaning closer to see what is there.</p><p>The eyes blink out, and a pair of arms reaches out from the bushes to wrap around the neck of {user}!</p><p>The arms grip tightly around {user}, with nails digging into their skin.</p>
      <i>In order to escape the grasp, you must roll agility higher than 11. Please RP this out in discord. If you miss, they hit you for 5 damage. Roll again. Each miss does 5 damage until you get away or they kill you.</i>
      <hr/>
      <p>Jumping away from the threat, {user} shakes themselves off and heads quickly out the gate where they choose where to head next.</p>
      </div>
    }
    return (
      <div>
      <h1>South Gate</h1>
      {/* <a href="https://www.youtube.com/watch?v=dTyqNu4vAf4" target="_blank" rel="noopener noreferrer">For ambience music, click here</a> */}
      <img className="headerimg" src={southgate} alt="South Gate" />
      <h2>What you see</h2>
      <p>The door crashes behind {user}, and vines instantly wrap up around it, making the way back impossible. In front of {user} there is a simple gate that leads out to two possible paths.</p>
      <p>A soft gurgling sound can be heard from the left of {user}. As they turn to look, three pairs of eyes are glowing out from the bushes.</p>
      {this.state.showbuttons ?
        <div>
          <p>What would you like to do?</p>
          <button onClick={() => this.investigate()} className="button-list">Investigate the eyes</button>
          <button onClick={() => this.leave()} className="button-list">Head out the Gate</button>
        </div>
      :
      <div>
        {perc}
      </div>
      }
      {/* <h2>What you must RP out</h2> */}

      {this.state.complete ?
        <div>
          <h2>Exits</h2>
            <div className="room-list">
              <Link to='/darkforest'>Dark Forest</Link>
              <Link to='/caveentrance'>Cave Entrance</Link>
            </div>
        </div>
      : 
        <p>Please continue above in order to proceed.</p>
      }
    </div>
    )
  }
}
