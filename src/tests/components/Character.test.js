import React from 'react';
import Character from '../../js/components/Character';
import { shallow } from 'enzyme';
import enzymeToJSON from 'enzyme-to-json';

test('Character Component Snapshot', () => {
    const character = {
        urls : [],
        thumbnail : {
            path : 'http://marvel.com/image',
            extension: 'jpeg'
        }
    };

    const wrapper = shallow(<Character character={character}/>);
    //must match the snapshot

    expect(enzymeToJSON(wrapper)).toMatchSnapshot();
});
