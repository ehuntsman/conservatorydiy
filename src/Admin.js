import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin page for testing</h1>
        <h2>All links</h2>
        <p>Red means not done. Green means finished.</p>
        <h4>Starting Path</h4>
        <Link className="button-list not" to='/'>Home</Link>
        <Link className="button-list finished" to='/conservatory'>Conservatory</Link>
        <Link className="button-list finished" to='/outsidegarden'>Outside Garden</Link>
        <Link className="button-list finished" to='/southgate'>South Gate</Link>
        <Link className="button-list finished" to='/end'>Death</Link>
        <hr/>
        <h4>South Path</h4>
        <Link className="button-list finished" to='/caveentrance'>Cave Entrance</Link>
        <Link className="button-list finished" to='/darkforest'>Dark Forest</Link>
        <Link className="button-list finished" to="/fadeluna">Fade Luna Fair</Link>
        <Link className="button-list finished" to="/carousel">Carousel</Link>
        <Link className="button-list finished" to="/fortuneteller">Fortune Teller</Link>
        <Link className="button-list finished" to="/hallofmirrors">Hall of Mirrors</Link>
        <Link className="button-list finished" to="/tunneloflove">Tunnel of Love</Link>
        <hr/>
        <h4>Swamp Path</h4>
        <Link className="button-list finished" to='/swampborder'>Swamp Border</Link>
        <Link className="button-list finished" to='/lilypadswamp'>Lilypad Swamp</Link>
        <Link className="button-list finished" to='/bayou'>Bayou</Link>
        <Link className="button-list finished" to='/blackwater'>Blackwater Bayou</Link>
        <Link className="button-list finished" to='/bayouhouse'>Bayou House</Link>
        <Link className="button-list finished" to='/bayousouth'>Bayou South</Link>
        <Link className="button-list finished" to='/bayouforest'>Bayou Forest</Link>
        <Link className="button-list finished" to="/treehouse">Treehouse</Link>
        <Link className="button-list finished" to='/treehouseoverlook'>Treehouse Overlook</Link>
        <Link className="button-list finished" to="/bayoudock">Bayou Dock</Link>
        <Link className="button-list finished" to="/alchemyroom">Alchemy Room</Link>
        <Link className="button-list finished" to="/treehousealter">Treehouse Alter</Link>
        <hr/>
        <h4>Garden Path</h4>
        <Link className="button-list finished" to='/floralgardens'>Floral Gardens</Link>
        <Link className="button-list finished" to="/gardenmaze">Garden Maze</Link>
        <Link className="button-list finished" to="/mazenorth">Maze North</Link>
        <Link className="button-list finished" to="/mazeeast">Maze East(mushrooms)</Link>
        <Link className="button-list finished" to="/reflectionpool">Reflection Pool</Link>
        <Link className="button-list finished" to="/rosegarden">Rose Garden</Link>
        <Link className="button-list finished" to="/secretgarden">Secret Garden</Link>
        <hr/>
        <h4>Chess Path</h4>
        <Link className="button-list finished" to="/chessboard">Chess Board</Link>
        <Link className="button-list finished" to="/knight">Knight</Link>
        <Link className="button-list finished" to="/queen">Queen</Link>
        <Link className="button-list not" to="/king">King (temp removed)</Link>
      </div>
    )
  }
}
