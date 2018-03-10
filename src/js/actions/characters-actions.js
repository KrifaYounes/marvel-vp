import axios from 'axios';
import crypto from 'crypto-js';

import {
    LOAD_CHARACTERS,
    LOAD_CHARACTERS_ERROR,
    LOAD_CHARACTERS_SUCCESS,
    BASE_URL,
    API_PUBLIC,
    API_PRIVATE,
    CHARACTERS_URL,
    HTTP_STATUS_OK
} from '../constants/app-const';

export function loadCharacters(characterId = '', offset = 0, limit = 20) {

    return dispatch => {

        dispatch({ type: LOAD_CHARACTERS });

        const TIMESTAMP = new Date().getTime().toString();
        const HASH = crypto.MD5(TIMESTAMP.concat(API_PRIVATE).concat(API_PUBLIC)).toString();
        const params = {
            ts: TIMESTAMP,
            apikey: API_PUBLIC,
            hash:  HASH,
            offset: offset,
            limit: limit,
        };


        let URL = BASE_URL.concat(CHARACTERS_URL);

        if (characterId !== '') {
            URL = URL.concat('/').concat(characterId);
        }

        return axios.get(URL, { params: params})
            .then( response => {
                const jsonData = response.data;

                if (jsonData.code === HTTP_STATUS_OK) {
                    dispatch({ type: LOAD_CHARACTERS_SUCCESS, payload: jsonData.data });
                } else {
                    dispatch({ type: LOAD_CHARACTERS_ERROR, error: 'HTTP STATUS NOT OK' })
                }

            }).catch(error =>
                dispatch({ type: LOAD_CHARACTERS_ERROR, error })
            );
    }

}
