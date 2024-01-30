
const API_KEY = config.WEATHER_KEY;

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`you live in ${lat} ${lng}`);
}

function onGeoError() {
  alert("Can't find you. No weather info");
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);