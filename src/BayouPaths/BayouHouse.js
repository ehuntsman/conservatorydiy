import React from 'react'
import house from '../img/bayouhouse.jpg';
import { Link } from 'react-router-dom';

export default class BayouHouse extends React.Component {
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Bayou House</h1>
        <img className="headerimg" src={house} alt="Bayou House" />
        <h2>What {user} sees</h2>
        <p>A rotten, crumbling home sits on the edge of the bayou waters. A porch wraps around the house leading to a small dock in the back. On the front porch there apears to be a man, but as you get closer you see it's a scarecrow of sorts, filled with stray and given a long rifle.</p>
        <p>As {user} looks into the window, they can see a strange alchemic looking room. The waters outside, dark and murky, call to {user}. Perhaps a swim would be nice?</p>
        <h2>Exits</h2>
        <div className="room-list">
          <Link to='/alchemyroom'>Alchemy Room</Link>
          <Link to ='/bayoudock'>Bayou Dock</Link>
          <Link to='/end'>Bayou Waters</Link>
        </div>
      </div>
    )
  }
}


