import React, { Component } from 'react'
import { choice } from "./helpers";
import CoinIg from './CoinIg'
import './coin.css';




class Coin extends Component {

    static defaultProps = {
    coins: [
            {altSide:'heads', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'},
            {altSide:'tails', imgSrc: 'https://www.magicdream.fr/media/catalog/product/cache/c5fb795b21623ff3de23c6f019a4396d/m/a/magie-piece-demi-dollar-aigle.jpg'}
        ]
    }
    constructor(props) {
        super(props);
        this.state = { 
            currCoin: null,
            nHeads: 0,
            nTails: 0,
            clickCount: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
          return {
            currCoin: newCoin,
            clickCount: st.clickCount + 1,
            nHeads: st.nHeads + (newCoin.altSide === "heads" ? 1 : 0),
            nTails: st.nTails + (newCoin.altSide === "tails" ? 1 : 0)
          };
        });
    }
    handleClick(e){
        this.flipCoin()
    }
    render() { 
        return ( 
            <div className="main">                
                <h2>Let's Flip A Coin!</h2>
                {this.state.currCoin && <CoinIg info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Click</button>
                <p>Out of <span>{this.state.clickCount}</span> flips. there have been <span>{this.state.nHeads}</span> heads. and <span>{this.state.nTails}</span> tails</p>
            </div>
        );
    }
}

export default Coin;