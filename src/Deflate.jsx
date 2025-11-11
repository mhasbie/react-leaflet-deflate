import {
    createElementObject,
    createLayerComponent,
    updateGridLayer,
} from "@react-leaflet/core";
import { useMap } from "react-leaflet";
import 'leaflet.markercluster';
import 'Leaflet.Deflate';

const initMapClasses = () => {
	const map = useMap();

	const mapClassName = map.getContainer().className;

	const isAnimClassApplied = mapClassName.indexOf('leaflet-cluster-anim') !== -1;
	const isStyledClassApplied = mapClassName.indexOf('marker-cluster-styled') !== -1;
	const isAnimatedClassApplied = mapClassName.indexOf('marker-cluster-animated') !== -1;

	!isAnimClassApplied && (
		map.getContainer().className += ' leaflet-cluster-anim'
	);

	!isStyledClassApplied && (
		map.getContainer().className += ' marker-cluster-styled'
	);

	!isAnimatedClassApplied && (
		map.getContainer().className += ' marker-cluster-animated'
	);
}

const createDeflateLayer = (
    props,
    context
) => {
	const { markerCluster, data } = props;
	// This will add our Leaflet.Deflate (this.leafletElement) to the map--something that must happen BEFORE
	// we can add anything to Leaflet.Deflate itself.

	const deflateProps = { ...props };

	if (markerCluster) {
		initMapClasses();

		const markerLayer = L.markerClusterGroup();
		deflateProps.markerLayer = markerLayer;
	}

    const layer = new L.Deflate(deflateProps);
	L.geoJSON(data, props).addTo(layer);

    return createElementObject(layer, context);
};

const updateDeflateLayer = (
    layer,
    props,
    prevProps
) => {
    updateGridLayer(layer, props, prevProps);
};

export default createLayerComponent(
    createDeflateLayer,
    updateDeflateLayer
);
