import React, {Component} from 'react';
import Background from './img/bg-masthead.jpg';
import './Header.css';

const myStyles  = {
    backgroundImage: `url( ${Background} )`,
    height: '80vh',
    backgroundSize: 'cover'
}


class Header extends Component<{title: string, button: string}> {


    render(){
        return(
            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <p>A Free Bootstrap Theme by Start Bootstrap</p>
                <a href="#button">{this.props.button}</a>
            </header>
        );
    }

};

export default Header;