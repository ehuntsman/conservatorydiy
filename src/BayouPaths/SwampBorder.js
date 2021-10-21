import React from 'react'
import swampborder from '../img/swampborder.jpg';
import { Link } from 'react-router-dom';

export default class SwampBorder extends React.Component {
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
        <h1>Swamp Border</h1>
        <a href="https://www.youtube.com/watch?v=9Jd_SPHbSQk" target="_blank" rel="noopener noreferrer">For the shift in ambience music, click here</a>
        <img className="headerimg" src={swampborder} alt="Swamp Border" />
        <h2>What {user} sees</h2>
        <p>The edge of the swamp is dark and murky, with soggy land spots amid the vast shallow waters. The swamp stretches out beyond.</p>
        <p>A deep growling can be heard nearby.</p>
        <p>If {user} wishes to go forward to the bayou, they must roll an agility higher than 10 to get through the murkey waters.</p>
        {!this.state.agilityDone ?
          <div>
            <h2>Roll Agility</h2>
            <button onClick={() => this.down()} className="button-list">Rolled a 9 or lower</button>
            <button onClick={() => this.getUp()} className="button-list">Rolled 10+</button>
          </div>
        :null}
        {this.state.almostDead ?
        <div><h2>{user} is still stuck</h2><p>As {user} start to sink into the muddy swamp, they try once more to escape. Roll agility once more or use a spell to try and get yourself out. If you cast a spell (i.e. constricting vines) you must RP out the way it work AND roll a d20 with your spell prof.</p>
        <Link to='/end' className="button-list">Rolled a 9 or lower</Link>
        <button onClick={() => this.getUp()} className="button-list">Rolled 10+</button></div>
        :null}
        {this.state.complete ? 
          <div>
            <h2>Exits</h2>
            <div className="room-list">
              <Link to='/bayou'>Bayou</Link>
            </div>
          </div>
        : null}
      </div>
    )
  }
}


