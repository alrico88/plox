[plox](../README.md) / [Exports](../modules.md) / SearchOptions

# Interface: SearchOptions

## Table of contents

### Properties

- [country](SearchOptions.md#country)
- [language](SearchOptions.md#language)
- [limit](SearchOptions.md#limit)
- [types](SearchOptions.md#types)

## Properties

### country

• `Optional` **country**: `string`

The ISO code for a country to focus on

**`memberof`** SearchOptions

#### Defined in

interfaces/options.ts:21

___

### language

• `Optional` **language**: `string`

The ISO code for the language for the search

**`memberof`** SearchOptions

#### Defined in

interfaces/options.ts:29

___

### limit

• `Optional` **limit**: `number`

The max amount of results to obtain
Maximum supported by Mapbox is 10

**`memberof`** SearchOptions

#### Defined in

interfaces/options.ts:38

___

### types

• `Optional` **types**: [`SearchType`](../enums/SearchType.md)[]

The type of places to search for

**`link`** https://docs.mapbox.com/api/search/geocoding/#data-types

**`memberof`** SearchOptions

#### Defined in

interfaces/options.ts:47
