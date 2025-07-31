import axios from 'axios';
import { baseURL } from './API-baseURL';
import { peopleAttributesURL } from './API-attributesURL';

/**
 * Class with method for the API Calls
 * @class {class} StarwarsService
 * @method async getAPIData
 * @method async getApiAllPeople
 * @method async getApiPersonById
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

  constructor() {
    this.cachedPeople = null;
  }
  async getAPIData(fullURL) {
    try {
      const response = await axios.get(fullURL);
      return response.data;
    } catch (error) {
      console.log('error getApiAllPeople', error);
      throw new Error('Failed to fetch getApiAllPeople data', error);
    }
  }

  /**
   * Make request to get all the characters informations with an endpoints
   * @param {string} baseURL + endpoint + page + number
   *
   * @returns data's characters informations about endpoints to API
   */
  async getApiAllPeople() {
    if (this.cachedPeople) {
      return { characters: this.cachedPeople };
    }

    try {
      const response = await axios.get(`${baseURL}${peopleAttributesURL}`);
      const allPeople = response.data;

      const characters = allPeople.map((person) => {
        const idMatch = person.url.match(/people\/(\d+)/);
        return {
          id: idMatch ? Number(idMatch[1]) : null, //? idMatch[1] : null,
          ...person,
        };
      });
      console.log('characters', characters);

      this.cachedPeople = characters;
      return {
        characters,
      };
    } catch (error) {
      console.error('error getApiAllPeople', error);
      throw error;
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
  async getApiPersonById(id) {
    try {
      if (!this.cachedPeople) {
        await this.getApiAllPeople();
      }

      const charactersById = this.cachedPeople.find(
        (person) => person.id === Number(id)
      );
      console.log('charactersById', charactersById);

      if (!charactersById) {
        throw new Error(`Character with ID ${id} not found`);
      }

      const result = { ...charactersById };
      console.log('result', result);

      // Homeworld cache
      if (
        result.homeworld === undefined ||
        result.homeworld === null ||
        result.homeworld.length === 0
      ) {
        result.homeworld = 'Unknown';
      }
      if (result.homeworld && typeof result.homeworld === 'string') {
        if (!this.cachedHomeworlds) this.cachedHomeworlds = {};
        if (!this.cachedHomeworlds[result.homeworld]) {
          const homeworldData = await this.getAPIData(result.homeworld);
          this.cachedHomeworlds[result.homeworld] = homeworldData.name;
        }
        result.homeworld = this.cachedHomeworlds[result.homeworld];
      }

      // Films cache
      if (
        result.films === undefined ||
        result.films === null ||
        result.films.length === 0
      ) {
        result.films = 'Unknown';
      }
      if (Array.isArray(result.films)) {
        if (!this.cachedFilms) this.cachedFilms = {};
        const filmsTitles = await Promise.all(
          result.films.map(async (filmUrl) => {
            if (!this.cachedFilms[filmUrl]) {
              const filmData = await this.getAPIData(filmUrl);
              this.cachedFilms[filmUrl] = filmData.title;
            }
            return this.cachedFilms[filmUrl];
          })
        );
        result.films = filmsTitles.join(', ');
      }

      // Vehicles cache
      if (
        result.vehicles === undefined ||
        result.vehicles === null ||
        result.vehicles.length === 0
      ) {
        result.vehicles = 'Unknown';
      }
      if (Array.isArray(result.vehicles)) {
        if (!this.cachedVehicles) this.cachedVehicles = {};
        const vehiclesTitles = await Promise.all(
          result.vehicles.map(async (vehicleUrl) => {
            if (!this.cachedVehicles[vehicleUrl]) {
              const vehicleData = await this.getAPIData(vehicleUrl);
              this.cachedVehicles[vehicleUrl] = vehicleData.name;
            }
            return this.cachedVehicles[vehicleUrl];
          })
        );
        result.vehicles = vehiclesTitles.join(', ');
      }

      return result;

    } catch (error) {
      console.log('error getApiPersonById', error);
    }
  }
}

export default new StarwarsService();
