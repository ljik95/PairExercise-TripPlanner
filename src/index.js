const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2FsYW1pdHlhZGFtIiwiYSI6ImNqb2c3d2g2YjBjY2kzcXBuaHQ2Nm01aWwifQ.uZdG9AyEPK2g40QG-u2D5Q';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
