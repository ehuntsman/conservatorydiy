import React from 'react'
import alter from '../img/treehousealter.jpg';
import { Link } from 'react-router-dom';

export default class BayouDock extends React.Component {
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Treehouse Alter</h1>
        <img className="headerimg" src={alter} alt="Treehouse Alter" />
        <h2>What {user} sees</h2>
        <p>The room is bare save for an alter in the middle of the room. A small book rests against it, and when {user} opens it they find a small passage.</p>
        <p className="quote"><i>"For the necromancer placed their life in five horcrux. I managed to track down one, a bone fairy femur, which I've crushed into power. Now I just need to find some way to burn the dust. I tried a candle, but it seems only magic will work."</i></p>
        <hr/>
        <p>Once you role play out what you will have done, darkness will surround {user} and they will be returned to the conservatory where they can start the quest over again (with no wait) or head back into the house.</p>
        <h2>Exits</h2>
        <div className="room-list">
          <Link to='/conservatory'>Conservatory</Link>
        </div>
      </div>
    )
  }
}


