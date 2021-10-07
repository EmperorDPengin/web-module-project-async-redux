import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/animeActions';

export const initialState = {
    animes: [],
    isFetching: false,
    error: ''
}

const animeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                animes: [],
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                animes: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                animes: [],
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default animeReducer;