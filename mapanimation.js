// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RsNDAzNjEiLCJhIjoiY2xwNjN6N3NoMW10OTJpcWl1Zmp2c3NrbiJ9.kb_l1ivAUzaZWK9FiL_kbA';

// This is the map instance
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-71.104081, 42.365554],
    zoom: 3,
});
  
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
const el = document.createElement('div');
el.className = 'marker';

let marker = new mapboxgl.Marker(el)
    .setLngLat([-71.104081, 42.365554])
    .addTo(map);

let moving = false;

function move() {

    document.getElementById('button').innerText = "Following ISS"
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then(result => result.json())
    .then(parsedJSON => {
        let lat = Number(parsedJSON.latitude);
        let lng = Number(parsedJSON.longitude);
        marker.setLngLat([lng, lat]);
        map.setCenter([lng, lat])
        setTimeout(async () => {
            move();
        }, 5000)
        
    })
    .catch(e => {
        console.error('Fetch Error> ', e);
    })

}