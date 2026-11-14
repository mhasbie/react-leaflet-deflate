import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { MapContainer, useMap } from 'react-leaflet';
import Deflate from '../../src';

const dataSets = {
  1: {
    type: 'FeatureCollection',
    features: [
      [-0.06, -0.02, 1],
      [0, 0.02, 2],
      [0.06, -0.02, 3],
    ].map(([longitude, latitude, id]) => ({
      type: 'Feature',
      properties: { id },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [longitude - 0.025, latitude - 0.025],
          [longitude + 0.025, latitude - 0.025],
          [longitude + 0.025, latitude + 0.025],
          [longitude - 0.025, latitude + 0.025],
          [longitude - 0.025, latitude - 0.025],
        ]],
      },
    })),
  },
  2: {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: { id: 9 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [0.01, 0.01],
          [0.04, 0.01],
          [0.04, 0.04],
          [0.01, 0.04],
          [0.01, 0.01],
        ]],
      },
    }],
  },
};

function ZoomReporter() {
  const map = useMap();

  React.useEffect(() => {
    const zoomOutput = document.querySelector('[data-testid="zoom"]');
    const reportZoom = () => {
      zoomOutput.textContent = String(map.getZoom());
    };

    map.on('zoomend', reportZoom);
    reportZoom();

    return () => map.off('zoomend', reportZoom);
  }, [map]);

  return null;
}

function App() {
  const [markerCluster, setMarkerCluster] = useState(true);
  const [minSize, setMinSize] = useState(20);
  const [dataSet, setDataSet] = useState('1');

  return <>
    <h1>Deflate fixture</h1>
    <div className="controls">
      <label>
        <input
          aria-label="Marker clustering"
          type="checkbox"
          checked={markerCluster}
          onChange={(event) => setMarkerCluster(event.target.checked)}
        />
        Marker clustering
      </label>
      <label>
        Minimum size
        <input
          aria-label="Minimum size"
          type="number"
          value={minSize}
          onChange={(event) => setMinSize(Number(event.target.value))}
        />
      </label>
      <label>
        GeoJSON data set
        <select
          aria-label="GeoJSON data set"
          value={dataSet}
          onChange={(event) => setDataSet(event.target.value)}
        >
          <option value="1">Data set 1</option>
          <option value="2">Data set 2</option>
        </select>
      </label>
    </div>
    <output data-testid="dataset">Data set {dataSet}</output>
    <output data-testid="zoom">4</output>
    <MapContainer center={[0, 0]} zoom={4} minZoom={1} maxZoom={22} className="map">
      <ZoomReporter />
      <Deflate
        data={dataSets[dataSet]}
        minSize={minSize}
        markerCluster={markerCluster}
        onEachFeature={(feature, layer) => {
          layer.bindPopup(`Feature #${feature.properties.id}`);
          layer.bindTooltip(`Feature #${feature.properties.id}`);
        }}
      />
    </MapContainer>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
