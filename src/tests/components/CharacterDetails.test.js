import React from 'react';
import CharacterDetails from '../../js/components/CharacterDetails';
import { shallow } from 'enzyme';
import enzymeToJSON from 'enzyme-to-json';
import store from '../../js/store/store';

test('CharacterDetails Component Snapshot', () => {
    const character = {
        urls : [],
        thumbnail : {
            path : 'http://marvel.com/image',
            extension: 'jpeg'
        },
        descriptoin: 'Marvel Heroe Description',
        name: 'Marvel Heroe Name'
    };

    const wrapper = shallow(<CharacterDetails character={character} isLoading={false} store={store}/>);
    //must match the snapshot

    expect(enzymeToJSON(wrapper)).toMatchSnapshot();
});


test('CharacterDetails Component Snapshot without character', () => {
    const character = null;

    const wrapper = shallow(<CharacterDetails character={character} isLoading={false} store={store}/>);
    //must match the snapshot

    expect(enzymeToJSON(wrapper)).toMatchSnapshot();
});


test('CharacterDetails Component Snapshot Loading', () => {
    const character = null;

    const wrapper = shallow(<CharacterDetails character={character} isLoading={true} store={store}/>);
    //must match the snapshot

    expect(enzymeToJSON(wrapper)).toMatchSnapshot();
});
