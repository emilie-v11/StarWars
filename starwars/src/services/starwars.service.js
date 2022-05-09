import axios from 'axios';
import { baseURL } from './API-baseURL';
import { peopleAttributesURL } from './API-attributesURL';

class StarwarsService {
    /**
     * Make request to get all the characters informations with an endpoints
     * @param {string} endpoint
     *
     * @returns data's characters informations about endpoints to API
     */
    async getAPIData(attribute) {
        try {
            const response = await axios.get(baseURL + attribute);
            console.log(response.data, response.data.results);
            return response.data;
        } catch (error) {
            console.log('error getAPIData', error);
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
            const response = await axios.get(baseURL + peopleAttributesURL + `${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log('error getCharacterById', error);
        }
    }
}

export default new StarwarsService();
