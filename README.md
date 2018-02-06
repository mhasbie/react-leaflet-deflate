# React Leaflet Deflate

React wrapper of [Leaflet.Deflate](
https://github.com/oliverroick/Leaflet.Deflate)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

Substitutes polygons and lines with markers when their screen size falls below a defined threshold.

![Example](https://cloud.githubusercontent.com/assets/159510/7164588/090c06fe-e399-11e4-956d-0283ef7e69cf.gif)

## Installation

### Install via NPM

```bash
npm install react-leaflet-deflate --save
```

#### Usage example

```javascript
import { Map, TileLayer } from 'react-leaflet';
import Deflate from 'react-leaflet-deflate';

const geojson = {
  "type": "Feature",
  "geometry": {
	"type": "Polygon",
	"coordinates": [[
	  [101.460114, 2.978699],
	  [101.546631, 2.918354],
	  [101.466980, 2.941669],
	  [101.460114, 2.978699]
	]]
  }
};

<Map center={[101.483459, 2.938926]} zoom={12}>
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

#### Options

Option          | Type      | Default | Description
--------------- | --------- | ------- | -------------
`data`          | `object`     | `{}`    | Required. A valid [GeoJSON object](http://geojson.org/geojson-spec.html).
`minSize`       | `int`     | `20`    | Defines the minimum width and height in pixels for a path to be displayed in its actual shape.
`markerOptions` | `object` or `function`  | `{}`    | Optional. Customize the markers of deflated features using [Leaflet marker options](http://leafletjs.com/reference-1.3.0.html#marker).
`markerCluster` | `boolean` | `false` | Indicates whether markers should be clustered. Requires `Leaflet.MarkerCluser`.
`pointToLayer`  | `function`  | `{}`    | [Leaflet geojson pointToLayer options](http://leafletjs.com/reference-1.3.0.html#geojson-pointtolayer).
`style`         | `function`  | `{}`    | Style to apply to polygons or lines [Leaflet geojson style options](http://leafletjs.com/reference-1.3.0.html#geojson-style).
`onEachFeature` | `function`  | `{}`    | Function to execute on each geojson feature [Leaflet geojson onEachFeature options](http://leafletjs.com/reference-1.3.0.html#geojson-oneachfeature).
`filter`        | `function`  | `{}`    | Filter function to apply to geojson features [Leaflet geojson filter options](http://leafletjs.com/reference-1.3.0.html#geojson-filter).

# License

MIT License