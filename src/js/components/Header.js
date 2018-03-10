import React, { PureComponent } from 'react';
import logo from '../../assets/images/marvel.jpg';


class Header extends PureComponent {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}


export default Header;