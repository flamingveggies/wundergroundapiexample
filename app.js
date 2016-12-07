var input = document.getElementById("query");
var button = document.getElementById("getdata");
var div = document.getElementById("results");

button.addEventListener("click", function() {
    
    var urlBase = "//api.wunderground.com/api/e0bb37aff4e256e4/conditions/q/";
    var urlEnd = ".json";
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", callback);
    xhr.open("GET", urlBase + input.value + urlEnd);
    xhr.send();
    
    function callback() {
        var data = JSON.parse(xhr.responseText);
        var htmlString = "";
        
        htmlString += '<h3>Current Weather in ' + data.current_observation.display_location.full + '</h3>'
        htmlString += '<p><img src="' + data.current_observation.icon_url.slice(5) + '"</img> ' + data.current_observation.weather + '</p>'
        htmlString += '<p>Current Temperature: ' + data.current_observation.temperature_string + '</p>'
        
        div.innerHTML = htmlString;
    }
    
});