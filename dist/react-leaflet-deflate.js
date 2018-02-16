window["ReactLeafletDeflate"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Deflate = __webpack_require__(1);

	var _Deflate2 = _interopRequireDefault(_Deflate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Deflate2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactLeaflet = __webpack_require__(2);

	var _leaflet = __webpack_require__(3);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	__webpack_require__(4);

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
				if (markerCluster) map._container.className += ' marker-cluster-styled marker-cluster-animated';
			}
		}]);

		return Deflate;
	}(_reactLeaflet.MapLayer);

	exports.default = Deflate;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	(function() { module.exports = window[undefined]; }());

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	(function() { module.exports = window[undefined]; }());

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	L.Deflate = L.FeatureGroup.extend({
	    options: {
	        minSize: 10,
	        markerCluster: false,
	        markerOptions: {}
	    },

	    initialize: function initialize(options) {
	        L.Util.setOptions(this, options);
	        this._allLayers = [];
	        this._featureGroup = this.options.markerCluster ? L.markerClusterGroup() : L.featureGroup();
	    },

	    _isCollapsed: function _isCollapsed(path, zoom) {
	        var bounds = path.getBounds();

	        var ne_px = this._map.project(bounds.getNorthEast(), zoom);
	        var sw_px = this._map.project(bounds.getSouthWest(), zoom);

	        var width = ne_px.x - sw_px.x;
	        var height = sw_px.y - ne_px.y;
	        return height < this.options.minSize || width < this.options.minSize;
	    },

	    _getZoomThreshold: function _getZoomThreshold(path) {
	        var zoomThreshold = null;
	        var zoom = this._map.getZoom();
	        if (this._isCollapsed(path, this._map.getZoom())) {
	            while (!zoomThreshold) {
	                zoom += 1;
	                if (!this._isCollapsed(path, zoom)) {
	                    zoomThreshold = zoom - 1;
	                }
	            }
	        } else {
	            while (!zoomThreshold) {
	                zoom -= 1;
	                if (this._isCollapsed(path, zoom)) {
	                    zoomThreshold = zoom;
	                }
	            }
	        }
	        return zoomThreshold;
	    },

	    _bindInfoTools: function _bindInfoTools(marker, parentLayer) {
	        if (parentLayer._popupHandlersAdded) {
	            marker.bindPopup(parentLayer._popup._content);
	        }

	        if (parentLayer._tooltipHandlersAdded) {
	            marker.bindTooltip(parentLayer._tooltip._content);
	        }
	    },

	    _bindEvents: function _bindEvents(marker, parentLayer) {
	        this._bindInfoTools(marker, parentLayer);

	        var events = parentLayer._events;
	        for (var event in events) {
	            if (events.hasOwnProperty(event)) {
	                var listeners = events[event];
	                for (var i = 0, len = listeners.length; i < len; i++) {
	                    marker.on(event, listeners[i].fn);
	                }
	            }
	        }

	        // For FeatureGroups we need to bind all events, tooltips and popups
	        // from the FeatureGroup to each marker
	        if (!parentLayer._eventParents) {
	            return;
	        }

	        for (var key in parentLayer._eventParents) {
	            if (parentLayer._eventParents.hasOwnProperty(key)) {
	                if (parentLayer._eventParents[key]._map) {
	                    continue;
	                }
	                this._bindEvents(marker, parentLayer._eventParents[key]);

	                // We're copying all layers of a FeatureGroup, so we need to bind
	                // all tooltips and popups to the original feature.
	                this._bindInfoTools(parentLayer, parentLayer._eventParents[key]);
	            }
	        }
	    },

	    _makeMarker: function _makeMarker(layer) {
	        var markerOptions;

	        if (typeof this.options.markerOptions === 'function') {
	            markerOptions = this.options.markerOptions(layer);
	        } else {
	            markerOptions = this.options.markerOptions;
	        }

	        var marker = L.marker(layer.getBounds().getCenter(), markerOptions);
	        this._bindEvents(marker, layer);

	        return marker;
	    },

	    addLayer: function addLayer(layer) {
	        if (layer instanceof L.FeatureGroup) {
	            for (var i in layer._layers) {
	                this.addLayer(layer._layers[i]);
	            }
	        } else {
	            var layerToAdd = layer;
	            if (layer.getBounds && !layer.zoomThreshold && !layer.marker) {
	                var zoomThreshold = this._getZoomThreshold(layer);

	                layer.zoomThreshold = zoomThreshold;
	                layer.marker = this._makeMarker(layer);
	                layer.zoomState = this._map.getZoom();

	                if (this._map.getZoom() <= zoomThreshold) {
	                    layerToAdd = layer.marker;
	                }
	                this._allLayers.push(layer);
	            }

	            this._featureGroup.addLayer(layerToAdd);
	        }
	    },

	    removeLayer: function removeLayer(layer) {
	        if (layer instanceof L.FeatureGroup) {
	            for (var i in layer._layers) {
	                this.removeLayer(layer._layers[i]);
	            }
	        } else {
	            this._featureGroup.removeLayer(layer.marker);
	            this._featureGroup.removeLayer(layer);

	            var index = this._allLayers.indexOf(layer);
	            if (index !== -1) {
	                this._allLayers.splice(index, 1);
	            }
	        }
	    },

	    _switchDisplay: function _switchDisplay(layer, showMarker) {
	        if (showMarker) {
	            this._featureGroup.addLayer(layer.marker);
	            this._featureGroup.removeLayer(layer);
	        } else {
	            this._featureGroup.addLayer(layer);
	            this._featureGroup.removeLayer(layer.marker);
	        }
	    },

	    _deflate: function _deflate() {
	        var bounds = this._map.getBounds();
	        var endZoom = this._map.getZoom();
	        var markersToAdd = [];
	        var markersToRemove = [];

	        for (var i = 0, len = this._allLayers.length; i < len; i++) {
	            if (this._allLayers[i].zoomState !== endZoom && this._allLayers[i].getBounds().intersects(bounds)) {
	                this._switchDisplay(this._allLayers[i], endZoom <= this._allLayers[i].zoomThreshold);
	                this._allLayers[i].zoomState = endZoom;
	            }
	        }
	    },

	    getBounds: function getBounds() {
	        return this._featureGroup.getBounds();
	    },

	    onAdd: function onAdd(map) {
	        this._featureGroup.addTo(map);
	        this._map.on("zoomend", this._deflate, this);
	        this._map.on("moveend", this._deflate, this);
	    },

	    onRemove: function onRemove(map) {
	        map.removeLayer(this._featureGroup);
	        this._map.off("zoomend", this._deflate, this);
	        this._map.off("moveend", this._deflate, this);
	    }
	});

	L.deflate = function (options) {
	    return new L.Deflate(options);
	};

/***/ })
/******/ ]);