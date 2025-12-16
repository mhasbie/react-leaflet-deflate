
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { MapContainer, TileLayer } from 'react-leaflet';
import Deflate from 'react-leaflet-deflate';

function App() {
	const [mapOptions] = React.useState({
		center: [2.935403, 101.448205],
		zoom: 10,
		minZoom: 1,
		maxZoom: 22
	});

	const [markerCluster, setMarkerCluster] = React.useState(true);
	const [dataSet, setDataSet] = React.useState(1);
	const [minSize, setMinSize] = React.useState(null);

	const onChangeMarkerCluster = (e) => setMarkerCluster(e.target.checked);
	const onChangeDataSet = (e) => setDataSet(e.target.value);

	const onChangeMinSize = (e) => {
		const minSizeInput = e.target.value;
		let minSizeFloat = parseFloat(minSizeInput);
		if(isNaN(minSizeFloat) || minSizeFloat <= 1.0) {
			minSizeFloat = null;
		}
		setMinSize(minSizeFloat);
	}

	const onEachFeature = (feature, featureLayer) => {
		featureLayer.bindPopup(`<div>This is feature #${feature.properties.id}</div>`);
		featureLayer.bindTooltip(`Feature: #${feature.properties.id}`);
	};

	const resetOptions = () => {
		setMarkerCluster(true);
		setDataSet(1);
		setMinSize(null);
	};

	const deflateOptions = {
		minSize: minSize || 20,
		markerCluster: markerCluster,
		data: dataSet == 1 ? sample1 : sample2,
		onEachFeature: onEachFeature
	};

	return (
		<div>
			<div className="row d-flex">
				<div className="col-md-8 align-self-stretch">
				<div className="card" style={{ height: '500px' }}>
					<div className="card-body">
					<MapContainer {...mapOptions} className="h-100">
						<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
						/>
						<Deflate {...deflateOptions} />
					</MapContainer>
					</div>
				</div>
				</div>
				<div className="col-md-4">
				<div className="card" style={{ height: '500px' }} >
					<div className="card-body">
					<div className="row">
						<div className="col-sm-6">
						<h6 className="mt-1"><i className="fas fa-cogs" /> Options</h6>
						</div>
						<div className="col-sm-6 text-right">
						<button type="button" className="btn btn-sm btn-outline-info" onClick={resetOptions}>
							<i className="fas fa-undo-alt" /> Reset
						</button>
						</div>
					</div>
					<hr/>
					<form>
						<div className="form-group row">
						<label htmlFor="cluster" className="col-sm-6 col-form-label">Enable marker clustering:</label>
						<div className="col-sm-6">
							<input
								className="form-control"
								id="cluster"
								name="cluster"
								type="checkbox"
								checked={markerCluster}
								onChange={onChangeMarkerCluster}
							/>
						</div>
						</div>
						<div className="form-group row">
						<label htmlFor="minSize" className="col-sm-6 col-form-label">Min. Size:</label>
						<div className="col-sm-6">
							<input
								className="form-control"
								id="minSize"
								name="minSize"
								type="number"
								value={minSize}
								onChange={onChangeMinSize}
							/>
						</div>
						</div>
						<div className="form-group row">
						<label htmlFor="geojson" className="col-sm-6 col-form-label">GeoJSON data set:</label>
						<div className="col-sm-6">
							<select className="form-control" id="geojson" name="geojson" value={dataSet} onChange={onChangeDataSet}>
								<option value="1">Data set 1</option>
								<option value="2">Data set 2</option>
							</select>
						</div>
						</div>
					</form>
					</div>
				</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 mt-4">
				<div className="card">
					<div className="card-body">
					<h4>Installation</h4>
					<hr />
					<h5>Install via NPM</h5>
						<div className="card bg-dark text-white">
							<div className="card-body">
							<code className="text-white">
								npm install react-leaflet-deflate --save
							</code>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 mt-4">
				<div className="card">
					<div className="card-body">
					<h4>Usage</h4>
					<hr />

					<h5>Example</h5>
					<div className="card bg-dark text-white">
						<div className="card-body">
							<pre><code className="text-white">
								import &#123; MapContainer, TileLayer &#125; from 'react-leaflet';<br />
								import Deflate from 'react-leaflet-deflate';<br />
								<br />
								const deflateOptions = &#123;<br />
								&nbsp;&nbsp;&nbsp;&nbsp;minSize: 20,<br />
								&nbsp;&nbsp;&nbsp;&nbsp;markerCluster: true,<br />
								&nbsp;&nbsp;&nbsp;&nbsp;data: geojsonData<br />
								&#125;;<br />
								<br />
								&lt;MapContainer center=&#123;[101.483459, 2.938926]&#125; zoom=&#123;12&#125;&gt;<br />
								&nbsp;&nbsp;&nbsp;&nbsp;&lt;TileLayer<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url=&quot;https://&#123;s&#125;.tile.openstreetmap.org/&#123;z&#125;/&#123;x&#125;/&#123;y&#125;.png&quot;<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attribution='&amp;copy; &lt;a href=&quot;http://osm.org/copyright&quot;&gt;OpenStreetMap&lt;/a&gt; contributors'
								/&gt;
								<br />
								<br />

								&nbsp;&nbsp;&nbsp;&nbsp;&lt;Deflate &#123;...deflateOptions&#125; /&gt;<br />
								&lt;/MapContainer&gt;
							</code></pre>
						</div>
					</div>

					<h5 className="mt-4">react-leaflet v5</h5>
					<iframe
						style={{ height: '420px', width: '100%' }}
						scrolling="no"
						title="react-leaflet-deflate example for react-leaflet@5.x"
						src="https://codepen.io/m_hasbie/embed/wBGampr/?height=265&theme-id=0&default-tab=html,result"
						frameBorder="no"
						allowTransparency="true"
						allowFullScreen="true"
					>
						See the Pen <a href='https://codepen.io/m_hasbie/pen/wBGampr/'>react-leaflet-deflate example for react-leaflet@5.x</a> by M. Hasbie
						(<a href='https://codepen.io/m_hasbie'>@m_hasbie</a>) on <a href='https://codepen.io'>CodePen</a>.
					</iframe>

					<h5 className="mt-4">react-leaflet v2</h5>
					<iframe
						style={{ height: '420px', width: '100%' }}
						scrolling="no"
						title="react-leaflet-deflate example for react-leaflet@2.x"
						src="https://codepen.io/m_hasbie/embed/MqNPRy/?height=265&theme-id=0&default-tab=js,result"
						frameBorder="no"
						allowTransparency="true"
						allowFullScreen="true"
					>
						See the Pen <a href='https://codepen.io/m_hasbie/pen/MqNPRy/'>react-leaflet-deflate example for react-leaflet@2.x</a> by M. Hasbie
						(<a href='https://codepen.io/m_hasbie'>@m_hasbie</a>) on <a href='https://codepen.io'>CodePen</a>.
					</iframe>

					<h5 className="mt-4">react-leaflet v1</h5>
					<iframe
						style={{ height: '420px', width: '100%' }}
						scrolling="no"
						title="react-leaflet-deflate example for react-leaflet@1.9.1"
						src="http://codepen.io/m_hasbie/embed/jvgeVR/?height=265&theme-id=0&default-tab=js,result"
						frameBorder="no"
						allowTransparency="true"
						allowFullScreen="true"
					>
						See the Pen <a href='https://codepen.io/m_hasbie/pen/jvgeVR/'>react-leaflet-deflate example for react-leaflet@1.9.1</a> by M. Hasbie
						(<a href='https://codepen.io/m_hasbie'>@m_hasbie</a>) on <a href='https://codepen.io'>CodePen</a>.
					</iframe>
					</div>
				</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 mt-4">
				<div className="card">
					<div className="card-body">
					<h4>Options</h4>
					<hr />

					<table className="table table-hover table-striped table-bordered">
						<thead className="thead-dark">
							<tr>
								<th>Option</th>
								<th>Type</th>
								<th>Default</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="text-nowrap"><code>data</code></td>
								<td><code>data</code></td>
								<td><code>&#123;&#125;</code></td>
								<td>Required. A valid <a href="http://geojson.org/geojson-spec.html" rel="nofollow">GeoJSON object</a>.</td>
							</tr>
							<tr>
								<td className="text-nowrap"><code>minSize</code></td>
								<td><code>int</code></td>
								<td><code>20</code></td>
								<td>Defines the minimum width and height in pixels for a path to be displayed in its actual shape.</td>
							</tr>
							<tr>
								<td className="text-nowrap"><code>markerOptions</code></td>
								<td><code>object</code> or <code>function</code></td>
								<td><code>&#123;&#125;</code></td>
								<td>Optional. Customize the markers of deflated features using <a href="http://leafletjs.com/reference-1.3.0.html#marker" rel="nofollow">Leaflet marker options</a>.</td>
							</tr>
							<tr>
								<td className="text-nowrap"><code>markerCluster</code></td>
								<td><code>boolean</code></td>
								<td><code>false</code></td>
								<td>Indicates whether markers should be clustered. Requires <code>Leaflet.markercluster</code>.</td>
							</tr>
							<tr>
								<td className="text-nowrap"><code>markerClusterOptions</code></td>
								<td><code>object</code></td>
								<td><code>&#123;&#125;</code></td>
								<td>Optional. Customize the appearance and behaviour of clustered markers using <a href="https://github.com/Leaflet/Leaflet.markercluster#options"><code>Leaflet.markercluster</code> options</a>.</td>
							</tr>
							<tr>
								<td className="text-nowrap"><code>pointToLayer</code></td>
								<td><code>function</code></td>
								<td><code>&#123;&#125;</code></td>
								<td><a href="https://leafletjs.com/reference.html#geojson-pointtolayer" rel="nofollow">Leaflet geojson pointToLayer options</a>.</td>
							</tr>
							<tr>
								<td className="text-nowrap"><code>style</code></td>
								<td><code>function</code></td>
								<td><code>&#123;&#125;</code></td>
								<td>Style to apply to polygons or lines. <a href="https://leafletjs.com/reference.html#geojson-style" rel="nofollow">Leaflet geojson style options</a>.</td>
							</tr>
							<tr>
								<td className="text-nowrap"><code>onEachFeature</code></td>
								<td><code>function</code></td>
								<td><code>&#123;&#125;</code></td>
								<td>Function to execute on each geojson feature. <a href="https://leafletjs.com/reference.html#geojson-oneachfeature" rel="nofollow">Leaflet geojson onEachFeature options</a>.</td>
							</tr>
							<tr>
								<td className="text-nowrap"><code>filter</code></td>
								<td><code>function</code></td>
								<td><code>&#123;&#125;</code></td>
								<td>Filter function to apply to geojson features. <a href="https://leafletjs.com/reference.html#geojson-filter" rel="nofollow">Leaflet geojson filter options</a>.</td>
							</tr>
						</tbody>
					</table>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}

const root = ReactDOMClient.createRoot(document.getElementById('container'));
root.render(<App />);
