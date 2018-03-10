import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-flexbox-grid';
import { loadCharacters } from '../actions/characters-actions';
import Character from './Character';

class CharacterListing extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadCharacters();
    }

    render() {
        const characters = this.props.characters.map( (character) => {
                return ( <Character character={character} /> );
            });

        return (
            <div>
                { !this.props.isLoading ?
                    <Grid>
                        <Row>
                            {characters}
                        </Row>
                    </Grid>

                    : 'Loading Marvel Heroes'

                }
            </div>
        );
    }}


function mapStateToProps(state) {
    const characters = state.charactersReducer.characters;
    const isLoading = state.charactersReducer.isLoading;

    return {
        characters,
        isLoading
    };
}

export default connect(mapStateToProps, { loadCharacters } )(CharacterListing);

