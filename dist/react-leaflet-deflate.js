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

	L.Deflate=L.FeatureGroup.extend({options:{minSize:10,markerCluster:!1,markerOptions:{},markerClusterOptions:{}},initialize:function(e){L.Util.setOptions(this,e),this._allLayers=[],this._featureGroup=this.options.markerCluster?L.markerClusterGroup(this.options.markerClusterOptions):L.featureGroup()},_isCollapsed:function(e,t){var r=e.getBounds(),o=this._map.project(r.getNorthEast(),t),s=this._map.project(r.getSouthWest(),t),i=o.x-s.x;return s.y-o.y<this.options.minSize||i<this.options.minSize},_getZoomThreshold:function(e){var t=null,r=this._map.getZoom();if(this._isCollapsed(e,this._map.getZoom()))for(;!t;)r+=1,this._isCollapsed(e,r)||(t=r-1);else for(;!t;)r-=1,this._isCollapsed(e,r)&&(t=r);return t},_bindInfoTools:function(e,t){t._popupHandlersAdded&&e.bindPopup(t._popup._content),t._tooltipHandlersAdded&&e.bindTooltip(t._tooltip._content)},_bindEvents:function(e,t){this._bindInfoTools(e,t);var r=t._events;for(var o in r)if(r.hasOwnProperty(o))for(var s=r[o],i=0,a=s.length;i<a;i++)e.on(o,s[i].fn);if(t._eventParents)for(var n in t._eventParents)if(t._eventParents.hasOwnProperty(n)){if(t._eventParents[n]._map)continue;this._bindEvents(e,t._eventParents[n]),this._bindInfoTools(t,t._eventParents[n])}},_makeMarker:function(e){var t;t="function"==typeof this.options.markerOptions?this.options.markerOptions(e):this.options.markerOptions;var r=L.marker(e.getBounds().getCenter(),t);return this._bindEvents(r,e),r},addLayer:function(e){if(e instanceof L.FeatureGroup)for(var t in e._layers)this.addLayer(e._layers[t]);else{var r=e;if(e.getBounds&&!e.zoomThreshold&&!e.marker){var o=this._getZoomThreshold(e);e.zoomThreshold=o,e.marker=this._makeMarker(e),e.zoomState=this._map.getZoom(),this._map.getZoom()<=o&&(r=e.marker),this._allLayers.push(e)}this._featureGroup.addLayer(r)}},removeLayer:function(e){if(e instanceof L.FeatureGroup)for(var t in e._layers)this.removeLayer(e._layers[t]);else{this._featureGroup.removeLayer(e.marker),this._featureGroup.removeLayer(e);var r=this._allLayers.indexOf(e);-1!==r&&this._allLayers.splice(r,1)}},_switchDisplay:function(e,t){t?(this._featureGroup.addLayer(e.marker),this._featureGroup.removeLayer(e)):(this._featureGroup.addLayer(e),this._featureGroup.removeLayer(e.marker))},_deflate:function(){for(var e=this._map.getBounds(),t=this._map.getZoom(),r=0,o=this._allLayers.length;r<o;r++)this._allLayers[r].zoomState!==t&&this._allLayers[r].getBounds().intersects(e)&&(this._switchDisplay(this._allLayers[r],t<=this._allLayers[r].zoomThreshold),this._allLayers[r].zoomState=t)},getBounds:function(){return this._featureGroup.getBounds()},onAdd:function(e){this._featureGroup.addTo(e),this._map.on("zoomend",this._deflate,this),this._map.on("moveend",this._deflate,this)},onRemove:function(e){e.removeLayer(this._featureGroup),this._map.off("zoomend",this._deflate,this),this._map.off("moveend",this._deflate,this)}}),L.deflate=function(e){return new L.Deflate(e)};

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