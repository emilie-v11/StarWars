import { GET_PEOPLE, GET_PEOPLE_FAIL, GET_PEOPLE_SUCCESS } from '../actions/types';

const initialState = {
    isLoading: true,
    error: null,
    currentPage: 1,
    characters: [],
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
                characters: payload.results,
                currentPage:
                    payload.previous !== null ? Number(payload.previous.substr(-1)) + 1 : Number(1),
                // : Number(payload.next.substr(-1)) - 1,
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
