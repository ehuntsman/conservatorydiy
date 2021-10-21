import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PickACard from './PickACard';

import cardback from './back.png';
import fool from './00fool.png';
import magician from './01magician.png';
import highpriestess from './02highpriestess.png';
import empress from './03empress.png';
import emperor from './04emperor.png';
import hierophant from './05hierophant.png';
import lovers from './06lovers.png';
import chariot from './07chariot.png';
import strength from './08strength.png';
import hermit from './09hermit.png';
import wheeloffortune from './10wheeloffortune.png';
import justice from './11justice.png';
import hangedman from './12hangedman.png';
import death from './13death.png';
import temperance from './14temperance.png';
import devil from './15devil.png'
import tower from './16tower.png';
import star from './17star.png';
import moon from './18moon.png';
import sun from './19sun.png';
import judgement from './20judgement.png';
import world from './21world.png';

export default class FortuneTeller extends Component {
  state = {
    chooseCard: false,
    fool: false,
    death: false,
    tower: false,
    empress: false,
    lovers: false,
    cardArray: [],
    tarot: [{name: "The Fool", meaning: "If you're single, a fun, wild, lively romance might be right around the corner. If you're in a relationship, it means you're so stoked about this love of yours that you are kind of freaking out over it, but not in a bad way! Embrace it. Gain a +1 to all charisma checks for the next 24 hours.", card: fool},
    {name: "The Magician", meaning: "The card means you will be given an idea, a solution to a problem, an ambitious career, a love life, or a job. You must trust in your big brain to help you find what you need and let the world open up to you. You gain a +1 to mental checks for the next 24 hours.", card: magician},
    {name: "The High Priestess", meaning: "The card means you will be given an idea, a solution to a problem, an ambitious career, a love life, or a job. You must trust in your big brain to help you find what you need and let the world open up to you. You gain +1 on ALL perception checks for the next 12 hours.", card: highpriestess},
    {name: "The Empress", meaning: "The card means you will be given an idea, a solution to a problem, an ambitious career, a love life, or a job. You must trust in your big brain to help you find what you need and let the world open up to you.", card: empress},
    {name: "The Emperor", meaning: "The card could symbolize either a demanding boss or a charismatic leader. You should decide whether what they are doing is unwelcome. A bad leader needs to move on. If you are a guild leader - beware. All who recieve this card take a -1 to mental checks for the next 24 hours.", card: emperor},
    {name: "The Hierophant", meaning: "This card means that you know how to solve your problem even though it isn't very easy. Take a +1 to all perception checks for the next 24 hours.", card: hierophant},
    {name: "The Lovers", meaning: "You may come across a divergence you dare not miss, no matter the difficulty, even if it is against your chosen path. Take a +2 to all agility checks for the next 12 hours.", card: lovers},
    {name: "The Chariot", meaning: "A new motivation to get a stagnant situation moving. It symbolizes that victory is coming and that you are one hundred percent in control of making it happen. You've got this. Take a +2 to all agility checks for the next 24 hours.", card: chariot},
    {name: "Strength", meaning: "Say goodbye to insecurities and low self-esteem and fight your way to the good stuff. You deserve it. Take a +3 to all strength checks for the next 24 hours.", card: strength},
    {name: "The Hermit", meaning: "You might be impatient with people who cannot see what you can see, and you may have a desire to be alone. If you are in a quest by yourself, you gain a +1 to all perception checks for 24 hours. If you are with others, you take a -1 penatalty to all perception checks for the next 24 hours.", card: hermit},
    {name: "Wheel of Fortune", meaning: "Just put in a little bit of effort to let love come to you. If you are in a relationship, maybe it's time to risk a bigger investment together and take the next big step, whatever that means for you. You recieve a +1 to all mental checks, but also a -1 to all perception checks for the next 12 hours.", card: wheeloffortune},
    {name: "Justice", meaning: "It means it is time to stand tall and strong against the things that might be trying to throw you off balance. Take a -2 pentalty to perception, but a +2 strength to all checks for the next 6 hours.", card: justice},
    {name: "The Hanged Man", meaning: "The card means it is time to stop resisting and gain illumination. Gain a +2 to all mental checks for the next 12 hours.", card: hangedman},
    {name: "Death", meaning: "Do not pass go. Do not collect $200.", card: death},
    {name: "Temperance", meaning: "You might also feel out of sync with the people you care about most. Take a -2 penalty to all mental checks for the next 12 hours.", card: temperance},
    {name: "The Devil", meaning: "The Devil card warns you not to be too restrained but to be passionate and ambitious. Take a +1 to all agility checks for the next 24 hours.", card: devil},
    {name: "The Tower", meaning: "You probably know this, but you have been procrastinating about making a big change. Take a -2 to all agility checks for the next 6 hours.", card: tower},
    {name: "The Star", meaning: "You have worked past hardships and you are ready to embrace what comes next. Stay calm, stay positive. Take a -1 to all agility checks for the next 24 hours.", card: star},
    {name: "The Moon", meaning: "The card means you may be going through a time of emotional or mental trials. Take a -2 to all mental checks for the next 12 hours.", card: moon},
    {name: "The Sun", meaning: "Everything is looking up. You are going to have your day in the sun. Feel free to step into the spotlight with confidence. Take a +2 to all perception AND a +3 to all mental checks for the next 2 hours.", card: sun},
    {name: "Judgement", meaning: "You are hard on yourself and filled with the thought that you are incapable of doing what you need to. Take a -3 to all perception checks for the next 6 hours.", card: judgement},
    {name: "The World", meaning: "You may be frustrated and tempted to take a shortcut, but that will only lead to more frustration, and you won't be happy with the result. Take a -1 to all agility checks, but +1 to all perception checks for the next 12 hours.", card: world},
  ]
  }

  addCards = (arr) => {
    this.setState({
      cardArray: arr
    })
  }

  render() {
    let user = this.props.parentState.userName
    if(this.props.parentState.userName === ""){
      user = "the player character"
    }
    return (
      <div>
        <h1>Fortune Teller</h1>
        {/* <img className="headerimg" src={bayou} alt="Bayou" /> */}
        <h2>What {user} sees</h2>
        <p>{user} walks into a small wagon where there sits a circular side table holding a crystal ball. On the other side of the table sits an elderly woman who gently shuffles a deck of cards.</p>
        <p>If you say anything to her, she lays out three cards on the table, facedown, then looks at you expectantly.</p>
        <h3>All the effects of the cards stack. Keep track of your own penalties/buffs and their durations.</h3>
        <h2>Flip your cards</h2>
        <div className="pickAcard-container tarot-container">
          <PickACard tarot={this.state} function={this.addCards} />
        </div>
        <div>
          <h2>Exits</h2>
          {this.state.cardArray.includes(13) ?
          <Link className="button-list" to='/end'>Your path has been chosen for you.</Link>
          :
          <div className="room-list">
            <Link className="button-list" to='/conservatory'>You may go back to the Conservatory with no penatly</Link>
            <Link className="button-list" to="/fadeluna">Go may back to the Fair</Link>
            {this.state.cardArray.includes(14) ?
            <Link className="button-list" to="/rosegarden">Go may go directly to the Rose Garden</Link>
            :null}
            {this.state.cardArray.includes(3) ?
            <Link className="button-list" to="/treehouse">Go may go directly to the Treehouse</Link>
            :null}
          </div>}
        </div>
      </div>
    )
  }
}
