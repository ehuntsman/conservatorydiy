import React from 'react'
import garden from '../img/floralgardens.jpg';
import { Link } from 'react-router-dom';

export default class BayouDock extends React.Component {
  state = {
    perceptionDone: false,
    medper: false,
    highper: false,
    beeattack: false,
    beeattackDone: false,
    stung: false,
    complete: false
  }

  open01 = () => {
    this.setState({
      perceptionDone: true,
      beeattack: true
    })
  }
  open03 = () => {
    this.setState({
      perceptionDone: true,
      medper: true,
      complete: true
    })
  }
  open04 = () => {
    this.setState({
      perceptionDone: true,
      highper: true,
      complete: true
    })
  }
  beemiss = () => {
    this.setState({
      beeattackDone: true,
      complete: true
    })
  }
  beehit = () => {
    this.setState({
      beeattackDone: true,
      complete: true,
      stung: true
    })
  }
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    let perception = <div><p>{user} notices there are a large amount of bees in the area.</p></div>
    if(this.state.medper){
      perception = <div>{user} notices there are a large amount of bees in the area. In addition, they get a strange feeling coming from the reflection pool.</div>
    }else if(this.state.highper){
      perception = <div><p>{user} notices there are a large amount of bees in the area. In addition, they get a strange feeling coming from the reflection pool.</p><p>{user} can see through the bushes and just beyond the reflection pool lies a hidden rose garden. There appears to b someone there.</p></div>
    }
    return (
      <div>
        <h1>Floral Gardens</h1>
        <img className="headerimg" src={garden} alt="Floral Gardens" />
        <h2>What {user} sees</h2>
        <p>As {user} enters the gardens, the sweet smell of lilac and lavender fills the air. There's a soft buzzing of bees.</p>
        {this.state.perceptionDone ?
          <div>
            {perception}
          </div>
        :
          <div>
            <p>Please roll perception.</p>
            <button onClick={() => this.open01()} className="button-list">Rolled lower than 14</button>
            <button onClick={() => this.open03()} className="button-list">Rolled 15-20</button>
            <button onClick={() => this.open04()} className="button-list">Rolled 20+</button>
          </div>
        }
        {this.state.beeattack ?
        <div><h2>A group of bees swarm {user}</h2>
          {this.state.beeattackDone ? null :
            <div>
            <p>Please roll agility to avoid being stung.</p>
              <button onClick={() => this.beehit()} className="button-list">Rolled lower than 14</button>
              <button onClick={() => this.beemiss()} className="button-list">Rolled 15 or higher</button></div>
          }
        </div>
        :null}
        {this.state.stung ?
        <div><h2>{user} has been stung by a bee</h2><p>{user} feels woosy. They now take -2 to all agility tests for the remainder of this encounter. (Please keep track of this. The debuff only goes away when this run of the DIY quest is complete).</p></div> : null}
        {this.state.complete ?
        <div>
          <h2>Exits</h2>
          <div className="room-list">
            <Link to='/gardenmaze'>Garden Maze</Link>
            <Link to="/reflectionpool">Reflection Pool</Link>
          </div>
        </div>
        :null}
      </div>
    )
  }
}


