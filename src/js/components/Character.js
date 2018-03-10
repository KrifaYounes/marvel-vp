import React, { PureComponent } from 'react';
import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

class Character extends PureComponent {

    render() {
        const character = this.props.character;
        const imgSource = character.thumbnail.path + '.' + character.thumbnail.extension;
        const urls = this.props.character.urls;

        const urlInfos = urls.map( url => {
            return (<a href={url.url}> {url.type} </a>)
        });

        return (
            <Col className='character'>
                <Link to={'/' + character.id } className='character-name'>
                    <div><img src={imgSource}  alt='MARVEL'/></div>
                    <div>{character.name}</div>
                </Link>

                <div className='urlInfos'>
                    { urlInfos }
                </div>
            </Col>
        );
    }
}

export default Character;