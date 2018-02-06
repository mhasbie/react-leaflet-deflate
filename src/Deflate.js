import { MapLayer } from 'react-leaflet';
import L, { geoJSON } from 'leaflet';
import './L.Deflate';

export default class Deflate extends MapLayer {
	createLeafletElement(props) {
		const { minSize = 10, markerCluster, markerOptions } = props
		return L.deflate({ minSize, markerCluster, markerOptions });
	}

	componentDidMount() {
		const { data, style, onEachFeature, pointToLayer, filter, markerCluster } = this.props
		const { map, pane, layerContainer } = this.context;

		const geoJson = geoJSON(data, { style, onEachFeature, pointToLayer, filter, pane });
		this.leafletElement.addTo(layerContainer);
		this.leafletElement.addLayer(geoJson);
		if (markerCluster) map._container.className += ' marker-cluster-styled marker-cluster-animated';
	}
}
