const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2FsYW1pdHlhZGFtIiwiYSI6ImNqb2c3d2g2YjBjY2kzcXBuaHQ2Nm01aWwifQ.uZdG9AyEPK2g40QG-u2D5Q';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);

const marker = buildMarker('restaurants', [-87.641, 41.895]);
marker.addTo(map);
