import axios from 'axios';
import { baseURL } from './API-baseURL';

class StarwarsService {
    /**
     * Make request to get all the characters informations with an endpoints
     * @param {string} endpoint
     *
     * @returns data's characters informations about endpoints to API
     */
    async getAllCharacters() {
        try {
            // const URL = 'https://swapi.dev/api/people';
            const response = await axios.get(baseURL + 'people');
            // const response = await axios.get(`${API_URL}/people`);
            // const response = await axios({
            //     method: 'get',
            //     url: API_URL + 'people',
            // });
            console.log(response.data.results);
            return response.data.results;
        } catch (error) {
            console.log('error getAllCharacters', error);
        }
    }

    /**
     * Make request to get the characters informations with a given ID and endpoints
     * @param {number} id
     * @param {string} endpoint
     *
     * @returns data's characters by ID informations about endpoints to API
     */
    async getCharacterById(id) {
        try {
            const response = await axios({
                method: 'get',
                url: baseURL + `${'people'}/${id}`,
            });
            return response.data;
        } catch (error) {
            console.log('error getCharacterById', error);
        }
    }
}

/**
 * Make request to get data informations to API with endpoints
 * @param {string} endpoint
 *
 * @returns data's characters informations about endpoints to API
 */

export default new StarwarsService();
