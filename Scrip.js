const x= document.getElementById("demo"); 
function Locations(){ 
    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(showPosition); 

    }else{ 
        x.innerHTML= "Geolocation is not supported by this browser."; 
    }
}
function showPosition(position){ 
    x.innerHTML= "Latitude:" + position.coords.latitude+ 
    "<br>Longitude:"+ position.coords.longitude; 
}