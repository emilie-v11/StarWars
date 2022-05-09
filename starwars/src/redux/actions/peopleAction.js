import { peopleAttributesURL } from '../../services/API-attributesURL';
import StarwarsService from '../../services/starwars.service';
import {
    GET_PEOPLE,
    GET_PEOPLE_FAIL,
    GET_PEOPLE_SUCCESS,
    GET_PERSON_BY_ID,
    GET_PERSON_BY_ID_FAIL,
    GET_PERSON_BY_ID_SUCCESS,
} from './types';

export const getPeople = option => dispatch => {
    return StarwarsService.getAPIData(peopleAttributesURL + option).then(
        response => {
            dispatch({
                type: GET_PEOPLE,
            });

            dispatch({
                type: GET_PEOPLE_SUCCESS,
                payload: response,
            });
        },
        error => {
            dispatch({
                type: GET_PEOPLE_FAIL,
                payload: error,
            });
            console.log('Fail to getPeople', error);
        }
    );
};

export const getPersonById = id => dispatch => {
    return StarwarsService.getCharacterById(id).then(
        response => {
            dispatch({
                type: GET_PERSON_BY_ID,
            });

            dispatch({
                type: GET_PERSON_BY_ID_SUCCESS,
                payload: response,
            });
            console.log(response);
        },
        error => {
            dispatch({
                type: GET_PERSON_BY_ID_FAIL,
                payload: error,
            });
            console.log('Fail to getPersonById', error);
        }
    );
};
