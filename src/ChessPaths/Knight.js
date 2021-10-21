import React from 'react'
import knight from '../img/knight.jpg';
import { Link } from 'react-router-dom';

export default class Knight extends React.Component {
  state = {
    perceptionDone: false,
    medper: false,
    highper: false,
    pawnattack: false,
    pawnattackdone: false,
    stung: false,
    complete: false,
    test: false,
    safe: false
  }

  open01 = () => {
    this.setState({
      perceptionDone: true,
      pawnattack: true
    })
  }
  open03 = () => {
    this.setState({
      perceptionDone: true,
      medper: true,
      test: true
    })
  }
  open04 = () => {
    this.setState({
      perceptionDone: true,
      highper: true,
      test: true
    })
  }
  stabled = () => {
    this.setState({
      pawnattackdone: true,
      complete: true,
      safe: true
    })
  }
  flungoff = () => {
    this.setState({
      pawnattackdone: true,
      complete: true,
      stung: true
    })
  }
  givetest = () => {
    this.setState({
      test: true
    })
  }
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    let perception = <div><p>{user} can see many pieces on the board, all moving about without a specific turn order.</p></div>
    if(this.state.medper){
      perception = <div>{user} there are a decent amount of peices moving about on the board. Black seems to be winning by sheer number, but none of the peices seem to be moving in a turn order.</div>
    }else if(this.state.highper){
      perception = <div><p>{user} can see that black is clearly winning normal chess, as white has no king or queen left. But... this isn't normal chess. The peices are moving about randomly without a turn order, but after a moment {user} can see they are going in a diagonal pattern. If they stay on the Knight, eventually they will reach the other side of the cheesboard.</p></div>
    }
    return (
      <div>
        <h1>Knight</h1>
        <img className="headerimg" src={knight} alt="Knight" />
        <h2>What {user} sees</h2>
        <p>{user} steps up next to the knight. The ground rumbles underneath them as several peices on the board start to move around as if they were playing. {user} finds a place to step up onto the knight, and they ascend up to the top and look over the chess board.</p>
        {this.state.perceptionDone ?
          <div>
            {perception}
          </div>
        :
          <div>
            <p>Please roll perception.</p>
            <button onClick={() => this.open01()} className="button-list">Rolled lower than 14</button>
            <button onClick={() => this.open03()} className="button-list">Rolled 15-20</button>
            <button onClick={() => this.open04()} className="button-list">Rolled 20+</button>
          </div>
        }
        {this.state.pawnattack ?
        <div><h2>A smaller pawn attacks {user}</h2>
        <p>{user} looks down just in time to notice the pawn swinging towards them. It crashes into the knight, sending {user} flying off.</p>
          {this.state.pawnattackdone ? null :
            <div>
            <p>Please roll agility.</p>
              <button onClick={() => this.flungoff()} className="button-list">Rolled lower than 14</button>
              <button onClick={() => this.stabled()} className="button-list">Rolled 15 or higher</button></div>
          }
        </div>
        :null}
        {this.state.stung ?
        <div><h2>{user} has been flung to the ground</h2><p>The hit from the pawn knocks {user} off and to the ground, breaking their arm in the process (broken limb syndrome)</p>
        <p>As {user} looks around, they can see the pathway back to the conservatory. Maybe they should go through again (with no time pentalty to start over)</p>
        </div> : null}
        {this.state.test ?
        <div>
          <p>From where they stand, {user} can see a small engraving on the knight.</p>
          <p className="quote"><i>"Though I am a gift, you should still look."</i></p>
          <hr/>
          <p>After you RP out the riddle and what {user} does with it, the area around them will swirl with mist and {user} will find themselves back in the Conservatory, able to tstart again with no time penalty.</p>
          <Link to='/conservatory'>Conservatory</Link>
        </div>
        :null}
        {this.state.complete ?
        <div>
          {this.state.safe ?
          <div><p>{user} manages to land gracefully.</p><p>From where they stand, {user} can see a small engraving on the knight.</p>
          <p className="quote"><i>"Though I am a gift, you should still look."</i></p>
          <hr/>
          <p>If {user} cares to look, they'll find a button inside the mouth of the Knight, but it's already been pressed. The area around them will swirl with mist and {user} will find themselves back in the Conservatory, able to tstart again with no time penalty.</p></div>
        :null}
          <h2>Exits</h2>
          <div className="room-list">
            <Link to='/conservatory'>Conservatory</Link>
          </div>
        </div>
        :null}
      </div>
    )
  }
}


