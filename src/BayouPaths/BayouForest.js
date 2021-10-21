import React from 'react'
import forest from '../img/bayouforest.jpg';
import { Link } from 'react-router-dom';

export default class BayouForest extends React.Component {
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Bayou Forest</h1>
        <img className="headerimg" src={forest} alt="Swamp Border" />
        <h2>What {user} sees</h2>
        <p>Giant twisting trees rise up all around {user}, blotting out the sky and fading off into mist. As they walk, they can see a treehouse in the distance, as well as a house off to the left. To the South, a low gurgling moan can be heard.</p>
        <h2>Exits</h2>
        <div className="room-list">
          <Link to='/treehouse'>Treehouse</Link>
          <Link to ='/bayouhouse'>Bayou House</Link>
          <Link to='/bayousouth'>Bayou South</Link>
        </div>
      </div>
    )
  }
}


