import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import rose from '../img/rosegarden.jpg'
import gun from '../img/gun.png'
import hammer from '../img/hammer.png';
import bird from '../img/bird.png';
import posion from '../img/posion.png';
import start from '../img/start.png'

export default class ReflectionPool extends Component {
  state = {
    per: false,
    initial: true,
    dontseeit: false
  }
  seeit = () => {
    this.setState({
      per: true,
      initial: false
    })
  }
  dontseeit = () => {
    this.setState({
      initial: false,
      dontseeit: true
    })
  }
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Rose Garden</h1>
        <img className="headerimg" src={rose} alt="Rose Garden" />
        <h2>What {user} sees</h2>
        <p>The maze widens a little and the hedges start to lower as {user} enters a rose garden. As they move through the garden they find a series of statues that hold small phrases upon them. {user} reads the statue phrases.</p>
        <p className="quote"><img src={posion} alt="posion" /><i>"Bertie - Avid hunter and expert shot. In the end, that's what he got."</i></p>
        <p className="quote"><img src={gun} alt="gun" /><i>"Aunt Florence - Never did a dishonorable deed. Yet facedown in canary seed."</i></p>
        <p className="quote"><img src={bird} alt="bird" /><i>"The Twins - Departed this world in their beds.  With identical bumps on identical beds"</i></p>
        <p className="quote"><img src={hammer} alt="hammer" /><i>"Cousin Maude - Our sleeping beauty who never woke. The night her dreams went up in smoke."</i></p>
        <p className="quote"><img src={start} alt="start" /><i>"Uncle Jacob - Greed was the poison he had swallowed. He went first, the others followed. His killer’s face he surely knew. Now try to discover who killed him.”</i></p>
        <hr/>
        {this.state.initial ?
        <div>
          <h2>Roll Perception</h2>
          <button onClick={() => this.dontseeit()} className="button-list">Rolled a 18 or lower</button>
          <button onClick={() => this.seeit()} className="button-list">Rolled a 19+</button>
        </div>
        :null}
        {this.state.per ?
        <div>
          <p>There are match sticks laying on the plaque that mentions Cousin Maude.</p>
        </div>
        :null}
        {this.state.per || this.state.dontseeit ?
          <div>
            <p>Once you've figured out the riddle, break the statue of who was the last to die.</p>
            <p>No matter which statue they break, the area around {user} goes dark, and they wake up back in the conservatory able to start again with no time restriction.</p>
            <h2>Exits</h2>
            <div className="room-list">
              <Link to='/conservatory'>Conservatory</Link>
            </div>
          </div>
        :null}
      </div>
    )
  }
}
