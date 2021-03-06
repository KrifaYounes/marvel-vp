import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-flexbox-grid';
import { loadCharacters } from '../actions/characters-actions';
import Character from './Character';

class CharacterListing extends Component {

    componentDidMount() {
        this.props.loadCharacters();
    }

    render() {
        const characters = this.props.characters.map( (character, index) => {
                return ( <Character key={index} character={character} /> );
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
    }
}

CharacterListing.propTypes = {
    characters: PropTypes.array,
    isLoading: PropTypes.bool
};

const mapStateToProps = ({marvelState}) => {
    const { characters, isLoading } = marvelState;

    return {
        characters,
        isLoading
    };
};


export default connect(mapStateToProps, { loadCharacters } )(CharacterListing);

