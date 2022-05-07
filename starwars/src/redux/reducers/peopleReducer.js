import { GET_PEOPLE, GET_PEOPLE_FAIL, GET_PEOPLE_SUCCESS } from '../actions/types';

const initialState = {
    // Characters: [],
    isLoading: true,
    error: null,
};

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
                Characters: payload,
                error: false,
            };

        case GET_PEOPLE_FAIL:
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
