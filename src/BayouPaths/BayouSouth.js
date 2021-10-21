import React from 'react'
import sbayou from '../img/bayousouth.gif';
import { Link } from 'react-router-dom';

export default class BayouSouth extends React.Component {
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Bayou South</h1>
        <img className="headerimg" src={sbayou} alt="Swamp Border" />
        <h2>What {user} sees</h2>
      <p>The mist swirls around {user}, making it nearly impossible to see. After a while, they start to see something moving through the trees. {user} gets closer, only to see white eyes peircing through the darkness.</p>
      <p>The mist gets thick enough to choke on, and the darkness comes closer and closer.</p>
      <h2>The world fades around {user}</h2>
      <p>{user}, and anyone with them, slowly fades off into the darkness and dies.</p>
      <p>In one hour, real time, {user} will be ressurected in the Conservatory. From there you can either try again or head back into the mansion.</p>
      <Link to='/'>Back to the home page</Link>
      </div>
    )
  }
}


