import React, { Component } from 'react';
import CharacterListing from './components/CharacterListing';
import CharacterDetails from './components/CharacterDetails';
import Header from './components/Header';

import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import store, { history } from './store/store';

import '../css/App.css';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>

                    <div className="App">

                        <Header />
                        <Route exact path='/' component={CharacterListing} />
                        <Route path='/:characterId' component={CharacterDetails} />

                    </div>

                </Router>
            </Provider>
        );
    }
}

export default App;
