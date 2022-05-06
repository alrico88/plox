import { $fetch } from 'ohmyfetch';
import { MapboxPlacesProps, MapboxPlacesFeatureCollection, MapboxPlacesFeature } from './interfaces/mapbox';
import { SearchOptions, SearchType } from './interfaces/options';

/**
 * Searcher class
 *
 * @export
 */
export class Searcher {
  private token: string;

  /**
   * Creates an instance of Searcher.
   * @param {string} mapboxToken
   * @memberof Searcher
   */
  public constructor(mapboxToken: string) {
    this.token = mapboxToken;
  }

  private static getMapboxUrl(text: string): string {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json`;
  }

  private searchRaw(
    text: string,
    searchOptions: SearchOptions = {},
  ): Promise<MapboxPlacesFeatureCollection> {
    return $fetch<MapboxPlacesFeatureCollection>(
      Searcher.getMapboxUrl(text),
      {
        params: {
          autocomplete: true,
          country: searchOptions.country,
          language: searchOptions.language ?? 'en',
          limit: searchOptions.limit ?? 5,
          types: (searchOptions.types ?? []).join(','),
          access_token: this.token,
        },
      },
    );
  }

  /**
   * Search for a place with autosuggestions.
   * Returns a list of GeoJSON Features.
   *
   * @param {string} text
   * @param {SearchOptions} [searchOptions={}]
   * @return {Promise<MapboxPlacesFeature[]>} The search results features list
   * @memberof Searcher
   */
  public async searchAsList(
    text: string,
    searchOptions: SearchOptions = {},
  ): Promise<MapboxPlacesFeature[]> {
    const data = await this.searchRaw(text, searchOptions);

    return data.features;
  }

  /**
   * Search for a place with autosuggestions.
   * Returns a FeatureCollection GeoJSON.
   *
   * @param {string} text
   * @param {SearchOptions} [searchOptions={}]
   * @return {Promise<MapboxPlacesFeatureCollection>} The response FeatureCollection
   * @memberof Searcher
   */
  public async searchAsFeatureCollection(
    text: string,
    searchOptions: SearchOptions = {},
  ): Promise<MapboxPlacesFeatureCollection> {
    return this.searchRaw(text, searchOptions);
  }
}

export {
  MapboxPlacesProps,
  MapboxPlacesFeature,
  MapboxPlacesFeatureCollection,
  SearchOptions,
  SearchType,
};
