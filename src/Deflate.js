import Leaflet from 'leaflet';
import 'Leaflet.Deflate';
import { MapLayer, withLeaflet } from 'react-leaflet';


class Deflate extends MapLayer {

	createLeafletElement(props) {
		return new Leaflet.Deflate(props);
	}

	componentDidMount() {
		// This will add our Leaflet.Deflate (this.leafletElement) to the map--something that must happen BEFORE
		// we can add anything to Leaflet.Deflate itself.
		super.componentDidMount();
		Leaflet.geoJSON(this.props.data, this.props).addTo(this.leafletElement);
	}

	updateLeafletElement(fromProps, toProps) {
		this.props.leaflet.layerContainer.removeLayer(this.leafletElement);
		this.leafletElement = new Leaflet.Deflate(toProps);
		this.props.leaflet.layerContainer.addLayer(this.leafletElement);
		Leaflet.geoJSON(toProps.data, toProps).addTo(this.leafletElement);
	}
}

export default withLeaflet(Deflate);