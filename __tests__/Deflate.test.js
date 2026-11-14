/* global describe, expect, it, jest */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import Deflate from '../src/index';

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

describe('Deflate', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should instantiate a Deflate layer when rendered inside a map', () => {
    render(
      <MapContainer center={[0, 0]} zoom={1} minZoom={1} maxZoom={22} style={{ height: 400, width: 600 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Deflate data={data} markerCluster={false} minSize={10} />
      </MapContainer>
    );
    // Since Deflate is a leaflet plugin, check that the map container is rendered

    const markers = screen.getAllByRole('button', { name: "Marker" });
    expect(markers.length).toBeGreaterThan(0);
    expect(markers[0]).toBeInTheDocument();
  });

  it('Should render with cluster disabled', () => {
    const { container } = render(
      <MapContainer center={[0, 0]} zoom={1} minZoom={1} maxZoom={22} style={{ height: 400, width: 600 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Deflate data={data} markerCluster={false} minSize={10} />
      </MapContainer>
    );

    const markers = screen.getAllByRole('button', { name: "Marker" });
    expect(markers.length).toBeGreaterThan(0);
    expect(markers[0]).toBeInTheDocument();
    expect(container.querySelector('.leaflet-container')).not.toHaveClass('leaflet-cluster-anim');
  });

  it('Should render with different minSize', () => {
    render(
      <MapContainer center={[0, 0]} zoom={1} minZoom={1} maxZoom={22} style={{ height: 400, width: 600 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Deflate data={data} cluster={true} minSize={20} />
      </MapContainer>
    );
    const markers = screen.getAllByRole('button', { name: "Marker" });
    expect(markers.length).toBeGreaterThan(0);
    expect(markers[0]).toBeInTheDocument();
  });

  it('Should apply marker cluster classes when markerCluster is enabled', () => {
    const { container } = render(
      <MapContainer center={[0, 0]} zoom={1} minZoom={1} maxZoom={22} style={{ height: 400, width: 600 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Deflate data={data} markerCluster={true} minSize={10} />
      </MapContainer>
    );

    const mapEl = container.querySelector('.leaflet-container');
    expect(mapEl).toHaveClass('leaflet-cluster-anim');
    expect(mapEl).toHaveClass('marker-cluster-styled');
    expect(mapEl).toHaveClass('marker-cluster-animated');
  });

  it('forwards GeoJSON options and the minimum size to Leaflet', () => {
    const style = jest.fn(() => ({ color: 'red' }));
    const filter = jest.fn(() => true);
    const onEachFeature = jest.fn();
    const geoJSONSpy = jest.spyOn(L, 'geoJSON');
    const initializeSpy = jest.spyOn(L.Deflate.prototype, 'initialize');

    render(
      <MapContainer center={[0, 0]} zoom={1} minZoom={1} maxZoom={22} style={{ height: 400, width: 600 }}>
        <Deflate
          data={data}
          minSize={15}
          style={style}
          filter={filter}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
    );

    expect(geoJSONSpy).toHaveBeenCalledWith(data, expect.objectContaining({
      style,
      filter,
      onEachFeature,
    }));
    expect(initializeSpy).toHaveBeenCalledWith(expect.objectContaining({
      minSize: 15,
    }));
    expect(onEachFeature).toHaveBeenCalledTimes(data.features.length);
  });

  it('replaces its Leaflet layer when props change and removes it on unmount', () => {
    const addLayerSpy = jest.spyOn(L.Map.prototype, 'addLayer');
    const removeLayerSpy = jest.spyOn(L.Map.prototype, 'removeLayer');
    const updatedData = {
      ...data,
      features: data.features.slice(0, 1),
    };
    const createMap = (geoJSON) => (
      <MapContainer center={[0, 0]} zoom={1} minZoom={1} maxZoom={22} style={{ height: 400, width: 600 }}>
        <Deflate data={geoJSON} minSize={10} />
      </MapContainer>
    );

    const { rerender, unmount } = render(createMap(data));
    const addedLayers = () => addLayerSpy.mock.calls
      .map(([layer]) => layer)
      .filter((layer) => layer instanceof L.Deflate);
    const removedLayers = () => removeLayerSpy.mock.calls
      .map(([layer]) => layer)
      .filter((layer) => layer instanceof L.Deflate);
    const firstLayer = addedLayers()[0];

    expect(firstLayer).toBeDefined();

    rerender(createMap(updatedData));

    const activeLayer = addedLayers()[1];
    expect(activeLayer).toBeDefined();
    expect(removedLayers()).toContain(firstLayer);

    unmount();

    expect(removedLayers()).toContain(activeLayer);
  });
});
