import StarwarsService from '../../services/starwars.service';
import { GET_PEOPLE, GET_PEOPLE_FAIL, GET_PEOPLE_SUCCESS } from './types';

export const getPeople = () => dispatch => {
    return StarwarsService.getAllCharacters().then(
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
            console.log('Fail to getAPIAllCharacters', error);
        }
    );
};

// export const get
