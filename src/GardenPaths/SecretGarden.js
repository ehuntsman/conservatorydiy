import React from 'react'
import secretgarden from '../img/secretgarden.jpg';
import { Link } from 'react-router-dom';

export default class SecretGarden extends React.Component {
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Secret Garden</h1>
        <img className="headerimg" src={secretgarden} alt="Secret Garden" />
        <h2>What {user} sees</h2>
        <p>{user} crawls through the tunnel and finds a small hidden clearing at the end. There's a tiny table with a tea set placed upon it. Around the table are several stuffed animals.</p>
        <p>Thankfully, these stuffed animals seem harmless, and don't move as {user} enters the small space.</p>
        {/* <p>Though there was no one there to enjoy the tea party, save for the stuffed animals, {user} could see a small napkin folded under a tea cup.</p> */}
        <p>No one is there to enjoy the tea party, save the stuffed animals. {user} feels like there is something missing.</p>
        {/* <p>The napkin holds a small note.</p>
        <p className="quote"><i>"When babies are born, they cry. That is the first expression they ever make."</i></p> */}
        <hr/>
        <p>{user} notices the hedges part ways and they can make their way back to the Conservatory to start over once more with no time penalty.</p>
        <h2>Exits</h2>
        <div className="room-list">
          <Link to='/conservatory'>Conservatory</Link>
        </div>
      </div>
    )
  }
}


