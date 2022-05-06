import { describe, expect, test } from 'vitest';
import { Searcher, SearchOptions, SearchType } from '../src/index';

const searcher = new Searcher(process.env.VITE_MAPBOX_TOKEN as string);

describe('Test searching functions', () => {
  test('Test type filter', async () => {
    const data = await searcher.searchAsList('museo', {
      country: 'es',
      limit: 10,
      types: [SearchType.Address],
    });

    const featureTypes = data.flatMap((d) => d.place_type);
    const notAnAddress = featureTypes.filter((d) => d !== 'address');

    expect(notAnAddress.length).toStrictEqual(0);
  });

  test('Test limit options', async () => {
    const data = await searcher.searchAsList('gran vía', {
      country: 'es',
      limit: 5,
    });

    expect(data.length).toStrictEqual(5);
  });

  test('Both options should return same results', async () => {
    const searchOpts: SearchOptions = {
      language: 'es',
      types: [SearchType.Poi],
      country: 'es',
    };

    const [asList, asGeoJSON] = await Promise.all(
      [
        searcher.searchAsList('alcala', searchOpts),
        searcher.searchAsFeatureCollection('alcala', searchOpts),
      ],
    );

    expect(asList).toStrictEqual(asGeoJSON.features);
  });
});
