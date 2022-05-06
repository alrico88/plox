# plox

Simple wrapper for Mapbox Places Search

## Installation

Using npm `npm i plox`

Using yarn `yarn add plox`

## Usage

In CommonJS env

```javascript
const { Searcher } = require('plox');

const searcher = new Searcher(YOUR_MAPBOX_TOKEN);

const places = await searcher.searchAsList('gran vía', {
  country: 'es',
  limit: 10,
  // More options available
});

// places is an array of GeoJSON Features
```

Using imports

```javascript
import { Searcher } from 'plox';

const searcher = new Searcher(YOUR_MAPBOX_TOKEN);

const places = await searcher.searchAsFeatureCollection('gran vía', {
  country: 'es',
  limit: 3,
  // More options available
});

// Places is a GeoJSON FeatureCollection
```

## Documentation

See [DOCS](./docs/modules.md)
