import React from 'react'
import queen from '../img/queen.jpg';
import { Link } from 'react-router-dom';

export default class Queen extends React.Component {
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Chess Queen</h1>
        <img className="headerimg" src={queen} alt="Swamp Border" />
        <h2>What {user} sees</h2>
      <p>{user} steps over to the queen and finds a small step to get up on top of the peice.</p>
      <p>They are the chess queen. {user} zooms around slaughtering all the other peices until only they remain.</p>
      <p>The queen moves off the feild, carrying {user} back to the conservatory, where they can start again with no time penalty.</p>
      <p>Make sure to mention that {user} is the chess queen. It's extra favor.</p>
      <Link to='/conservatory'>Conservatory</Link>
      </div>
    )
  }
}


