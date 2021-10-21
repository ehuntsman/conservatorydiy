import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';

import Home from './Home/Home';
import Conservatory from './Home/Conservatory';
import OutsideGarden from './Home/OutsideGarden';
import SouthGate from './Home/SouthGate';
import CaveEntrance from './SouthernPaths/CaveEntrance';
import DarkForest from './SouthernPaths/DarkForest';
import FadeLunaFair from './SouthernPaths/FadeLunaFair';
import Carousel from './SouthernPaths/Carousel';
import FortuneTeller from './SouthernPaths/FortuneTeller';
import HallofMirrors from './SouthernPaths/HallofMirrors';
import TunnelofLove from './SouthernPaths/TunnelofLove';
import SwampBorder from './BayouPaths/SwampBorder';
import LilypadSwamp from './BayouPaths/LilypadSwamp';
import Bayou from './BayouPaths/Bayou';
import Admin from './Admin';
import Death from './Home/Death';
import Blackwater from './BayouPaths/Blackwater';
import BayouHouse from './BayouPaths/BayouHouse';
import BayouSouth from './BayouPaths/BayouSouth';
import BayouForest from './BayouPaths/BayouForest';
import Treehouse from './BayouPaths/Treehouse';
import TreehouseOverlook from './BayouPaths/TreehouseOverlook';
import FloralGardens from './GardenPaths/FloralGardens';
import GardenMaze from './GardenPaths/GardenMaze';
import MazeNorth from './GardenPaths/MazeNorth';
import MazeEast from './GardenPaths/MazeEast';
import RoseGarden from './GardenPaths/RoseGarden';
import ChessBoard from './ChessPaths/ChessBoard';
import King from './ChessPaths/King';
import Queen from './ChessPaths/Queen';
import Knight from './ChessPaths/Knight';
import AlchemyRoom from './BayouPaths/AlchemyRoom';
import BayouDock from './BayouPaths/BayouDock';
import TreehouseAlter from './BayouPaths/TreehouseAlter';
import ReflectionPool from './GardenPaths/ReflectionPool';
import SecretGarden from './GardenPaths/SecretGarden';

export default class App extends Component {
  state = {
    userName: ""
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
      {/* <header className="App-header">
        <Link to="/admin">admin link for testing</Link>
      </header> */}
      <section className="sidebar">
        <form>
          <input
            value={this.state.userName}
            type="text" 
            name="userName" 
            placeholder="Character Name" 
            onChange={e => this.handleChange(e)} 
            />
          <label>Character Name</label>
        </form>
        <h6>If you have any questions, please notify QM-Cipher or FW-Leviathan.</h6>
        <p></p>
        <h6>If you have questions, comments, or run into what you believe to be a bug, please contact QM-Cipher.</h6>
      </section>
      <section className="mainbody">
        <Switch>
          <Route exact path='/' render={() => <Home parentState={this.state} /> }/>
          <Route path="/admin" component={Admin} />
          <Route path='/conservatory' render={() => <Conservatory parentState={this.state} />} />
          <Route path='/outsidegarden' render={() => <OutsideGarden parentState={this.state} />} />
          <Route path='/southgate' render={() => <SouthGate parentState={this.state} />} />
          <Route path='/end' render={() => <Death parentState={this.state} />} />

          {/* south path */}
          <Route path='/caveentrance' render={() => <CaveEntrance parentState={this.state} />} />
          <Route path='/darkforest' render={() => <DarkForest parentState={this.state} />} />
          <Route path='/fadeluna' render={() => <FadeLunaFair parentState={this.state}/>} />
          <Route path='/carousel' render={() => <Carousel parentState={this.state}/>} />
          <Route path="/fortuneteller" render={() => <FortuneTeller parentState={this.state}/>}/>
          <Route path="/hallofmirrors" render={() => <HallofMirrors parentState={this.state}/>} />
          <Route path="/tunneloflove" render={() => <TunnelofLove parentState={this.state}/> }/>

          {/* swamp path */}
          <Route path='/swampborder' render={() => <SwampBorder parentState={this.state} />} />
          <Route path='/lilypadswamp' render={() => <LilypadSwamp parentState={this.state} />} />
          <Route path='/bayou' render={() => <Bayou parentState={this.state} />} />
          <Route path='/blackwater' render={() => <Blackwater parentState={this.state} />} />
          <Route path='/bayouhouse' render={() => <BayouHouse parentState={this.state} />} />
          <Route path='/bayousouth' render={() => <BayouSouth parentState={this.state} />} />
          <Route path='/bayouforest' render={() => <BayouForest parentState={this.state} />} />
          <Route path="/treehouse" render={() => <Treehouse parentState={this.state}/>} />
          <Route path='/treehouseoverlook' render={() => <TreehouseOverlook parentState={this.state}/>} />
          <Route path='/treehousealter' render={() => <TreehouseAlter parentState={this.state}/>} />
          <Route path='/alchemyroom' render={() => <AlchemyRoom parentState={this.state}/>} />
          <Route path='/bayoudock' render={()=> <BayouDock parentState={this.state}/>} />

          {/* Gardens Path */}
          <Route path='/floralgardens' render={() => <FloralGardens parentState={this.state}/>} />
          <Route path='/gardenmaze' render={() => <GardenMaze parentState={this.state}/>} />
          <Route path='/mazenorth' render={() => <MazeNorth parentState={this.state}/>} />
          <Route path='/mazeeast' render={() => <MazeEast parentState={this.state}/>} />
          <Route path='/reflectionpool' render={() => <ReflectionPool parentState={this.state}/>} />
          <Route path='/rosegarden' render={() => <RoseGarden parentState={this.state}/>} />
          <Route path='/secretgarden' render={() => <SecretGarden parentState={this.state}/>} />

          {/* Chess Path */}
          <Route path='/chessboard' render={() => <ChessBoard parentState={this.state}/>}/>
          <Route path='/king' render={() => <King parentState={this.state}/>} />
          <Route path='/queen' render={() => <Queen parentState={this.state}/>} />
          <Route path='/knight' render={() => <Knight parentState={this.state}/>} />
        </Switch>
      </section>
    </div>
    )
  }
}

