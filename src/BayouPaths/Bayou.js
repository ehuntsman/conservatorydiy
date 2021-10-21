import React from 'react';
import { Link } from 'react-router-dom';

import bayou from '../img/bayou.jpg';
import horde from '../img/zombiehorde.jpg';

export default class Bayou extends React.Component {
  state = {
    lowperception: false,
    highperception: false,
    showbuttons: true,
    gotUp: false,
    complete: false,
    pendingAgility: true,
    grappled: false,
    brokenLimb: false,
    brokenGetAway: false,
    showConEscape1: false,
    showConEscape2: false
  }

  open01 = () => {
    this.setState({
      showbuttons: false,
      lowperception: true
    })
  }
  open02 = () => {
    this.setState({
      showbuttons: false,
      highperception: true,
      showConEscape1: true
    })
  }
  getup = () => {
    this.setState({
      pendingAgility: false,
      gotUp: true,
      showConEscape1: false,
      showConEscape2: false
    })
  }
  grappled = () => {
    this.setState({
      pendingAgility: false,
      grappled: true,
      showConEscape2: true
    })
  }
  brokenArm = () => {
    this.setState({
      brokenLimb: true,
      showConEscape2: false
    })
  }
  brokenGetAway = () => {
    this.setState({
      brokenGetAway: true,
      complete: true,
    })
  }
  getAway = () => {
    this.setState({
      complete: true
    })
  }
  conGrapple = () => {
    this.setState({
      grappled: true,
      showConEscape1: false,
      showConEscape2: true
    })
  }
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }


    let perc = <div>
      <p>The waters move around {user} as they trudge along, hoping to reach the next bank without incident.</p>
      <p>A noise from behind catches them off guard as suddenly a rush of zombies race towards {user}.</p>
      <img src={horde} alt="zombies" />
      <p>{user} turns and instantly stumbles in the water.</p>
      {this.state.pendingAgility ?
        <div>
          <p>Roll agility to get back to their feet.</p>
          <button onClick={() => this.grappled()} className="button-list">Rolled a 12 or lower</button>
          <button onClick={() => this.getup()} className="button-list">Rolled 13+</button>
        </div>
      :null}
    </div>

    if(this.state.highperception){
      perc = <div><p>{user} feels the hair on the back of their neck start to rise, and they look just in time to see an oncoming zombie swarm.</p>
      <img src={horde} alt="zombies" />
      <p>There are currently 14 zombies <i>per member of your party</i>. {user} must roll a constitution OR agility (whichever is higher) check to get through to the exit.</p>
      {this.state.showConEscape1 ?
        <div>
        <p>Roll constitution to escape.</p>
        <button onClick={() => this.conGrapple()} className="button-list">Rolled 11 or lower</button>
        <button onClick={() => this.getup()} className="button-list">Rolled 12+</button></div>
        :null}
      </div>
    }


    return (
      <div>
      <h1>Bayou</h1>
      <img className="headerimg" src={bayou} alt="Bayou" />
      <h2>What {user} sees</h2>
      <p>The thick humidity of the bayou clings to the skin of {user} as they trek through the swampy area. There's a frightful grumbling to the South.</p>
      <h2>Perception Roll:</h2>
      {this.state.showbuttons ?
        <div>
          <p>Please roll perception.</p>
          <button onClick={() => this.open01()} className="button-list">Rolled 10 or lower</button>
          <button onClick={() => this.open02()} className="button-list">Rolled 11+</button>
        </div>
      :
      <div>
        {perc}
      </div>
      }
      {this.state.grappled ?
      <div>
        <p>A zombie grabs onto the arm of {user}, grappling them.</p>
        <p>There are 6 zombies all in melee range, getting ready to strike.</p>
        {this.state.showConEscape2 ?
        <div>
        <p>Roll constitution to escape.</p>
        <button onClick={() => this.brokenArm()} className="button-list">Rolled 11 or lower</button>
        <button onClick={() => this.getup()} className="button-list">Rolled 12+</button></div>
        :null}
      </div>
      :null}
      {this.state.gotUp ?
      <div>
        <p>{user} manages to get back up on their feet.</p>
        <p>There are currently 14 zombies <i>per member of your party</i>. {user} must roll a constitution OR agility (whichever is higher) check to get through to the exit.</p>
        <p>Roll constitution OR agility to escape.</p>
        <Link to='/end' className="button-list">Rolled a 11 or lower</Link>
        <button onClick={() => this.getAway()} className="button-list">Rolled 12+</button>
      </div>
      :
      null}
      {this.state.brokenLimb ?
      <div><h2>The zombie rips the arm off of {user}</h2><p>With unrealistic strength, the zombie tears off the arm of {user}, sending them stumbling back.</p>
      <p>Roll agility to escape.</p>
      <Link to='/end' className="button-list">Rolled a 15 or lower</Link>
      <button onClick={() => this.brokenGetAway()} className="button-list">Rolled 16+</button>
      </div>
      :null}
      {this.state.brokenGetAway ?
      <div><h2>{user} manages to run away</h2><p>Limping away, clutching thier missing arm, {user} manages to make their way to the exit.</p></div>:null}

      {this.state.complete ?
        <div>
          <h2>Exits</h2>
            <div className="room-list">
              <Link to='/outsidegarden'>Lily Pad Swamp</Link>
              <Link to='/bayousouth'>Bayou South</Link>
              <Link to='/bayouforest'>Bayou Forest</Link>
            </div>
        </div>
      : 
        <p>Please follow the instructions above to proceed.</p>
      }
    </div>
    )
  }
}
