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

function showPosition(position) {
    console.log("Latitude: "+ position.coords.latitude+ "Longitude: " + position.coords.longitude);
}

function onError(error){
    console.log("Error Code: " + error.code);
}
