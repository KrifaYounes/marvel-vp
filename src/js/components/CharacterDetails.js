import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCharacters } from '../actions/characters-actions';


class CharacterDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const characterId = this.props.match.url;
        this.props.loadCharacters(characterId);
    }

    render() {
        const { characters, isLoading } = this.props;

        if (isLoading) {
            return ( <div> Loading </div>);
        } else {

            const character = characters[0];
            const imgSource = character ? character.thumbnail.path + '.' + character.thumbnail.extension : '';
            const description = character ? character.description : '';
            const name = character ? character.name : '';

            const series = character ? character.series.items.map(serie => {
                    return ( <li><a href={serie.resourceURI}>{serie.name}</a></li>)
                })

                : 'No series';

            const comics = character ? character.comics.items.map(serie => {
                    return ( <li><a href={serie.resourceURI}>{serie.name}</a></li>)
                })

                : 'No comics';


            return (
                <div>
                    <div className='character'>
                        <img src={imgSource}/>
                    </div>
                    <div>
                        {name}
                    </div>
                    <div>
                        {description}
                    </div>
                    <div>
                        <h3> Series </h3>
                        {series}
                    </div>
                    <div>
                        <h3> Comics </h3>
                        {comics}
                    </div>
                </div>
            );
        }
    }}


function mapStateToProps(state) {
    const characters = state.charactersReducer.characters;
    const isLoading = state.charactersReducer.isLoading;

    return {
        characters,
        isLoading
    };
}

export default connect(mapStateToProps, { loadCharacters } )(CharacterDetails);

