import React from 'react'
import boat from '../img/bayoudock.jpg';
import { Link } from 'react-router-dom';

export default class BayouDock extends React.Component {
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Bayou Dock</h1>
        <img className="headerimg" src={boat} alt="Bayou Boat" />
        <h2>What {user} sees</h2>
        <p>As {user} rounds the porch and walks down the dock, they see a crumbled down boat floating next to the dock. It looks stable enough, and might be a good way to travel across the waters safetly.</p>
        <p>{user} steps onto the boat, and it starts to drift away into the bayou.</p>
        <p>After a while, the mist fades and {user} finds they are no longer on theboat. In fact, as the mist receeds, they find they are back in the conservatory.</p>
        <p>{user} may head out once more instantly without the hour wait, or they can return to the house and be done with the quest.</p>
        <h2>Exits</h2>
        <div className="room-list">
          <Link to='/conservatory'>Conservatory</Link>
        </div>
      </div>
    )
  }
}


