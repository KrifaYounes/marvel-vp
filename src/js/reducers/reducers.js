import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import {
    LOAD_CHARACTERS,
    LOAD_CHARACTERS_ERROR,
    LOAD_CHARACTERS_SUCCESS
} from '../constants/app-const';


const initialState = {
    characters: [],
    isLoading: false
};

const charactersReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_CHARACTERS:
            return Object.assign({}, state, {
                isLoading: true
            });

        case LOAD_CHARACTERS_SUCCESS:
            return Object.assign({}, state, {
                characters: action.payload.results,
                isLoading: false
            });

        case LOAD_CHARACTERS_ERROR:
            return Object.assign({}, state, {
                characters: [],
                isLoading: false
            });

        default:
            return state;
    }
};

const reducers = combineReducers({
    marvelState: charactersReducer,
    routing: routerReducer
});

export default reducers;