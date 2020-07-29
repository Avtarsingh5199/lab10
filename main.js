// JavaScript Document

/*function initMap() {
  
let georgian = {
    lat: 44.4121016,
    lng: -79.6689532
  }; 

let div = document.querySelector('div'); 

//create new map object
let map = new google.maps.Map(div, {
  zoom: 18,
  center: georgian
});

//create a new marker object 

let marker = new google.maps.Marker({position:georgian, map:map}); 
}*/

let map; 
let infoWindow; 


function initMap() {
  
let georgian = {
    lat: 44.4121016,
    lng: -79.6689532
  }; 

let div = document.querySelector('div'); 

//create new map object
let map = new google.maps.Map(div, {
  zoom: 18,
  center: georgian
});
  
let infoWindow = new google.map.InfoWindow; 
  
//Try HTML5 geolocation 
  
if (navigator.geolocation)  {
  navigator.geolocation.getCurrentPosition(function(position) {
    let pos = {
      lat: position.coords.latitude, 
      lng: position.coords.longitude,                                      
    }; 
    infoWindow.setPositon(pos); 
    infoWindow.setContent('Location found'); 
    infoWindow.open(map); 
    map.setCenter(pos);                                        
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter()); 
  });  
} else  {
  handleLocationError(false, infoWindow, map.getCenter()); 
  }
}

/* This code inspired by: 
https://developers.google.com/maps/documentation/javascript/adding-a-google-map
*/