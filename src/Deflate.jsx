import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'Leaflet.Deflate';


function Deflate(props) {
	const map = useMap();
	const deflateLayerRef = React.useRef(null);

	useEffect(() => {
		const { data, markerCluster } = props;

		if (deflateLayerRef.current) {
			map.removeLayer(deflateLayerRef.current);
		}

		const deflateProps = { ...props };

		if (markerCluster) {
			initMapClasses();

			const markerLayer = L.markerClusterGroup();
			deflateProps.markerLayer = markerLayer;
		}

		const newDeflateLayer = new L.Deflate(deflateProps);
		L.geoJSON(data, props).addTo(newDeflateLayer);

		deflateLayerRef.current = newDeflateLayer;
		map.addLayer(newDeflateLayer);

		// Cleanup function to remove the layer when the component unmounts
		return () => {
			if (deflateLayerRef.current) {
				map.removeLayer(deflateLayerRef.current);
			}
		};
	}, [props, map]);

	const initMapClasses = () => {
		const container = map.getContainer();
		const mapClassName = container.className;

		const isAnimClassApplied = mapClassName.indexOf('leaflet-cluster-anim') !== -1;
		const isStyledClassApplied = mapClassName.indexOf('marker-cluster-styled') !== -1;
		const isAnimatedClassApplied = mapClassName.indexOf('marker-cluster-animated') !== -1;

		!isAnimClassApplied && L.DomUtil.addClass(container, 'leaflet-cluster-anim');
		!isStyledClassApplied && L.DomUtil.addClass(container, 'marker-cluster-styled');
		!isAnimatedClassApplied && L.DomUtil.addClass(container, 'marker-cluster-animated');
	}

  	return null;
}

export default Deflate;
