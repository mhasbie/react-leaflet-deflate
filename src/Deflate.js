import Leaflet from 'leaflet';
import { DeflatedFeatureGroup } from 'Leaflet.Deflate';
import { MapLayer, withLeaflet } from 'react-leaflet';


class Deflate extends MapLayer {

	createLeafletElement(props) {
		return new DeflatedFeatureGroup(props);
	}

  componentDidMount() {
		// This will add our DeflatedFeatureGroup (this.leafletElement) to the map--something that must happen BEFORE
		// we can add anything to DeflatedFeatureGroup itself.
    super.componentDidMount();
		Leaflet.geoJSON(this.props.data, this.props).addTo(this.leafletElement);
  }

  updateLeafletElement(fromProps, toProps) {
		this.props.leaflet.layerContainer.removeLayer(this.leafletElement);
		this.leafletElement = new DeflatedFeatureGroup(toProps);
		this.props.leaflet.layerContainer.addLayer(this.leafletElement);
		Leaflet.geoJSON(toProps.data, toProps).addTo(this.leafletElement);
	}
}

export default withLeaflet(Deflate);