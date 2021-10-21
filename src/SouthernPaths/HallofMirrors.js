import React from 'react'
import mirror from '../img/mirror.jpg';
import { Link } from 'react-router-dom';

export default class BayouDock extends React.Component {
  state = {
    readlips: false,
    rollperception: false
  }

  lost = () => {
    this.setState({
      rollperception: true,
    })
  }

  read = () => {
    this.setState({
      rollperception: true,
      readlips: true
    })
  }

  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Hall of Mirrors</h1>
        <img className="headerimg" src={mirror} alt="Hall of Mirrors" />
        <h2>What {user} sees</h2>
        <p>A seemingly endless maze of mirrors. Each reflection seems to be different that the last. In one, {user} is smiling. In another, they are terrified. In another, they are missing their mouth.</p>
        <p>As {user} continues through the maze, bumping into mirrors and seeing strange reflections, they start to notice that their relfection seems to be trying to mouth words to them.</p>
        <p>There are several expressions all around them. Happy, sad, scared, tired, dead, crying, angry... so many different expressions.</p>
        {!this.state.rollperception ?
          <div>
            <h2>Roll Insight or Perception (whichever is higher)</h2>
            <button onClick={() => this.lost()} className="button-list">Rolled a 16 or lower</button>
            <button onClick={() => this.read()} className="button-list">Rolled 17+</button>
          </div>
        :
        <div>
          {this.state.readlips ? <div><p>{user} can just start to make out what their reflection is telling them.</p>
          <p className="quote"><i>"Smiles and sadness with giggles and grins."</i></p>
          <p className="quote"><i>"There is only one expression where it begins."</i></p>
          <p className="quote"><i>"Smash it!"</i></p>
          <hr/>
          <p>Once you role play out what you will have done, darkness will surround {user} and they will be returned to the conservatory where they can start the quest over again (with no wait) or head back into the house.</p>
          <h2>Exits</h2>
          <div className="room-list">
            <Link to='/conservatory'>Conservatory</Link>
          </div>
          </div>
          : <div><p>{user} has no idea what their reflection is saying. They watch their reflection so closerly that they don't even notice the mirrors have all enclosing in around them before it's too late.</p>
          <Link to='/end'>The mirrors crush up against {user}.</Link>
          </div>}
        </div>}
      </div>
    )
  }
}


