import React from 'react';
import { Link } from 'react-router-dom';

import treehouse from '../img/treehouse.jpg'

export default class Treehouse extends React.Component {

  state = {
    checkBushes: false,
    moveForward: false,
    grappled: false,
    dodge: false,
    showbuttons: true,
    complete: false,
    lossOfLimb: false,
    vials: false
  }

  investigate = () => {
    this.setState({
      showbuttons: false,
      checkBushes: true
    })
  }
  leave = () => {
    this.setState({
      showbuttons: false,
      moveForward: true,
      complete: true
    })
  }
  grappled = () => {
    this.setState({
      grappled: true
    })
  }
  dodge = () => {
    this.setState({
      dodge: true,
      complete: true
    })
  }
  biteMe = () => {
    this.setState({
      lossOfLimb: true,
      complete: true
    })
  }
  getVials = () => {
    this.setState({
      vials: true,
      showbuttons: false,
      complete: true
    })
  }
  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    let perc = <div>
      <p>As {user} looks to the exits, they see there are two paths they can take.</p>
    </div>
    if(this.state.checkBushes){
      if(this.state.dodge){
        perc= <div><p>{user} picks up a book, opening it to a random page.</p>
        <p>Teeth appear from inside the book, and it attempts to bite {user}!</p>
        <p>{user} manages to avoid the bite and slams the book shut before putting it back.</p></div>
      }else{
        perc = <div><p>{user} picks up a book, opening it to a random page.</p>
        <p>Teeth appear from inside the book, and it attempts to bite {user}!</p>
        <p>Roll agility to dodge.</p>
        <button onClick={() => this.grappled()} className="button-list">Rolled 1-10</button>
        <button onClick={() => this.dodge()} className="button-list">Rolled 11 or higher</button></div>
      }
    }
    if(this.state.grappled){
      perc=<div><p>{user} picks up a book, opening it to a random page.</p><p>Teeth appear from inside the book, and it attempts to bite {user}!</p><p>The teeth of the book dig deep into the forearm of {user}.</p>
      {this.state.complete ? null :
      <div>
      <p>Roll strength to shake it off.</p>
      <button onClick={() => this.biteMe()} className="button-list">Rolled 1-12</button>
      <button onClick={() => this.dodge()} className="button-list">Rolled 13 or higher</button></div>
      }
      </div>
    }
    if(this.state.vials){
      perc=<div><p>{user} walks up to a glass bottole and picks it up. They turn it over int heir hands, surprised to find the liquid inside is quite viscouse. It's blood. Oh yeah. Totes blood in there. After a moment, {user} puts it back down and heads to another part of the treehouse.</p></div>
    }
    return (
      <div>
      <h1>Treehouse</h1>
      {/* <a href="https://www.youtube.com/watch?v=dTyqNu4vAf4" target="_blank" rel="noopener noreferrer">For ambience music, click here</a> */}
      <img className="headerimg" src={treehouse} alt="Treehouse" />
      <h2>What you see</h2>
      <p>A large, unstury treehouse lays among the bayou. Stepping inside, a strong smell of herbs and spices drowns out the murkiness of the swamp. Candles, dusty books and glass bottles cover almost every surface in the room, making the path through narrow. You can see two viable paths. One leads to a small room holding a sort of alter. The other goes outside to an overlook.</p>
      {this.state.showbuttons ?
        <div>
          <p>What would you like to do?</p>
          <button onClick={() => this.investigate()} className="button-list">Check some of the books</button>
          <button onClick={() => this.getVials()} className="button-list">Pick up some bottles</button>
          <button onClick={() => this.leave()} className="button-list">Leave</button>
        </div>
      :
      <div>
        {perc}
      </div>
      }
      {/* <h2>What you must RP out</h2> */}
      {this.state.lossOfLimb ?
      <div>
        <p>The book bites right down through the arm of {user}, tearing it clean off.</p>
        <p>{user} is now missing an arm.</p>
        <p>Satified, the book clatters to the ground, allowing {user} to leave.</p>
      </div>
      : null}

      {this.state.complete ?
        <div>
          <h2>Exits</h2>
            <div className="room-list">
              <Link to='/treehousealter'>Treehouse Alter Room</Link>
              <Link to='/treehouseoverlook'>Treehouse Overlook</Link>
            </div>
        </div>
      : 
        <p>Please continue above in order to proceed.</p>
      }
    </div>
    )
  }
}
