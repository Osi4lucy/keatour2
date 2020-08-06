//const { doc } = require('prettier');

/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoib3NpbGFtYWgiLCJhIjoiY2tkZWRndWd2MDJtdTJ4bzU5NXZwNXo0biJ9.cKyLkqMg2Qmr9YGQ6cR4sw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/osilamah/ckdedy8d24zod1hl689nmhu79',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom:4
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}<p>`)
      .addTo(map);
    // extends the map bounds to include the current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
