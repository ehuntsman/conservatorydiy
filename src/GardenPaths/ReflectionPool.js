import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import fountain from '../img/fountain.jpg'

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
        <h1>Reflection Pool</h1>
        <img className="headerimg" src={fountain} alt="Reflection Pool" />
        <h2>What {user} sees</h2>
        <p>A still water pool lays in the middle of this part of the maze, though it looks like it used to be a fountain of sorts. In the middle on top of a pedistal is a statue of a woman.</p>
        {this.state.initial ?
        <div>
          <h2>Roll Perception</h2>
          <button onClick={() => this.dontseeit()} className="button-list">Rolled a 15 or lower</button>
          <button onClick={() => this.seeit()} className="button-list">Rolled a 16+</button>
        </div>
        :null}
        {this.state.per ?
        <div>
          <p>It looks as though {user} could go into the pool and come out somewhere else.</p>
          <h2>Exits</h2>
          <div className="room-list">
            <Link to='/lilypadswamp'>Go into the Reflection Pool</Link>
            <Link to='/rosegarden'>Rose Garden</Link>
          </div>
        </div>
        :null}
        {this.state.dontseeit ?
        <div>
          <p>The waters in the pool are mesmorizing. Maybe you could take a sip?</p>
          <h2>Exits</h2>
          <div className="room-list">
            <Link to='/rosegarden'>Rose Garden</Link>
            <Link to='/end'>Take a sip of the pool water</Link>
          </div>
        </div>
        :null}
      </div>
    )
  }
}
