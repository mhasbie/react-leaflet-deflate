import Leaflet from 'leaflet';
import { DeflatedFeatureGroup } from 'Leaflet.Deflate';
import { MapLayer } from 'react-leaflet';
import 'leaflet.markercluster';
import 'Leaflet.Deflate';


export default class Deflate extends MapLayer {
	
	initMapClasses() {

		const { map } = this.props.leaflet || this.context;

		const mapClassName = map._container.className;

		const isAnimClassApplied = mapClassName.indexOf('leaflet-cluster-anim') !== -1;
		const isStyledClassApplied = mapClassName.indexOf('marker-cluster-styled') !== -1;
		const isAnimatedClassApplied = mapClassName.indexOf('marker-cluster-animated') !== -1;

		!isAnimClassApplied && (
			map._container.className += ' leaflet-cluster-anim'
		);

		!isStyledClassApplied && (
			map._container.className += ' marker-cluster-styled'
		);

		isAnimatedClassApplied && (
			map._container.className += ' marker-cluster-animated'
		);

	}

	createLeafletElement(props) {
		return new Leaflet.Deflate(props);
	}

	componentDidMount() {
		const { map } = this.props.leaflet || this.context;
		const { markerCluster } = this.props;
		// This will add our Leaflet.Deflate (this.leafletElement) to the map--something that must happen BEFORE
		// we can add anything to Leaflet.Deflate itself.
		super.componentDidMount();
		Leaflet.geoJSON(this.props.data, this.props).addTo(this.leafletElement);
		if (markerCluster) this.initMapClasses();
	}

	updateLeafletElement(fromProps, toProps) {
		const { layerContainer } = this.props.leaflet || this.context;
		layerContainer.removeLayer(this.leafletElement);
		this.leafletElement = new Leaflet.Deflate(toProps);
		layerContainer.addLayer(this.leafletElement);
		Leaflet.geoJSON(toProps.data, toProps).addTo(this.leafletElement);
	}
}
