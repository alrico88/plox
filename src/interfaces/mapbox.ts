import {
  BBox, Point, Feature, FeatureCollection,
} from 'geojson';

/**
 * @export
 * @interface MapboxPlacesProps
 * @link https://docs.mapbox.com/api/search/geocoding/#geocoding-response-object=
 */
export interface MapboxPlacesProps {
  bbox?: BBox,
  center: [number, number],
  context: any[],
  geometry: Point,
  id: string,
  language: string,
  language_en: string,
  place_name: string,
  place_name_en: string,
  place_type: string[],
  properties: any,
  relevance: number,
  text: string,
  text_en: string,
}
export type MapboxPlacesFeature = Feature<Point> & MapboxPlacesProps;

export type MapboxPlacesFeatureCollection = {
  type: 'FeatureCollection',
  features: MapboxPlacesFeature[],
  attribution: string,
  query: string[]
};

export type PlaceFeature = Feature<Point, MapboxPlacesProps>;
export type PlaceFeatureCollection = FeatureCollection<Point, MapboxPlacesProps>;
