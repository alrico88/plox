[plox](../README.md) / [Exports](../modules.md) / Searcher

# Class: Searcher

Searcher class

**`export`**

## Table of contents

### Constructors

- [constructor](Searcher.md#constructor)

### Properties

- [token](Searcher.md#token)

### Methods

- [searchAsFeatureCollection](Searcher.md#searchasfeaturecollection)
- [searchAsList](Searcher.md#searchaslist)
- [searchRaw](Searcher.md#searchraw)
- [getMapboxUrl](Searcher.md#getmapboxurl)

## Constructors

### constructor

• **new Searcher**(`mapboxToken`)

Creates an instance of Searcher.

**`memberof`** Searcher

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapboxToken` | `string` |

#### Defined in

index.ts:18

## Properties

### token

• `Private` **token**: `string`

#### Defined in

index.ts:11

## Methods

### searchAsFeatureCollection

▸ **searchAsFeatureCollection**(`text`, `searchOptions?`): `Promise`<[`MapboxPlacesFeatureCollection`](../modules.md#mapboxplacesfeaturecollection)\>

Search for a place with autosuggestions.
Returns a FeatureCollection GeoJSON.

**`memberof`** Searcher

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `searchOptions` | [`SearchOptions`](../interfaces/SearchOptions.md) |

#### Returns

`Promise`<[`MapboxPlacesFeatureCollection`](../modules.md#mapboxplacesfeaturecollection)\>

The response FeatureCollection

#### Defined in

index.ts:72

___

### searchAsList

▸ **searchAsList**(`text`, `searchOptions?`): `Promise`<[`MapboxPlacesFeature`](../modules.md#mapboxplacesfeature)[]\>

Search for a place with autosuggestions.
Returns a list of GeoJSON Features.

**`memberof`** Searcher

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `searchOptions` | [`SearchOptions`](../interfaces/SearchOptions.md) |

#### Returns

`Promise`<[`MapboxPlacesFeature`](../modules.md#mapboxplacesfeature)[]\>

The search results features list

#### Defined in

index.ts:54

___

### searchRaw

▸ `Private` **searchRaw**(`text`, `searchOptions?`): `Promise`<[`MapboxPlacesFeatureCollection`](../modules.md#mapboxplacesfeaturecollection)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `searchOptions` | [`SearchOptions`](../interfaces/SearchOptions.md) |

#### Returns

`Promise`<[`MapboxPlacesFeatureCollection`](../modules.md#mapboxplacesfeaturecollection)\>

#### Defined in

index.ts:26

___

### getMapboxUrl

▸ `Static` `Private` **getMapboxUrl**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

index.ts:22
