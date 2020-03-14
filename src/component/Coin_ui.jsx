import React, { Component } from 'react'
import './coin.css'


class Coin_ui extends Component {
    render() { 
        return ( 
            <div>
                <img src={this.props.info.imgSrc} alt={this.props.info.altSide}/>
            </div>
         );
    }
}
 
export default Coin_ui;