import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
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
      <div>
      <h1>Welcome to the Halloween DIY Quest</h1>
      {this.props.parentState.userName ?
      <Link to="/conservatory">{this.props.parentState.userName} goes through the hollow tree.</Link>
      :
      <p>Please type in your Character Name in the top left in order to start.</p>}
      <h2>Please read everything below before starting.</h2>
      <p>This is a highly repeatable DIY quest. Starting in the hollow tree, you will choose your path. Please know that once you move forward you <b>cannot turn back</b>. You must follow the instructions on each page, RPing out the events and rolling when the page calls for it.</p>
      <p>Eventually you will reach an end of the path, which will take you back to the hollow tree. If you leave the quest at anytime, you <b>cannot</b> return to where you left off. You must start at the begining.</p>
      <p>Please do not use the back button, or play around with the website to see the other outcomes. The point of the DIY quest is to explore and find out things as they happen.</p>
      <h2>How to play</h2>
      <p>As you play through the Halloween DIY, you must play it in one of the #daervyn overflow or #overflow channels. In order for your runthrough to count, you must tag QM-Cipher when you start a run.</p>
      <p><b>This website is not where you play.</b> It is mearly a tool of sorts to help guide you through. If you do not post about it, it doesn't happen. End of story.</p>
      <p>When you start, you will be given options. These may be anything from rolling perception, agility, talking to a NPC or even just moving ahead to the next room.</p>
      <p>When you go to a new area, there will be a description. For example, the first area you start in will be the hollow tree. You do not need to copy/paste this description, but you should RP going into that room. This can be as simple as "Bob walks into the hollow tree", but move favor will be given to those that RP.</p>
      <p>If you are asked to roll, please roll in the overlow channel you are currently in.</p>
      <p><b>Favor will be awarded based on RP efforts.</b> Everything will be read.</p>
      <p>Due to the nature of the story, please do not cheat and open other channels, instances or open rolls that you did not actually make. This will ruin the story for you and your friends as there is a database recording all information. If you are curious, I promise all areas will be unlocked at the end of this event.</p>
      <h2>If you are playing as a group:</h2>
      <p>Each of you may roll (if asked to), and you <i>can</i> RP telling eachother what you learn. Advice? Stick together. You *can* go different directions, but then they are considered seperate instances and you cannot regroup or talk to eachother and must move to seperate discord rooms.</p>
      <h3>Warning</h3>
      <p>Death or loss of limbs CAN occur in this adventure.</p>
      <p>If you die and no one is around to revive you, you will be brought back to life and placed in the house NO SOONER than 1 hour after death occurs (in real time please). Loss of limbs or other status effects must be taken care of the normal way.</p>
      <p>If you decide to take a NPC through this event, they can be spared from dying. This exception is ONLY extended to NPCs that were brought for significant other reasons (AKA a date or they valliantly arrived to try and rescue you). Children, pets, soulbound creatures or anything else of the nature still follow all the normal death rules. If you play this through with a NPC and they die, they can be found in the hollow tree in one hour real life time. HOWEVER - if a NPC loses a limb, that's real and they have to be treated for it like anyone else would.</p>
      <p>Flying is not permitted. If you try to fly, you will be magically whisked away from the game and placed back in the hollow tree with the manditory 1 hour cooldown. Illusion copies or trying to cheat the system/death by not being actually there is not allowed.</p>
      <h2>TL;DR</h2>
      <p>Post your RP and rolls in an Overflow Channel</p>
      <p>Tag QM:Cipher at the start of your quest</p>
      <p>More RP = More Favor</p>
      <p>Don't fly or use magic that breaks the narrative (i.e. burn down the hedge maze)</p>
      <p>NPC significant others won't die, but can lose limbs</p>
      <p>Message QM:Cipher with questions</p>
      <h2>There is a 1 hour manditory real time cooldown if you decide to not complete a runthrough, or if you die.</h2>
      <p>If you accept these terms, please proceed. Don't forget to tag @FW-Leviathan in your overflow channel before you start!</p>
      {this.props.parentState.userName ?
      <Link to="/conservatory">{this.props.parentState.userName} goes through the hollow tree.</Link>
      :
      <p>Please type in your Character Name in the top left in order to start.</p>}
    </div>
    )
  }
}
