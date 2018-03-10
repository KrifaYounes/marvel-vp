import React, { PureComponent } from 'react';
import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

class Character extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const character = this.props.character;
        const imgSource = character.thumbnail.path + '.' + character.thumbnail.extension;
        const urls = this.props.character.urls;

        const urlInfos = urls.map( url => {
            return (<a href={url.url}> {url.type} </a>)
        });

        return (
            <Col className='character'>
                <img src={imgSource}  alt='MARVEL'/>
                <div>
                    <Link to={'/' + character.id }>{character.name}</Link>
                    <div className='urlInfos'>
                        { urlInfos }
                    </div>
                </div>
            </Col>
        );
    }
}

export default Character;