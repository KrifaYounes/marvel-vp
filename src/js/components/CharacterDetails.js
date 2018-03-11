import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCharacters } from '../actions/characters-actions';
import { Grid, Row, Col } from 'react-flexbox-grid';


class CharacterDetails extends Component {
    componentDidMount() {
        const characterId = this.props.match.url;
        this.props.loadCharacters(characterId);
    }

    render() {
        const { characters, isLoading } = this.props;
        const character = characters[0];

        if (isLoading) {
            return ( <div> Loading </div>);
        } else if (!character) {
            return ( <div> Heroe Not Found </div>);

        } else {
            const { name, description, thumbnail, series, comics} = character;
            const imgSource = thumbnail.path + '.' + thumbnail.extension ;

            const serieItems = series.items.map( (serie, index) => {
                    return ( <li key={index}>{serie.name}</li> )
                });

            const comicItems = comics.items.map( (comic, index) => {
                    return ( <li key={index}>{comic.name}</li> )
            });

            return (
                <div>
                    <Grid>
                        <Row>
                            <Col>
                                <div className='character'>
                                    <img src={imgSource} alt="MARVEL"/>
                                </div>
                            </Col>

                            <Col xs={8}>
                                <div className="character-description">
                                    <div>
                                        {name}
                                    </div> <br/>
                                    <div>
                                        {description}
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Column title ="Series" items={serieItems} />
                            <Column title ="Comics" items={comicItems} />
                        </Row>
                    </Grid>

                </div>
            );
        }
    }

}


const Column = ({title, items}) => (
    <Col xs={6}>
        <div className="box-shadow">
            <h3> {title} </h3>
            <ul> {items.length > 0 ? items : 'Not available'} </ul>
        </div>
    </Col>
);


CharacterDetails.CharacterDetails = {
    characters: PropTypes.object,
    isLoading: PropTypes.bool
};

function mapStateToProps(state) {
    const characters = state.charactersReducer.characters;
    const isLoading = state.charactersReducer.isLoading;

    return {
        characters,
        isLoading
    };
}

export default connect(mapStateToProps, { loadCharacters } )(CharacterDetails);

