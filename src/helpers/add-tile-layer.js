import L from 'leaflet';

const accessToken = 'pk.eyJ1Ijoia29zaG1hcjEzMTkiLCJhIjoiY2t3bTZnNHhlMDVsaTJwcXQ3M2VlYmdvNSJ9.M3N8jYTutIiPcKv0bzNLiQ';

export function addTileLayer(map) {
  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/koshmar1319" target="_blank">Kirill Komarkov</a>.',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(map);
}
