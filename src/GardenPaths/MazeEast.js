import React from 'react'
import mushroom from '../img/mushroomgarden.jpg';
import { Link } from 'react-router-dom';

export default class MazeEast extends React.Component {
  state = {
    red: false,
    complete: false,
    blue: false,
    initial: true
  }

  moveOn = () => {
    this.setState({
      complete: true,
      initial: false
    })
  }

  red = () => {
    this.setState({
      initial: false,
      red: true
    })
  }

  blue = () => {
    this.setState({
      initial: false,
      blue: true
    })
  }
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Mushroom Garden</h1>
        <img className="headerimg" src={mushroom} alt="Mushroom Garden" />
        <h2>What {user} sees</h2>
        <p>As they head East into the maze, they find themselves in a strange mushroom garden.</p>
        {this.state.initial ?
          <div>
            <h2>Roll Mental Check</h2>
            <button onClick={() => this.blue()} className="button-list">Taste a Blue Mushroom</button>
            <button onClick={() => this.red()} className="button-list">Taste a Red Mushroom</button>
            <button onClick={() => this.moveOn()} className="button-list">Move along</button>
          </div>
        :null}
        {this.state.blue ?
        <div><h2>{user} eats a blue mushroom</h2><p>Really? A strange mushroom in a strange garden? Yeah. Okay.</p><h2>Exits</h2>
        <div className="room-list">
          <Link to='/end'>What did you think would happen?</Link>
        </div></div> : null}
        {this.state.red ?
        <div><h2>{user} eats a red mushroom</h2>
        <p>The world seems to grow faint for a moment, and then very large. {user} shrinks down to the size of a rabbit. Which is nice because now they see a rabit hole! As {user} travels down the hole, they find the passage leads all the way back to the Conservatory. When they reach the Conservatory and exit the hole, they are grown back up to normal size.</p>
        <p>They may try to traverse through the quest again without the hour long cooldown.</p><h2>Exits</h2>
            <div className="room-list">
              <Link to='/home'>Conservatory</Link>
            </div></div> : null}
        {this.state.complete ?
          <div>
            <h2>Exits</h2>
            <div className="room-list">
              <Link to='/mazenorth'>Continue through the maze</Link>
            </div>
          </div>
        :null}
      </div>
    )
  }
}
