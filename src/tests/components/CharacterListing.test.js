import React from 'react';
import CharacterListing from '../../js/components/CharacterListing';
import { shallow } from 'enzyme';
import enzymeToJSON from 'enzyme-to-json';
import store from '../../js/store/store';

test('CharacterListing Component Snapshot', () => {
    const characters = [
        {
            urls : [],
            thumbnail : {
                path : 'http://marvel.com/image',
                extension: 'jpeg'
            },
            descriptoin: 'Marvel Heroe Description',
            name: 'Marvel Heroe Name'
        },
        {
            urls : [],
            thumbnail : {
                path : 'http://marvel.com/image',
                extension: 'jpeg'
            },
            descriptoin: 'Marvel Heroe Description 2',
            name: 'Marvel Heroe Name 2'
        }

    ];

    const wrapper = shallow(<CharacterListing characters={characters} isLoading={false} store={store}/>);
    //must match the snapshot

    expect(enzymeToJSON(wrapper)).toMatchSnapshot();
});


test('CharacterListing Component Snapshot without characters', () => {
    const characters = null;

    const wrapper = shallow(<CharacterListing characters={characters} isLoading={false} store={store}/>);
    //must match the snapshot

    expect(enzymeToJSON(wrapper)).toMatchSnapshot();
});


test('CharacterListing Component Snapshot Loading', () => {
    const characters = null;

    const wrapper = shallow(<CharacterListing characters={characters} isLoading={true} store={store}/>);
    //must match the snapshot

    expect(enzymeToJSON(wrapper)).toMatchSnapshot();
});
