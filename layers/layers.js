var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASI_DESA_1 = new ol.format.GeoJSON();
var features_ADMINISTRASI_DESA_1 = format_ADMINISTRASI_DESA_1.readFeatures(json_ADMINISTRASI_DESA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_DESA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_DESA_1.addFeatures(features_ADMINISTRASI_DESA_1);
var lyr_ADMINISTRASI_DESA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_DESA_1, 
                style: style_ADMINISTRASI_DESA_1,
                popuplayertitle: "ADMINISTRASI_DESA",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_DESA_1.png" /> ADMINISTRASI_DESA'
            });
var format_PERGURUAN_TINGGI1_2 = new ol.format.GeoJSON();
var features_PERGURUAN_TINGGI1_2 = format_PERGURUAN_TINGGI1_2.readFeatures(json_PERGURUAN_TINGGI1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERGURUAN_TINGGI1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERGURUAN_TINGGI1_2.addFeatures(features_PERGURUAN_TINGGI1_2);
var lyr_PERGURUAN_TINGGI1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERGURUAN_TINGGI1_2, 
                style: style_PERGURUAN_TINGGI1_2,
                popuplayertitle: "PERGURUAN_TINGGI1",
                interactive: true,
                title: '<img src="styles/legend/PERGURUAN_TINGGI1_2.png" /> PERGURUAN_TINGGI1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASI_DESA_1.setVisible(true);lyr_PERGURUAN_TINGGI1_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASI_DESA_1,lyr_PERGURUAN_TINGGI1_2];
lyr_ADMINISTRASI_DESA_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PERGURUAN_TINGGI1_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'x': 'x', 'y': 'y', 'NAMA': 'NAMA', });
lyr_ADMINISTRASI_DESA_1.set('fieldImages', {'OBJECTID': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_PERGURUAN_TINGGI1_2.set('fieldImages', {'OBJECTID': '', 'Id': '', 'x': '', 'y': '', 'NAMA': '', });
lyr_ADMINISTRASI_DESA_1.set('fieldLabels', {'OBJECTID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_PERGURUAN_TINGGI1_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'x': 'no label', 'y': 'no label', 'NAMA': 'inline label - visible with data', });
lyr_PERGURUAN_TINGGI1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});