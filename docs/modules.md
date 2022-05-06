[plox](README.md) / Exports

# plox

## Table of contents

### Enumerations

- [SearchType](enums/SearchType.md)

### Classes

- [Searcher](classes/Searcher.md)

### Interfaces

- [MapboxPlacesProps](interfaces/MapboxPlacesProps.md)
- [SearchOptions](interfaces/SearchOptions.md)

### Type aliases

- [MapboxPlacesFeature](modules.md#mapboxplacesfeature)
- [MapboxPlacesFeatureCollection](modules.md#mapboxplacesfeaturecollection)

## Type aliases

### MapboxPlacesFeature

Ƭ **MapboxPlacesFeature**: `Feature`<`Point`\> & [`MapboxPlacesProps`](interfaces/MapboxPlacesProps.md)

#### Defined in

interfaces/mapbox.ts:26

___

### MapboxPlacesFeatureCollection

Ƭ **MapboxPlacesFeatureCollection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attribution` | `string` |
| `features` | [`MapboxPlacesFeature`](modules.md#mapboxplacesfeature)[] |
| `query` | `string`[] |
| `type` | ``"FeatureCollection"`` |

#### Defined in

interfaces/mapbox.ts:28
