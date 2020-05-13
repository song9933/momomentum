const COORDS = 'coords';

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude,
        longitude
    };
}

function handleGeoError(){
    console.log('cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoreds = localStorage.getItem(COORDS);
    if(loadedCoreds === null){
        askForCoords();
    } else{

    }
}

function init(){
    loadCoords(); 
}

init();