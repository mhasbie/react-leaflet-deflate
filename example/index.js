import React from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import Deflate from '../src/Deflate';

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

const example = (
  <Map center={[2.935403, 101.448205]} zoom={10} maxZoom={20}>
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
);

render(example, document.getElementById('app'));
