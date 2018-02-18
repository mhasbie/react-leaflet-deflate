'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

require('leaflet.markercluster');

require('./L.Deflate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Deflate = function (_MapLayer) {
	_inherits(Deflate, _MapLayer);

	function Deflate() {
		_classCallCheck(this, Deflate);

		return _possibleConstructorReturn(this, (Deflate.__proto__ || Object.getPrototypeOf(Deflate)).apply(this, arguments));
	}

	_createClass(Deflate, [{
		key: 'createLeafletElement',
		value: function createLeafletElement(props) {
			var _props$minSize = props.minSize,
			    minSize = _props$minSize === undefined ? 10 : _props$minSize,
			    markerCluster = props.markerCluster,
			    markerOptions = props.markerOptions;

			return _leaflet2.default.deflate({ minSize: minSize, markerCluster: markerCluster, markerOptions: markerOptions });
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    data = _props.data,
			    style = _props.style,
			    onEachFeature = _props.onEachFeature,
			    pointToLayer = _props.pointToLayer,
			    filter = _props.filter,
			    markerCluster = _props.markerCluster;
			var _context = this.context,
			    map = _context.map,
			    pane = _context.pane,
			    layerContainer = _context.layerContainer;


			var geoJson = (0, _leaflet.geoJSON)(data, { style: style, onEachFeature: onEachFeature, pointToLayer: pointToLayer, filter: filter, pane: pane });
			this.leafletElement.addTo(layerContainer);
			this.leafletElement.addLayer(geoJson);
			if (markerCluster) map._container.className += ' leaflet-cluster-anim marker-cluster-styled marker-cluster-animated';
		}
	}]);

	return Deflate;
}(_reactLeaflet.MapLayer);

exports.default = Deflate;