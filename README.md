# React Leaflet Deflate

React wrapper of [Leaflet.Deflate](
https://github.com/oliverroick/Leaflet.Deflate)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

Substitutes polygons and lines with markers when their screen size falls below a defined threshold.

*Tested with Leaflet 1.0.3 and React-Leaflet 1.3.1*

![Example](https://cloud.githubusercontent.com/assets/159510/7164588/090c06fe-e399-11e4-956d-0283ef7e69cf.gif)

[Demo JSFiddle](https://jsfiddle.net/m_hasbie/pa290L0k/)


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

```javascript
import { Map, TileLayer } from 'react-leaflet';
import Deflate from 'react-leaflet-deflate';

const geojson = {
  "type": "FeatureCollection",
  "features": [
	{
	  "type": "Feature",
	  "properties": { id: 1 },
	  "geometry": {
		"type": "Polygon",
		"coordinates": [[
		  [101.448205, 2.935403],
		  [101.452839, 2.935961],
		  [101.450479, 2.932746],
		  [101.448205, 2.935403]
		  ]]
		},
	},
	{
	  "type": "Feature",
	  "properties": { id: 2 },
	  "geometry": {
		"type": "Polygon",
		"coordinates": [[
		  [101.427943, 2.951690],
		  [101.431891, 2.952804],
		  [101.428801, 2.948518],
		  [101.427943, 2.951690]
		]]
	  }
	},
	{
	  "type": "Feature",
	  "properties": { id: 3 },
	  "geometry": {
		"type": "Polygon",
		"coordinates": [[
		  [101.448765, 3.006379],
		  [101.476918, 2.993179],
		  [101.434346, 2.981693],
		  [101.448765, 3.006379]
		]]
	  }
    }
  ]
};

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

### Options

Option          | Type      | Default | Description
--------------- | --------- | ------- | -------------
`data`          | `object`     | `{}`    | Required. A valid [GeoJSON object](http://geojson.org/geojson-spec.html).
`minSize`       | `int`     | `20`    | Defines the minimum width and height in pixels for a path to be displayed in its actual shape.
`markerOptions` | `object` or `function`  | `{}`    | Optional. Customize the markers of deflated features using [Leaflet marker options](http://leafletjs.com/reference-1.3.0.html#marker).
`markerCluster` | `boolean` | `false` | Indicates whether markers should be clustered. Requires `Leaflet.MarkerCluser`.
`pointToLayer`  | `function`  | `{}`    | [Leaflet geojson pointToLayer options](http://leafletjs.com/reference-1.3.0.html#geojson-pointtolayer).
`style`         | `function`  | `{}`    | Style to apply to polygons or lines. [Leaflet geojson style options](http://leafletjs.com/reference-1.3.0.html#geojson-style).
`onEachFeature` | `function`  | `{}`    | Function to execute on each geojson feature. [Leaflet geojson onEachFeature options](http://leafletjs.com/reference-1.3.0.html#geojson-oneachfeature).
`filter`        | `function`  | `{}`    | Filter function to apply to geojson features. [Leaflet geojson filter options](http://leafletjs.com/reference-1.3.0.html#geojson-filter).


# Credits
Credits goes to [oliverroick](https://github.com/oliverroick) and all the [contributors](https://github.com/oliverroick/Leaflet.Deflate/graphs/contributors) for the original work.

# License

MIT License
