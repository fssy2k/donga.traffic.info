// define epsg:5179 projection code
proj4.defs("EPSG:5179", "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// define epsg:5181 projection code
proj4.defs("EPSG:5181", "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
// define epsg:5187 projection code
proj4.defs("EPSG:5187", "+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs");
// define epsg:5183 projection code
proj4.defs("EPSG:5183", "+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs");
ol.proj.setProj4 = proj4;

// 화면 로딩
$(document).ready(function () {
	initMap();
});

var resolutions = [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25];
var extent_vworld = [13756219.106426602, 3860987.1727408236, 14666125.491133342, 4863840.983842337];
var currentCRS = 'EPSG:3857';
var basemapLayerIndex = 0;
var wmsLayerIndex = {
	getIndex09 : 9,
	getIndex10 : 10
}

// 브이월드 layer tile 객체 
var vworldTileLayer = new ol.layer.Tile({
	title: 'vworld_title',
	visible: true,
	type: 'base',
	zIndex: basemapLayerIndex,
	source: new ol.source.XYZ({
		url: 'http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png',
//    	crossDomain: true,
//    	crossOrigin: "Anonymous"
    })
});

var views = new ol.View({
	maxZoom: 19,
	minZoom: 0,
//	extent: extent_vworld,
	center: [14379801.97, 4186928.96],
	zoom: 15
});

// initialize Map object
var baseMap, zoomslider;
function initMap() {
	baseMap = new ol.Map({
		target: 'map',
		layers: [
			new ol.layer.Group({
				'title': 'basemap_group',
				layers: [vworldTileLayer]
            }),
            new ol.layer.Group({
            	'title': 'WMS',
            	layers: [boomMapProTileLayer, haeundaeMapLinkTileLayer]
            })
        ],
        view: views
    });
}

// geoserver WMS Layer - 혼잡도로
var boomMapProTileLayer = new ol.layer.Tile({
	title: 'boomMapProTileLayer',
	visible: true,
	type: 'wms',
	zIndex: wmsLayerIndex.getIndex10,
	source: new ol.source.TileWMS({
//		url: 'http://sncinfo.iptime.org:8082/geoserver/wms',
		url: 'http://192.168.0.37:8085/geoserver/wms',
		serverType: 'geoserver',
		// 1.1.0 확인
		transition: 0,
		params: {
			'LAYERS': 'dongaTraffic:boom_map_pro',
			'FORMAT': 'image/png',
			'WIDTH': 256,
			'HEIGHT': 256,
			'TILED': true,
			'VERSION': '1.1.0',
			'SRS': 'EPSG:3857'
        }
    })
});


//geoserver WMS Layer - 해운대구 LINK
var haeundaeMapLinkTileLayer = new ol.layer.Tile({
	title: 'haeundaeMapLinkTileLayer',
	visible: true,
	type: 'wms',
	zIndex: wmsLayerIndex.getIndex09,
	source: new ol.source.TileWMS({
//		url: 'http://sncinfo.iptime.org:8082/geoserver/wms',
		url: 'http://192.168.0.37:8085/geoserver/wms',
		serverType: 'geoserver',
		// 1.1.0 확인
		transition: 0,
		params: {
			'LAYERS': 'dongaTraffic:haeundae_map_link',
			'FORMAT': 'image/png',
			'WIDTH': 256,
			'HEIGHT': 256,
			'TILED': true,
			'VERSION': '1.1.0',
			'SRS': 'EPSG:3857'
        }
    })
});


