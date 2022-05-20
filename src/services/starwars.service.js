import axios from 'axios';
import { baseURL } from './API-baseURL';
import { peopleAttributesURL } from './API-attributesURL';

/**
 * Class with method for the API Calls
 * @class {class} StarwarsService
 * @method async getAPIData
 * @method async getAPIPeople
 * @method async getAPIPersonById
 *
 * @returns data's informations about API
 */

class StarwarsService {
    /**
     * Make request to get data for full URL API
     * This can be use for the data's to the people who are in the object info like an URL & not a string.
     * @param {string} full URL
     *
     * @returns data's informations about a full URL to API
     */
    async getAPIData(fullURL) {
        try {
            const response = await axios.get(fullURL);
            return response.data;
        } catch (error) {
            console.log('error getAPIPeople', error);
        }
    }

    /**
     * Make request to get all the characters informations with an endpoints
     * @param {string} baseURL + endpoint + page + number
     *
     * @returns data's characters informations about endpoints to API
     */
    async getAPIPeople(attribute) {
        try {
            const response = await axios.get(baseURL + attribute);
            return response.data;
        } catch (error) {
            console.log('error getAPIPeople', error);
        }
    }

    /**
     * Make request to get the characters informations with a given ID and endpoints
     * Some value in the person object are URL & not string, so we need to use an other method : getAPIData(fullURL).
     * Value concerned : homeworld, films & vehicles
     * @param {string} baseURL + endpoint
     * @param {number} + id
     *
     * @returns data's characters by ID informations about endpoints to API
     *
     */
    async getAPIPersonById(id) {
        let result = {};

        try {
            const response = await axios.get(baseURL + peopleAttributesURL + `${id}`);
            if (response) {
                result = { ...response.data };
            }

            const homeworld = await this.getAPIData(result.homeworld);
            const planet = { homeworld: homeworld.name };

            let filmsArray = [];
            let films;

            const filmsResult = await result.films;

            await Promise.all(
                filmsResult.map(async filmURL => {
                    const filmsStringArray = await this.getAPIData(filmURL);

                    filmsArray.push(filmsStringArray.title);
                    films = filmsArray.join(' , ');
                    films = { films: films };

                    return films;
                })
            );

            let vehiclesArray = [];
            let vehicles;

            const vehiclesResult = await result.vehicles;

            // if the person haven't vehicles
            if (vehiclesResult.lenght === undefined) {
                vehicles = { vehicles: 'N/A' };
            }

            await Promise.all(
                vehiclesResult.map(async vehicleURL => {
                    const vehiclesStringArray = await this.getAPIData(vehicleURL);

                    vehiclesArray.push(vehiclesStringArray.name);
                    vehicles = vehiclesArray.join(' , ');
                    vehicles = { vehicles: vehicles };

                    return vehicles;
                })
            );

            result = { ...result, ...planet, ...films, ...vehicles };
            return result;
        } catch (error) {
            console.log('error getAPIPersonById', error);
        }
    }
}

export default new StarwarsService();
