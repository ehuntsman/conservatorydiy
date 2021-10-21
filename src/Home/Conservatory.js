import React from 'react';
import { Link } from 'react-router-dom';

import conservatory from '../img/conservatory.jpg';

export default class Conservatory extends React.Component {
  state = {
    lowperception: false,
    midperception: false,
    highperception: false,
    showbuttons: true,
    freefromvines: false,
    complete: false
  }

  open01 = () => {
    this.setState({
      showbuttons: false,
      complete: true
    })
  }
  open02 = () => {
    this.setState({
      showbuttons: false,
      complete: true
    })
  }
  open03 = () => {
    this.setState({
      showbuttons: false,
      midperception: true,
      complete: true
    })
  }
  open04 = () => {
    this.setState({
      highperception: true,
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
      <p>The plants appear to be moving. There is a door in front of {user} that leads to an outside garden.</p>
    </div>
    if(this.state.midperception || this.state.highperception){
      perc = <div><p>The plants on the floor seem to be growing, though slow enough that there is no concern about getting tangled. There is a door on the far end of the room that appears to lead to an outside garden.</p><p>Through the mist and plants, {user} just barely makes out a door hidden behind a group of vines.</p></div>
    }
    return (
      <div>
      <h1>Leota's Conservatory</h1>
      <a href="https://www.youtube.com/watch?v=dTyqNu4vAf4" target="_blank" rel="noopener noreferrer">For ambience music, click here</a>
      <img className="headerimg" src={conservatory} alt="Conservatory" />
      <h2>What {user} sees:</h2>
      <p>Stepping through the hollow of the tree, following the spectral light, {user} finds themselves far from the misty forests of Farkath and instead finds a sign stating 'Leota's Conservatory' hangs above the doorway as {user} enters the glass domed room. Thick humidity hits {user},  making the air uncomfortable to breathe. Flora of all varieties fill the room, adding to the gloom of the greenhouse in various ways. Vines twist up and down throughout the structure, flowers and mosses covering nearly every surface.</p>
      <h2>Perception Roll:</h2>
      {this.state.showbuttons ?
        <div>
          <p>Please roll perception.</p>
          <button id="PercBut-01" onClick={() => this.open01()} className="button-list">Rolled lower than 10</button>
          <button id="PercBut-02" onClick={() => this.open02()} className="button-list">Rolled 10-15</button>
          <button id="PercBut-03" onClick={() => this.open03()} className="button-list">Rolled 16-20</button>
          <button id="PercBut-04" onClick={() => this.open04()} className="button-list">Rolled 20+</button>
        </div>
      :
      <div>
        {perc}
      </div>
      }
      {/* <h2>What you must RP out</h2> */}

      {this.state.complete ?
        <div>
          <h2>Exits</h2>
          {this.state.highperception || this.state.midperception ?
            <div className="room-list">
              <Link to='/outsidegarden'>Outside Garden</Link>
              <Link to='/southgate'>Hidden Left Door</Link>
            </div>
          :
            <div className="room-list">
              <Link to='/outsidegarden'>Outside Garden</Link>
            </div>
          }
        </div>
      : 
        <p>Please roll perception and select the correct roll above to proceed.</p>
      }
    </div>
    )
  }
}
