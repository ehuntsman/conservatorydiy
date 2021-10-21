import React from 'react'
import king from '../img/king.jpg';
import { Link } from 'react-router-dom';

export default class King extends React.Component {
  state = {
    perceptionDone: false,
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
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }

    let perception = <div><p>{user} can see many pieces on the board, all moving about without a specific turn order. From where they stand, {user} can see the path back to the Conservatory. If they take it, there will be no time penalty</p></div>
    if(this.state.medper){
      perception = <div><p>{user} notices that there are a decent amount of peices moving about on the board. Black seems to be winning by sheer number, but none of the peices seem to be moving in a turn order. They can see the path back to the conservatory, which, if they take, will give them the ability to go through again without a time penalty.</p>
      <p>{user} also can see that the Knight has a button inside it's mouth, but it's been pushed.</p></div>
    }else if(this.state.highper){
      perception = <div><p>{user} can see that black is clearly winning normal chess, as white has no king or queen left. But... this isn't normal chess. The peices are moving about randomly without a turn order, but after a moment {user} can see the game isn't what matters. There is a switch in the Knights mouth - though it appears to have been pushed already.</p>
      <p>{user} knows this puzzle has been solved, and is given the chance to head to the maze to find another puzzle that has not yet been found, or they may return to the Conservatory with no time penalty.</p></div>
    }

    return (
      <div>
        <h1>King</h1>
        <img className="headerimg" src={king} alt="King" />
        <h2>What {user} sees</h2>
        <p>As {user} walks over to the King, they find a way to climb up on top.</p>
        <p>Up there, they can see the other peices starting to fall as they move about the board attacking eachother. The King, however, waits patiently.</p>
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
        {this.state.perceptionDone ?
          <div>
            <h2>Exits</h2>
            <div className="room-list">
              <Link to='/conservatory'>Conservatory</Link>
              {this.state.highper ?
              <Link to='/floralgardens'>Floral Gardens</Link>
              :null}
            </div>
          </div>
        : null}
      </div>
    )
  }
}


