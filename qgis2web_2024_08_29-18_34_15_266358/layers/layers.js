var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Encuesta_290824_1 = new ol.format.GeoJSON();
var features_Encuesta_290824_1 = format_Encuesta_290824_1.readFeatures(json_Encuesta_290824_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Encuesta_290824_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Encuesta_290824_1.addFeatures(features_Encuesta_290824_1);
var lyr_Encuesta_290824_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Encuesta_290824_1, 
                style: style_Encuesta_290824_1,
                popuplayertitle: "Encuesta_290824",
                interactive: true,
                title: '<img src="styles/legend/Encuesta_290824_1.png" /> Encuesta_290824'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Encuesta_290824_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Encuesta_290824_1];
lyr_Encuesta_290824_1.set('fieldAliases', {'Marca temporal': 'Marca temporal', 'Nombre de la organización  (organizaciones)': 'Nombre de la organización  (organizaciones)', 'Nombre del primer contacto': 'Nombre del primer contacto', 'Email del primer contacto': 'Email del primer contacto', 'Teléfono del primer contacto': 'Teléfono del primer contacto', 'Nombre del segundo contacto': 'Nombre del segundo contacto', 'Email del segundo contacto': 'Email del segundo contacto', 'Teléfono del segundo contacto': 'Teléfono del segundo contacto', '¿Cuántas personas conformar la organización?': '¿Cuántas personas conformar la organización?', 'Nombre de la activación/intervención': 'Nombre de la activación/intervención', '¿Cuál es el objetivo de tu intervención?': '¿Cuál es el objetivo de tu intervención?', '¿Cómo es el perfil ideal de lxs participantes de la activación / intervención?': '¿Cómo es el perfil ideal de lxs participantes de la activación / intervención?', '¿En qué municipio(s) se llevará a cabo?': '¿En qué municipio(s) se llevará a cabo?', 'Calle': 'Calle', 'Número': 'Número', 'Colonia': 'Colonia', 'Código postal': 'Código postal', 'Referencia(s)': 'Referencia(s)', 'Incluye la ubicación con un link de Google Maps': 'Incluye la ubicación con un link de Google Maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Horario de inicio de la actividad': 'Horario de inicio de la actividad', 'Horario de termino de la actividad': 'Horario de termino de la actividad', '¿Cuál es tu motivación para participar en #100en1DiaMty?': '¿Cuál es tu motivación para participar en #100en1DiaMty?', '¿A qué ODS contribuye tu iniciativa?': '¿A qué ODS contribuye tu iniciativa?', '¿Te comprometes a realizar la intervención el 1 de septiembre en caso de ser seleccionado?': '¿Te comprometes a realizar la intervención el 1 de septiembre en caso de ser seleccionado?', });
lyr_Encuesta_290824_1.set('fieldImages', {'Marca temporal': '', 'Nombre de la organización  (organizaciones)': '', 'Nombre del primer contacto': '', 'Email del primer contacto': '', 'Teléfono del primer contacto': '', 'Nombre del segundo contacto': '', 'Email del segundo contacto': '', 'Teléfono del segundo contacto': '', '¿Cuántas personas conformar la organización?': '', 'Nombre de la activación/intervención': '', '¿Cuál es el objetivo de tu intervención?': '', '¿Cómo es el perfil ideal de lxs participantes de la activación / intervención?': '', '¿En qué municipio(s) se llevará a cabo?': '', 'Calle': '', 'Número': '', 'Colonia': '', 'Código postal': '', 'Referencia(s)': '', 'Incluye la ubicación con un link de Google Maps': '', 'Latitud': '', 'Longitud': '', 'Horario de inicio de la actividad': '', 'Horario de termino de la actividad': '', '¿Cuál es tu motivación para participar en #100en1DiaMty?': '', '¿A qué ODS contribuye tu iniciativa?': '', '¿Te comprometes a realizar la intervención el 1 de septiembre en caso de ser seleccionado?': '', });
lyr_Encuesta_290824_1.set('fieldLabels', {'Marca temporal': 'inline label - visible with data', 'Nombre de la organización  (organizaciones)': 'inline label - visible with data', 'Nombre del primer contacto': 'inline label - visible with data', 'Email del primer contacto': 'inline label - visible with data', 'Teléfono del primer contacto': 'inline label - visible with data', 'Nombre del segundo contacto': 'inline label - visible with data', 'Email del segundo contacto': 'inline label - visible with data', 'Teléfono del segundo contacto': 'inline label - visible with data', '¿Cuántas personas conformar la organización?': 'inline label - visible with data', 'Nombre de la activación/intervención': 'inline label - visible with data', '¿Cuál es el objetivo de tu intervención?': 'inline label - visible with data', '¿Cómo es el perfil ideal de lxs participantes de la activación / intervención?': 'inline label - visible with data', '¿En qué municipio(s) se llevará a cabo?': 'inline label - visible with data', 'Calle': 'inline label - visible with data', 'Número': 'inline label - visible with data', 'Colonia': 'inline label - visible with data', 'Código postal': 'inline label - visible with data', 'Referencia(s)': 'inline label - visible with data', 'Incluye la ubicación con un link de Google Maps': 'inline label - visible with data', 'Latitud': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'Horario de inicio de la actividad': 'inline label - visible with data', 'Horario de termino de la actividad': 'inline label - visible with data', '¿Cuál es tu motivación para participar en #100en1DiaMty?': 'inline label - visible with data', '¿A qué ODS contribuye tu iniciativa?': 'inline label - visible with data', '¿Te comprometes a realizar la intervención el 1 de septiembre en caso de ser seleccionado?': 'inline label - visible with data', });
lyr_Encuesta_290824_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});