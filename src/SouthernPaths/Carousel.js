import React from 'react';
import { Link } from 'react-router-dom';

import carousel from '../img/carousel.jpg';
import carousel2 from '../img/carousel2.jpg';

export default class Carousel extends React.Component {
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
      <p>The carousel spins faster and faster as you board, blurring the world outside around you. The music speeds up as well, and you start to notice the other parts around you are no longer sweet horses and benches. They're monsters.</p>
      <img src={carousel2} alt="carousel" />
      <p>{user} turns and instantly stumbles backwards into a bench that looks like a mimic. The jaws of the chest start to close.</p>
      {this.state.pendingAgility ?
        <div>
          <p>Roll agility to escape.</p>
          <button onClick={() => this.grappled()} className="button-list">Rolled a 12 or lower</button>
          <button onClick={() => this.getup()} className="button-list">Rolled 13+</button>
        </div>
      :null}
    </div>

    if(this.state.highperception){
      perc = <div><p>{user} feels the hair on the back of their neck start to rise, and they look around to see that the other parts of the carousel seem to be twisted monsters. There's an undead bear, an armored skeleton horse, a mimic, and other various creatures.</p>
      <img src={carousel2} alt="carousel" />
      <p>As the carousel starts to spin faster and faster, {user} notices the creatures are slowly starting to move, gaining speed as the carousel goes faster and faster. The mimic opens it's mouth wide and lunges at {user}.</p>
      {this.state.showConEscape1 ?
        <div>
        <p>Roll agility to escape.</p>
        <button onClick={() => this.conGrapple()} className="button-list">Rolled 11 or lower</button>
        <button onClick={() => this.getup()} className="button-list">Rolled 12+</button></div>
        :null}
      </div>
    }


    return (
      <div>
      <h1>Carousel</h1>
      <img className="headerimg" src={carousel} alt="carousel" />
      <h2>What {user} sees</h2>
      <p>{user} approaches what at first glance apprears to be a simple merry-go-round. There are horses and benches as the machine spins around with light, carefree music.</p>
      <p>Look around as {user} boards the carousel.</p>
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
        <h2>The mimic bites down on the leg of {user}, ripping if off as they escape.</h2> <p>{user} is now missing a leg (missing limb condition).</p>
        {this.state.showConEscape2 ?
        <div>
        <p>Roll constitution to stablize.</p>
        <button onClick={() => this.brokenArm()} className="button-list">Rolled 11 or lower</button>
        <button onClick={() => this.getup()} className="button-list">Rolled 12+</button></div>
        :null}
      </div>
      :null}
      {this.state.gotUp ?
      <div>
        <p>{user} backs up into the center pillar of the carousel as it goes around and round faster. The monsters move closer towards {user}, moving quicker as the carousel spins.</p>
        <p>Roll constitution OR agility to escape (whichever is higher, but you need to RP what you do based on the type you roll for).</p>
        <Link to='/end' className="button-list">Rolled a 11 or lower</Link>
        <button onClick={() => this.getAway()} className="button-list">Rolled 12+</button>
      </div>
      :
      null}
      {this.state.brokenLimb ?
      <div><p>{user} starts to bleed out as the monsters grow closer and closer. The carousel moves faster and faster, and the world spins around {user} unnaturally fast.</p>
      <Link to='/end' className="button-list">{user} feels the monsters closing in</Link>
      </div>
      :null}
      {this.state.brokenGetAway ?
      <div><h2>{user} manages to run away</h2><p>Limping away, clutching thier missing arm, {user} manages to make their way to the exit.</p></div>:null}

      {this.state.complete ?
        <div>
          <p>As {user} presses up against the center, they can feel a secret door handle. They slip inside as they monsters lunge and find themselves in a small staircase going down. As they go down, they find a passageway that heads all the way back to the Conservatory.</p>
          <h2>Exits</h2>
            <div className="room-list">
              <Link to='/conservatory'>Conservatory</Link>
            </div>
        </div>
      : 
        <p>Please follow the instructions above to proceed.</p>
      }
    </div>
    )
  }
}
