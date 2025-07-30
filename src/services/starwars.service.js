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
      throw new Error('Failed to fetch getAPIPeople data', error);
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
      const response = await axios.get(
        `${baseURL}${peopleAttributesURL}?page=${attribute}&limit=10`
      );
      // On ne garde que les infos de base
      const characters = response.data.results.map((person) => ({
        id: person.uid,
        name: person.name,
        url: person.url,
      }));

      return {
        totalRecords: response.data.total_records,
        totalPages: response.data.total_pages,
        characters,
      };
    } catch (error) {
      console.error('error getAPIPeople', error);
      throw error;
    }
  }
  /**
   * Make request to get the characters informations with a given ID and endpoints
   * Some value in the person object are URL & not string, so we need to use an other method : getAPIData(fullURL).
   * Value concerned : homeworld, films & vehicles
   * / 
  // async getAPIPeople() {
  //   try {
  //     const response = await axios.get(`${baseURL}${peopleAttributesURL}?page=1&limit=100`);
  //     const results = response.data.results;

  //     const detailsResponses = await axios.all(
  //       results.map((person) => axios.get(person.url))
  //     );

  //     const charactersWithDetails = detailsResponses.map((res) => {
  //       const detail = res.data.result.properties;
  //       return {
  //         id: res.data.result.uid,
  //         name: detail.name,
  //         height: detail.height,
  //         gender: detail.gender,
  //         ...detail,
  //       };
  //     });

  //     return {
  //       totalRecords: response.data.total_records,
  //       totalPages: Math.ceil(response.data.total_records / 10),
  //       characters: charactersWithDetails,
  //     };

  //   } catch (error) {
  //     console.log('error getAPIPeople', error);
  //     throw new Error('Failed to fetch getAPIPeople data', error);
  //   }
  // }

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
      const response = await axios.get(`${baseURL}${peopleAttributesURL}${id}`);
      const properties = response.data.result?.properties;
      const uid = response.data.result?.uid;
      result = { ...properties, id: uid };

      if (response) {
        result = { ...properties, id: uid };
      }

      //   if (result.homeworld === undefined) {
      //     result.homeworld = 'N/A';
      //   }
      //   const homeworldDetail = await this.getAPIData(result.homeworld);
      //   console.log('homeworldDetail', homeworldDetail.result.properties);
      //     const planet = { homeworld: homeworldDetail.result.properties.name };
      //     result.planet = planet.homeworld;

      // Homeworld
      if (result.homeworld === undefined || result.homeworld === null) {
        result.homeworld = 'N/A';
      }
      const getHomeworld = await this.getAPIData(result.homeworld);
      const homeworldDetail = { homeworld: getHomeworld.result.properties };
      // console.log('homeworldDetail', homeworldDetail);
      result.homeworld = homeworldDetail.homeworld;

      //   let filmsArray = [];
      //   let films;

      //   const filmsResult = await result.films;

      //   await Promise.all(
      //     filmsResult.map(async (filmURL) => {
      //       const filmsStringArray = await this.getAPIData(filmURL);

      //       filmsArray.push(filmsStringArray.title);
      //       films = filmsArray.join(' , ');
      //       films = { films: films };

      //       return films;
      //     })
      //   );

      //   if (Array.isArray(result.films)) {
      //     const films = await Promise.all(
      //       result.films.map(async (filmURL) => {
      //         const filmDetails = await this.getAPIData(filmURL);
      //         return filmDetails.title || 'N/A';
      //       })
      //     );
      //     result.films = films.join(', ');
      //   }

      // Films (look in /films)
      const getFilms = await axios.get(`${baseURL}films`);
      const filmsList = getFilms.data.result;
      const characterUrl = `${baseURL}people/${id}`;

      const filmsForCharacter = filmsList
        .filter((film) => film.properties.characters.includes(characterUrl))
        .map((film) => film.properties.title);

      result.films = filmsForCharacter.length
        ? filmsForCharacter.join(', ')
        : 'N/A';

      // Vehicles
      //   let vehiclesArray = [];
      //   let vehicles;

      //   const vehiclesResult = await result.vehicles;

      //   // if the person haven't vehicles
      //   if (vehiclesResult.length === undefined) {
      //     vehicles = { vehicles: 'N/A' };
      //   }

      //   await Promise.all(
      //     vehiclesResult.map(async (vehicleURL) => {
      //       const vehiclesStringArray = await this.getAPIData(vehicleURL);

      //       vehiclesArray.push(vehiclesStringArray.name);
      //       vehicles = vehiclesArray.join(' , ');
      //       vehicles = { vehicles: vehicles };

      //       return vehicles;
      //     })
      //   );

      // result = { ...result, ...planet, ...films, ...vehicles };
      //   console.log('result', result);
      return result;
    } catch (error) {
      console.log('error getAPIPersonById', error);
    }
  }
}

export default new StarwarsService();
