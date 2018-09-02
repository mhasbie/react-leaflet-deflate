'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

var _Leaflet = require('Leaflet.Deflate');

var _reactLeaflet = require('react-leaflet');

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
			return new _Leaflet.DeflatedFeatureGroup(props);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			// This will add our DeflatedFeatureGroup (this.leafletElement) to the map--something that must happen BEFORE
			// we can add anything to DeflatedFeatureGroup itself.
			_get(Deflate.prototype.__proto__ || Object.getPrototypeOf(Deflate.prototype), 'componentDidMount', this).call(this);
			_leaflet2.default.geoJSON(this.props.data, this.props).addTo(this.leafletElement);
		}
	}, {
		key: 'updateLeafletElement',
		value: function updateLeafletElement(fromProps, toProps) {
			this.props.leaflet.layerContainer.removeLayer(this.leafletElement);
			this.leafletElement = new _Leaflet.DeflatedFeatureGroup(toProps);
			this.props.leaflet.layerContainer.addLayer(this.leafletElement);
			_leaflet2.default.geoJSON(toProps.data, toProps).addTo(this.leafletElement);
		}
	}]);

	return Deflate;
}(_reactLeaflet.MapLayer);

exports.default = (0, _reactLeaflet.withLeaflet)(Deflate);