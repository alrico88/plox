export enum SearchType {
  Country = 'country',
  Region = 'region',
  Postcode = 'postcode',
  District = 'district',
  Place = 'place',
  Locality = 'locality',
  Neighborhood = 'neighborhood',
  Address = 'address',
  Poi = 'poi',
}

export interface SearchOptions {

  /**
   * The ISO code for a country to focus on
   *
   * @type {string}
   * @memberof SearchOptions
   */
  country?: string,

  /**
   * The ISO code for the language for the search
   *
   * @type {string}
   * @memberof SearchOptions
   */
  language?: string,

  /**
   * The max amount of results to obtain
   * Maximum supported by Mapbox is 10
   *
   * @type {number}
   * @memberof SearchOptions
   */
  limit?: number,

  /**
   * The type of places to search for
   *
   * @type {SearchType[]}
   * @link https://docs.mapbox.com/api/search/geocoding/#data-types
   * @memberof SearchOptions
   */
  types?: SearchType[]
}
