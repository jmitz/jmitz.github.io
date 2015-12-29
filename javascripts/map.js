var map = new L.Map('divMap',
	{center: new L.LatLng(40.5, -89.5), zoom: 8});

var baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
function onLocationFound(e) {
	console.log(e);
   var radius = e.accuracy / 2;
   L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters of this point").openPopup();
   L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
   alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});