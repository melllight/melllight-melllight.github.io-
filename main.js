var mapLayers = [];

var map = L.map('mapid').setView([54.783693, 56.053593], 11);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
 maxZoom: 18,
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
   '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
   'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 id: 'mapbox.streets'
}).addTo(map);

//добавление полигонов
function onEachFeature(feature, layer) {
 var popupContent = buildPopupText(feature);
 var popup = layer.bindPopup(popupContent);
}

//информация о полигонах и точках при нажатии на них
function buildPopupText(feature) {
  var popupContent = "";
  if (feature.properties.Name) {
    popupContent += "<p><b>Район:</b> " + feature.properties.Name + "</p>";
  }
  if (feature.properties.Founded) {
    popupContent += "<p><b>Основан:</b> " + feature.properties.Founded + " год</p>";
  }
  if (feature.properties.Population) {
    popupContent += "<p><b>Численность населения:</b> " + feature.properties.Population + "</p>";
  }
  if (feature.properties.Area) {
    popupContent += "<p><b>Площадь:</b> " + feature.properties.Area + "</p>";
  }
  if (feature.properties.GenInfo) {
    popupContent += "<p align='center'><b><b>Общая информация</b></b>" + feature.properties.GenInfo + "</p>";
  }
  if (feature.properties.NamePNZ) {
    popupContent += "<p><b>Станция:</b> " + feature.properties.NamePNZ + " </p>";
  }
  if (feature.properties.AdressPNZ) {
    popupContent += "<p><b>Адрес:</b> " + feature.properties.AdressPNZ + " </p>";
  }
  if (feature.properties.Pollution) {
    popupContent += "<p><b>Загрязнение:</b> " + feature.properties.Pollution + " (1 - есть загрязнение, 0 - нет)</p>";
  }
  if (feature.properties.ChemicalParams) {
    popupContent += "<p align='center'><b><b>Данные о концентрации веществ, мг/м<sup>3</sup></b></b>" + feature.properties.ChemicalParams + "</p>";
  }
  if (feature.properties.PM25) {
    popupContent += "<p><b>PM2.5: </b>" + feature.properties.PM25 + "</p>";
  }
  if (feature.properties.SO2) {
    popupContent += "<p><b>SO<sub>2</sub>: </b>" + feature.properties.SO2 + "</p>";
  }
  if (feature.properties.CO) {
    popupContent += "<p><b>CO: </b>" + feature.properties.CO + "</p>";
  }
  if (feature.properties.NO2) {
    popupContent += "<p><b>NO<sub>2</sub>: </b>" + feature.properties.NO2 + "</p>";
  }
  if (feature.properties.H2S) {
    popupContent += "<p><b>H<sub>2</sub>S: </b>" + feature.properties.H2S + "</p>";
  }
  if (feature.properties.С20Н12) {
    popupContent += "<p><b>С<sub>20</sub>Н<sub>12</sub>: </b>" + feature.properties.С20Н12 + "</p>";
  }
  if (feature.properties.C8H10) {
    popupContent += "<p><b>С<sub>8</sub>Н<sub>10</sub>: </b>" + feature.properties.C8H10 + "</p>";
  }
  if (feature.properties.C7H8) {
    popupContent += "<p><b>С<sub>7</sub>Н<sub>7</sub>: </b>" + feature.properties.C7H8 + "</p>";
  }
  if (feature.properties.C8H12) {
    popupContent += "<p><b>С<sub>8</sub>Н<sub>12</sub>: </b>" + feature.properties.C8H12 + "</p>";
  }
  if (feature.properties.C6H6) {
    popupContent += "<p><b>С<sub>6</sub>Н<sub>6</sub>: </b>" + feature.properties.C6H6 + "</p>";
  }
  if (feature.properties.CH2O) {
    popupContent += "<p><b>СH<sub>2</sub>O: </b>" + feature.properties.CH2O + "</p>";
  }
  if (feature.properties.NH3) {
    popupContent += "<p><b>NH<sub>3</sub>: </b>" + feature.properties.NH3 + "</p>";
  }
  if (feature.properties.CHCl3) {
    popupContent += "<p><b>CHCl<sub>3</sub>: </b>" + feature.properties.CHCl3 + "</p>";
  }
  if (feature.properties.CCl4) {
    popupContent += "<p><b>CCl<sub>4</sub>: </b>" + feature.properties.CCl4 + "</p>";
  }
  return popupContent;
}

//загружаем geoJSON файлы
  mapLayers.push(L.geoJSON(SovietAreaGeoJSON,
   {
     onEachFeature: onEachFeature,
     style: function (feature) {
       return {color: '#42AB42'};
     }
   }).addTo(map));

mapLayers.push(L.geoJSON(DemskiyAreaGeoJSON,
   {
     onEachFeature: onEachFeature,
     style: function (feature) {
       return {color: '#AA0551'};
     }
   }).addTo(map));

mapLayers.push(L.geoJSON(KalininskiyAreaGeoJSON,
   {
     onEachFeature: onEachFeature,
     style: function (feature) {
       return {color: '#3388ff'};
     }
   }).addTo(map));

mapLayers.push(L.geoJSON(KirovskiyAreaGeoJSON,
   {
     onEachFeature: onEachFeature,
     style: function (feature) {
       return {color: '#ff189f'};
     }
   }).addTo(map));

mapLayers.push(L.geoJSON(LeninAreaGeoJSON,
   {
     onEachFeature: onEachFeature,
     style: function (feature) {
       return {color: '#5f2aff'};
     }
   }).addTo(map));

mapLayers.push(L.geoJSON(OctoberAreaGeoJSON,
   {
     onEachFeature: onEachFeature,
     style: function (feature) {
       return {color: '#21cfff'};
     }
   }).addTo(map));

mapLayers.push(L.geoJSON(OrdzhoAreaGeoJSON,
   {
     onEachFeature: onEachFeature,
     style: function (feature) {
       return {color: '#ff6b08'};
     }
   }).addTo(map));

//Датчики
var geojsonMarkerOptions = {
    radius: 7,
    fillColor: "#ff5005",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
};

mapLayers.push(L.geoJSON(SensorsJSON, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    onEachFeature: onEachFeature
}).addTo(map));

$(function () {
        $("#btn").click(function () {
            $("#myModal").modal('show');
        });
      });

var UfaPolygons = L.tileLayer.wms('http://localhost:8080/geoserver/InterfaceGIS/wms', {
        layers : 'InterfaceGIS:polygon',
        transparent : true,
        format : 'image/png',
        //zIndex : 5,
        opacity : 0.65
    }).addTo(map);

var UfaPoints = L.tileLayer.wms('http://localhost:8080/geoserver/InterfaceGIS/wms', {
        layers : 'InterfaceGIS:stations',
        transparent : true,
        format : 'image/png',
        //zIndex : 5,
        opacity : 1
    }).addTo(map);






