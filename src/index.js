import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { addOffset, addTileLayer, getAddress, validateIp } from './helpers';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', () => {
  if (validateIp(ipInput.value)) {
    getAddress(ipInput.value).then(setInfo);
  }
});

ipInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (validateIp(ipInput.value)) getAddress(ipInput.value).then(setInfo);
  }
});

const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
});

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
  center: [51.505, -0.09],
  zoom: 13,
  zoomControl: false
});

addTileLayer(map);

document.addEventListener('DOMContentLoaded', () => {
  getAddress('102.22.22.1').then(setInfo);
})

function setInfo(mapData) {
  const { lat, lng, country, region, timezone } = mapData.location;

  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = country + ' ' + region;
  timezoneInfo.innerText = timezone;
  ispInfo.innerText = mapData.isp;

  map.setView([lat, lng]);
  L.marker([lat, lng], { icon: markerIcon }).addTo(map);
  matchMedia("(max-width: 1023px)").matches && addOffset(map);
}
