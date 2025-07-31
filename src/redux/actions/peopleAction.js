import { peopleAttributesURL } from '@/services/API-attributesURL';
import StarwarsService from '@/services/starwars.service';
import {
  GET_PEOPLE,
  GET_PEOPLE_FAIL,
  GET_PEOPLE_SUCCESS,
  GET_PERSON_BY_ID,
  GET_PERSON_BY_ID_FAIL,
  GET_PERSON_BY_ID_SUCCESS,
} from './types';

/**
 * Redux Actions for manage the recuperation of the data for all People and one person by ID
 * @property {function} getPeople - option @param - function for all people data, use Starwars service file and API attributes
 * @property {function} getPersonById - id @param -  function for one person by ID, use Starwars service file and API attributes
 */

export const getPeople = (option) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PEOPLE,
    });

    const response = await StarwarsService.getApiAllPeople(option);

    dispatch({
      type: GET_PEOPLE_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_PEOPLE_FAIL,
      payload: error,
    });
    console.log('Fail to getPeople', error);
  }
};

export const getPersonById = (id) => (dispatch) => {
  return StarwarsService.getApiPersonById(id).then(
    (response) => {
      dispatch({
        type: GET_PERSON_BY_ID,
      });

      dispatch({
        type: GET_PERSON_BY_ID_SUCCESS,
        payload: response,
      });
    },
    (error) => {
      dispatch({
        type: GET_PERSON_BY_ID_FAIL,
        payload: error,
      });
      console.log('Fail to getPersonById', error);
    }
  );
};
