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
            const response = await axios.get(baseURL + `${'people'}/?${'undefined=&page=1'}`);
            console.log(response.data, response.data.results);
            // return response.data.results;
            return response.data;
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
            const response = await axios.get(baseURL + `${'people'}/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log('error getCharacterById', error);
        }
    }
}

export default new StarwarsService();
