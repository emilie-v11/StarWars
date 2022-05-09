import {
    GET_PEOPLE,
    GET_PEOPLE_FAIL,
    GET_PEOPLE_SUCCESS,
    GET_PERSON_BY_ID,
    GET_PERSON_BY_ID_FAIL,
    GET_PERSON_BY_ID_SUCCESS,
} from '../actions/types';

const initialState = {
    isLoading: true,
    error: null,
    currentPage: 1,
    characters: [],
    person: {},
};

/**
 * Reducer for Redux - for Get People & Get Personn by ID
 * GET_PEOPLE & GET_PERSON_BY_ID : time between beginning of request and reception of the data - A SpinnerLoader is activateduring that time.
 * GET_PEOPLE_SUCCESS & GET_PERSON_BY_ID_SUCCESS : Request is a sucessful one - SpinnerLoader is stopped and the data stocked in Redux state.
 * GET_PEOPLE_FAIL & GET_PERSON_BY_ID_FAIL : The request is failed, an error is returned
 */

const people = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PEOPLE:
            return {
                ...state,
                isLoading: true,
                error: false,
            };

        case GET_PEOPLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                id: payload.results.url ? payload.results.url.slice(29) : payload.results.url,
                count: payload.count,
                characters: payload.results,
                currentPage:
                    payload.previous !== null ? Number(payload.previous.slice(-1)) + 1 : Number(1),
            };

        case GET_PEOPLE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
            };

        case GET_PERSON_BY_ID:
            return {
                ...state,
                isLoading: true,
                error: false,
            };

        case GET_PERSON_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                person: payload,
            };

        case GET_PERSON_BY_ID_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
            };

        default:
            return state;
    }
};

export default people;
