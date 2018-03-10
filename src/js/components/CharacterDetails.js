import React, { Component } from 'react';
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

            const imgSource = character.thumbnail.path + '.' + character.thumbnail.extension ;
            const description = character.description;
            const name = character.name;

            const series = character.series.items.length > 0 ? character.series.items.map(serie => {
                    return ( <li>{serie.name}</li> )
                }) : <li>Not available</li>;

            const comics = character.comics.items.length > 0 ? character.comics.items.map(comic => {
                    return ( <li>{comic.name}</li> )
            }) : <li>Not available</li>;

            return (
                <div>
                    <Grid>
                        <Row>

                            <Col>
                                <div className='character'>
                                    <img src={imgSource} alt="MARVEL"/>
                                </div>
                            </Col>

                            <Col>
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
                            <Col>
                                <div className="box-shadow">
                                    <h3> Series </h3>
                                    <ul>{series}</ul>
                                </div>
                            </Col>
                            <Col>
                                <div className="box-shadow">
                                    <h3> Comics </h3>
                                    <ul> {comics} </ul>
                                </div>
                            </Col>
                        </Row>
                    </Grid>

                </div>
            );
        }
    }

}


function mapStateToProps(state) {
    const characters = state.charactersReducer.characters;
    const isLoading = state.charactersReducer.isLoading;

    return {
        characters,
        isLoading
    };
}

export default connect(mapStateToProps, { loadCharacters } )(CharacterDetails);

