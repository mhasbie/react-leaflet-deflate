import React from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet.markercluster';

import Deflate from '../src/Deflate';
// import Deflate from '../dist/react-leaflet-deflate';
import { sample1, sample2 } from './geojsonSamples';

class Example extends React.Component {

	constructor() {
		super();
		this.state = {
			cluster: false,
			minSizeFloat: 10,
			minSizeInput: '10',
			geojson: '1',
		};
	}

	render() {
		return (
			<React.Fragment>
				<h3>react-leaflet-deflate</h3>
				<fieldset>
					<label htmlFor="cluster">Enable marker clustering:</label>
					<input
						name="cluster"
						type="checkbox"
						defaultChecked={this.state.cluster}
						onChange={() => { this.setState(prevState => ({ cluster: !prevState.cluster })); }}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="minSize">Min. Size:</label>
					<input
						name="minSize"
						value={this.state.minSizeInput}
						onChange={(e) => { 
							const minSizeInput = e.target.value;
							let minSizeFloat = parseFloat(minSizeInput);
							if(isNaN(minSizeFloat) || minSizeFloat <= 1.0) {
								minSizeFloat = null;
							}
							this.setState({ minSizeInput, minSizeFloat })
						}}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="geojson">Pick GeoJSON data set:</label>
					<select name="geojson" value={this.state.geojson} onChange={(e) => { this.setState({ geojson: e.target.value }); }}>
						<option value="1">Data set 1</option>
						<option value="2">Data set 2</option>
					</select>
				</fieldset>
				<Map center={[2.935403, 101.448205]} zoom={10} maxZoom={20}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>

					{ this.state.minSizeFloat === null
						? null
						: (<Deflate
								data={this.state.geojson === '1' ? sample1 : sample2}
								minSize={this.state.minSizeFloat}
								markerCluster={this.state.cluster}
							/>)
					}
				</Map>
			</React.Fragment>
		);
	}
}

render(<Example/>, document.getElementById('app'));
