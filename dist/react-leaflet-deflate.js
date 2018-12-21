(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("leaflet"), require("react-leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["leaflet", "react-leaflet"], factory);
	else if(typeof exports === 'object')
		exports["ReactLeafletDeflate"] = factory(require("leaflet"), require("react-leaflet"));
	else
		root["ReactLeafletDeflate"] = factory(root["L"], root["ReactLeaflet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
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

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _leaflet = __webpack_require__(2);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _Leaflet = __webpack_require__(3);

	var _reactLeaflet = __webpack_require__(4);

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	L.Deflate=L.FeatureGroup.extend({options:{minSize:10,markerCluster:false,markerOptions:{},markerClusterOptions:{}},initialize:function(options){L.Util.setOptions(this,options);this._allLayers=[];L.FeatureGroup.prototype.initialize.call(this,[],options);if(options.markerCluster){this.clusterLayer=L.markerClusterGroup(this.options.markerClusterOptions)}},_getBounds:function(path){if(path instanceof L.Circle){path.addTo(this._map);var bounds=path.getBounds();this._map.removeLayer(path);return bounds}return path.getBounds()},_isCollapsed:function(path,zoom){var bounds=path.computedBounds;var ne_px=this._map.project(bounds.getNorthEast(),zoom);var sw_px=this._map.project(bounds.getSouthWest(),zoom);var width=ne_px.x-sw_px.x;var height=sw_px.y-ne_px.y;return height<this.options.minSize||width<this.options.minSize},_getZoomThreshold:function(path){var zoomThreshold=null;var zoom=this._map.getZoom();if(this._isCollapsed(path,this._map.getZoom())){while(!zoomThreshold){zoom+=1;if(!this._isCollapsed(path,zoom)){zoomThreshold=zoom-1}}}else{while(!zoomThreshold){zoom-=1;if(this._isCollapsed(path,zoom)){zoomThreshold=zoom}}}return zoomThreshold},_bindInfoTools:function(marker,parentLayer){if(parentLayer._popupHandlersAdded){marker.bindPopup(parentLayer._popup._content,parentLayer._popup.options)}if(parentLayer._tooltipHandlersAdded){marker.bindTooltip(parentLayer._tooltip._content,parentLayer._tooltip.options)}},_bindEvents:function(marker,parentLayer){this._bindInfoTools(marker,parentLayer);var events=parentLayer._events;for(var event in events){if(events.hasOwnProperty(event)){var listeners=events[event];for(var i=0,len=listeners.length;i<len;i++){marker.on(event,listeners[i].fn)}}}if(!parentLayer._eventParents){return}for(var key in parentLayer._eventParents){if(parentLayer._eventParents.hasOwnProperty(key)){if(parentLayer._eventParents[key]._map){continue}this._bindEvents(marker,parentLayer._eventParents[key]);this._bindInfoTools(parentLayer,parentLayer._eventParents[key])}}},_makeMarker:function(layer){var markerOptions;if(typeof this.options.markerOptions==="function"){markerOptions=this.options.markerOptions(layer)}else{markerOptions=this.options.markerOptions}var marker=L.marker(layer.computedBounds.getCenter(),markerOptions);this._bindEvents(marker,layer);if(layer.feature){var markerFeature=marker.toGeoJSON();markerFeature.properties=layer.feature.properties;marker.feature=markerFeature}return marker},addLayer:function(layer){if(layer instanceof L.FeatureGroup){for(var i in layer._layers){this.addLayer(layer._layers[i])}}else{var layerToAdd=layer;if(layer.getBounds&&!layer.zoomThreshold&&!layer.marker){layer.computedBounds=this._getBounds(layer);var zoomThreshold=this._getZoomThreshold(layer);layer.zoomThreshold=zoomThreshold;layer.marker=this._makeMarker(layer);layer.zoomState=this._map.getZoom();if(this._map.getZoom()<=zoomThreshold){layerToAdd=layer.marker}this._allLayers.push(layer)}if(this.clusterLayer){this.clusterLayer.addLayer(layerToAdd)}else{L.FeatureGroup.prototype.addLayer.call(this,layerToAdd)}}},removeLayer:function(layer){if(layer instanceof L.FeatureGroup){for(var i in layer._layers){this.removeLayer(layer._layers[i])}}else{var markerLayer=this.clusterLayer?this.clusterLayer:this._map;markerLayer.removeLayer(layer);if(layer.marker){markerLayer.removeLayer(layer.marker)}var index=this._allLayers.indexOf(layer);if(index!==-1){this._allLayers.splice(index,1)}}},clearLayers:function(){if(this.clusterLayer){this.clusterLayer.clearLayers();this._allLayers=[]}else{L.FeatureGroup.prototype.clearLayers.call(this)}},_switchDisplay:function(layer,showMarker){var markerLayer=this.clusterLayer?this.clusterLayer:this._map;if(showMarker){markerLayer.addLayer(layer.marker);markerLayer.removeLayer(layer)}else{markerLayer.addLayer(layer);markerLayer.removeLayer(layer.marker)}},_deflate:function(){var bounds=this._map.getBounds();var endZoom=this._map.getZoom();for(var i=0,len=this._allLayers.length;i<len;i++){if(this._allLayers[i].marker&&this._allLayers[i].zoomState!==endZoom&&this._allLayers[i].computedBounds.intersects(bounds)){this._switchDisplay(this._allLayers[i],endZoom<=this._allLayers[i].zoomThreshold);this._allLayers[i].zoomState=endZoom}}},onAdd:function(map){if(this.clusterLayer){this.clusterLayer.addTo(map)}this._map.on("zoomend",this._deflate,this);this._map.on("moveend",this._deflate,this)},onRemove:function(map){if(this.clusterLayer){map.removeLayer(this.cluster)}this._map.off("zoomend",this._deflate,this);this._map.off("moveend",this._deflate,this)}});L.deflate=function(options){return new L.Deflate(options)};

	/*** EXPORTS FROM exports-loader ***/
	exports["DeflatedFeatureGroup"] = (L.Deflate);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ])
});
;