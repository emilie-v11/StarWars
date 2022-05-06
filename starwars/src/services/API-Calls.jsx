import axios from 'axios';

/**
 * API URL, API Starwars.
 * @property {string} baseURL - URL to the API
 */
const baseURL = axios.create({
    baseURL: 'http://swapi.dev/api/',
});

/**
 * Make request to get the characters informations with a given ID and endpoints
 * @param {number} id
 * @param {string} endpoint
 *
 * @returns data's characters informations about endpoints to API
 */
export const getCharacterData = (endpoint, id) => baseURL.get(`/${endpoint}/${id}`);
