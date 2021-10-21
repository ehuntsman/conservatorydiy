import React from 'react'
import alchemy from '../img/alchemyroom.jpg';
import { Link } from 'react-router-dom';

export default class BayouDock extends React.Component {
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Alchemy Room</h1>
        <img className="headerimg" src={alchemy} alt="Alchemy Room" />
        <h2>What {user} sees</h2>
        <p>{user} steps into the house, finding the uneasiness of what looks to be an alchemic study inside. Various ingredients litter the room, though very few of them look edible. Jars around the room are labeled with almost anything that one could imagine. The smell is strong of garlic and rot. In the center of the stove is a large bubbling pot that looks like it's awaiting something.</p>
        <p>Multiple voices overlapping on the wind can be heard all around {user}.</p>
        <p className="quote"><i>"The potion has been completed.</i></p>
        <p className="quote"><i>But two more puzzles lay unsolved.</i></p>
        <p className="quote"><i>Find them. Solve them.</i></p>
        <p className="quote"><i>Before he returns."</i></p>
        <hr/>
        <p>Once {user} hears the voices, darkness will surround {user} and they will be returned to the conservatory where they can start the quest over again (with no wait) or head back into the house.</p>
        <h2>Exits</h2>
        <div className="room-list">
          <Link to='/conservatory'>Conservatory</Link>
        </div>
      </div>
    )
  }
}


