var myLat = "";
var myLong = "";

function getLocation() {
    if (navigator.geolocation) {
				console.log("Geolocation is on");
        navigator.geolocation.getCurrentPosition(showPosition, onError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getLocationIP() {
  // get location based on IP, this will be deprecated for handheld devices like phones or tablets
}

function showPosition(position){
    console.log("Latitude: "+ position.coords.latitude+ "Longitude: " + position.coords.longitude);
}

function onError(error){
    console.log("Cannot get current location, Error Code: " + error.code);
}
