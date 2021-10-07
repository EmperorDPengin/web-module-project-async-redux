import axios from 'axios';
import { ANIME_URL } from '../data/data';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getData = (type) => dispatch => {
    dispatch(fetchStart());

    axios.get(`${ANIME_URL}/search/${type}?q=&order_by=members&sort=desc&page=1`)
        .then( response => {
            console.log(response.data.results);
            dispatch(fetchSuccess(response.data.results));
        })
        .catch(error => {
            dispatch(fetchFail(error));
        });
};

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (animes) => {
    return({type: FETCH_SUCCESS, payload:animes});
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload:error});
}