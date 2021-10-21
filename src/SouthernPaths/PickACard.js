
import React, { Component } from 'react';
import $ from 'jquery';
import cardback from './back.png';

class PickACard extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [],
            oneSrc: cardback,
            twoSrc: cardback,
            threeSrc: cardback,
            oneMeaning: "",
            oneTitle: "",
            twoTitle: "",
            twoMeaning: "",
            threeTitle: "",
            threeMeaning: ""
        }
        this.setCards = this.setCards.bind(this);
        this.dealCards = this.dealCards.bind(this);
    }
    componentDidMount(){
        this.dealCards();
        this.setCards();
    }
    dealCards(){
        console.log('deal');
        $('.pickCard1').stop().animate(
            {
                'top': '0vh',
                'opacity': '1',
            },
            1000,
            'swing'
        );
        $('.pickCard2').stop().animate(
            {
                'top': '0vh',
                'opacity': '1',
            },
            1250,
            'swing'
        );
        $('.pickCard3').stop().animate(
            {
                'top': '0vh',
                'opacity': '1',
            },
            1500,
            'swing'
        );
    }
    setCards(){
        var arr = [];
        while(arr.length < 3){
            var randomnumber = Math.floor((Math.random()*21)+ 0);
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }
        this.setState({
            cards: arr
        })
        this.props.function(arr)
    };
    pickCardOne = () => {
        this.setState({
            oneSrc: this.props.tarot.tarot[this.state.cards[0]].card,
            oneMeaning: this.props.tarot.tarot[this.state.cards[0]].meaning,
            oneTitle: this.props.tarot.tarot[this.state.cards[0]].name
        })
    }
    pickCardTwo = () => {
        this.setState({
            twoSrc: this.props.tarot.tarot[this.state.cards[1]].card,
            twoMeaning: this.props.tarot.tarot[this.state.cards[1]].meaning,
            twoTitle: this.props.tarot.tarot[this.state.cards[1]].name
        })
    }
    pickCardThree = () => {
        this.setState({
            threeSrc: this.props.tarot.tarot[this.state.cards[2]].card,
            threeMeaning: this.props.tarot.tarot[this.state.cards[2]].meaning,
            threeTitle: this.props.tarot.tarot[this.state.cards[2]].name
        })
    }
    render() {
        return (
            <div>
                <p>Double click to flip your cards over</p>
                <div className="card-holder">
                    <div className= "pickCard1 card-base" onClick={() => this.pickCardOne()}>
                        <img className="card pickCard1 turnCompatible" src={this.state.oneSrc} alt='tarot card' />
                    </div>
                    <div className="pickCard2 card-base" onClick={() => this.pickCardTwo()}>
                        <img className="card pickCard2 turnCompatible" src={this.state.twoSrc} alt='tarot card' />
                    </div>
                    <div className="pickCard3 card-base" onClick={() => this.pickCardThree()}>
                        <img className="card pickCard3 turnCompatible" src={this.state.threeSrc} alt='tarot card' />
                    </div>
                </div>
                <div className="meanings">
                    <div className="meaning1">
                        <h2>{this.state.oneTitle}</h2>
                      <p>{this.state.oneMeaning}</p>
                    </div>
                    <div className="meaning2">
                        <h2>{this.state.twoTitle}</h2>
                      <p>{this.state.twoMeaning}</p>
                    </div>
                    <div className="meaning3">
                        <h2>{this.state.threeTitle}</h2>
                       <p>{this.state.threeMeaning}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PickACard;