/* global describe, expect, it, jest */

import React from 'react';
import { mount } from './enzyme';
import 'jest-enzyme';

import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import DeflateDefault from '../dist/react-leaflet-deflate.min.js';
const Deflate = withLeaflet(DeflateDefault);

describe('Deflate', () => {

	it('Should instantiate a Deflate layer when rendered inside a map', () => {
		
		const data = {
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

		const options = {
			center: [0, 0],
			zoom: 1,
			minZoom: 1,
			maxZoom: 22,
		};
		const wrapper = mount(
			<Map {...options}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Deflate data={data} cluster={true} minSize={10} />
			</Map>
		);
		
		expect(wrapper).not.toBeEmptyRender();
	})
})