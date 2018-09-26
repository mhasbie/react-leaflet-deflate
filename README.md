# react-leaflet-deflate

[![travis build](https://img.shields.io/travis/mhasbie/react-leaflet-deflate.svg?style=plastic)](https://travis-ci.org/mhasbie/react-leaflet-deflate)
[![version](https://img.shields.io/npm/v/react-leaflet-deflate.svg?style=plastic)](http://npm.im/react-leaflet-deflate)
[![MIT License](https://img.shields.io/npm/l/react-leaflet-deflate.svg?style=plastic)](http://opensource.org/licenses/MIT)
[![dependencies](https://img.shields.io/david/mhasbie/react-leaflet-deflate.svg?style=plastic)](https://david-dm.org/mhasbie/react-leaflet-deflate)
[![peer dependencies](https://img.shields.io/david/peer/mhasbie/react-leaflet-deflate.svg?style=plastic)](https://david-dm.org/mhasbie/react-leaflet-deflate?type=peer)
[![downloads](https://img.shields.io/npm/dt/react-leaflet-deflate.svg?style=plastic)](http://npm-stat.com/charts.html?package=react-leaflet-deflate&from=2018-01-01)
[![issues](https://img.shields.io/github/issues/mhasbie/react-leaflet-deflate.svg?style=plastic)](https://github.com/mhasbie/react-leaflet-deflate/issues)

React wrapper of [Leaflet.Deflate](
https://github.com/oliverroick/Leaflet.Deflate)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

Substitutes polygons and lines with markers when their screen size falls below a defined threshold.

*Tested with Leaflet 1.3.4 and React-Leaflet 1.9.1, React-Leaflet 2.0.1*

![Example](https://cloud.githubusercontent.com/assets/159510/7164588/090c06fe-e399-11e4-956d-0283ef7e69cf.gif)

[Demo JSFiddle](https://jsfiddle.net/m_hasbie/pa290L0k/)

## Demos

### react-leaflet v1

[`JSFiddle`](https://jsfiddle.net/m_hasbie/pa290L0k/)
[`CodePen`](https://codepen.io/m_hasbie/full/jvgeVR/)

### react-leaflet v2

[`JSFiddle`](https://jsfiddle.net/m_hasbie/t0821ph4/)
[`CodePen`](https://codepen.io/m_hasbie/full/MqNPRy/)


## Installation

### Install via NPM

```bash
npm install --save react-leaflet-deflate
```

`react-leaflet-deflate` requires `leaflet.markercluster` as [`peerDependency`](https://docs.npmjs.com/files/package.json#peerdependencies)

(React, PropTypes, Leaflet, react-leaflet also should be installed)
```bash
npm install --save leaflet.markercluster
```

## Usage example

### react-leaflet v1

```javascript
import { Map, TileLayer } from 'react-leaflet';
import Deflate from 'react-leaflet-deflate';

const geojson = {...};

<Map center={[2.935403, 101.448205]} zoom={10}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <Deflate
    data={geojson}
    minSize={10}
    markerCluster={true}
  />
</Map>
```

### react-leaflet v2

```javascript
import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import Deflate from 'react-leaflet-deflate';
const WrappedDeflate = withLeaflet(Deflate);

const geojson = {...};

<Map center={[2.935403, 101.448205]} zoom={10}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <WrappedDeflate
    data={geojson}
    minSize={10}
    markerCluster={true}
  />
</Map>
```

### Options

Option          | Type      | Default | Description
--------------- | --------- | ------- | -------------
`data`          | `object`     | `{}`    | Required. A valid [GeoJSON object](http://geojson.org/geojson-spec.html).
`minSize`       | `int`     | `20`    | Defines the minimum width and height in pixels for a path to be displayed in its actual shape.
`markerOptions` | `object` or `function`  | `{}`    | Optional. Customize the markers of deflated features using [Leaflet marker options](http://leafletjs.com/reference-1.3.0.html#marker).
`markerCluster` | `boolean` | `false` | Indicates whether markers should be clustered. Requires `Leaflet.MarkerCluser`.
`markerClusterOptions` | `object` | `{}`    | Optional. Customize the appearance and behaviour of clustered markers using [`Leaflet.markercluster` options](https://github.com/Leaflet/Leaflet.markercluster#options).
`pointToLayer`  | `function`  | `{}`    | [Leaflet geojson pointToLayer options](http://leafletjs.com/reference-1.3.0.html#geojson-pointtolayer).
`style`         | `function`  | `{}`    | Style to apply to polygons or lines. [Leaflet geojson style options](http://leafletjs.com/reference-1.3.0.html#geojson-style).
`onEachFeature` | `function`  | `{}`    | Function to execute on each geojson feature. [Leaflet geojson onEachFeature options](http://leafletjs.com/reference-1.3.0.html#geojson-oneachfeature).
`filter`        | `function`  | `{}`    | Filter function to apply to geojson features. [Leaflet geojson filter options](http://leafletjs.com/reference-1.3.0.html#geojson-filter).


# Credits
Credits goes to [oliverroick](https://github.com/oliverroick) and all the [contributors](https://github.com/oliverroick/Leaflet.Deflate/graphs/contributors) for the original work.

# License

MIT License
