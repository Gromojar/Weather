
window.onload = show;
var temp;
var cloud;
var cloud_description;
var mydata;
var mydata2;
var gif;
var gifurl;
var requesturl;
var request = new XMLHttpRequest() // define first api request

request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Krakow,pl&units=metric&mode=json&APPID=606103aa99b1bf025d1b02ff40ca516e', true)
//request2.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=A1RvKIagTgv0e02pLft03AxVIcDE5H8S&q=Cloudy', true);
request.onload = function () {

}
request.send();
//request2.send();

function show() // main function
  {
//document.getElementById("cont2").text = "";
//document.getElementById("cont").text = "";
mydata = JSON.parse(request.response);


    temp = mydata.main.temp;
    cloud = mydata.weather[0].main;
    cloud_description = mydata.weather[0].description;
    gifurl = "https://api.giphy.com/v1/gifs/search?api_key=A1RvKIagTgv0e02pLft03AxVIcDE5H8S&q=" + cloud_description; // using variable to store and modify gif randomization


    gif = Math.floor((0 - -20) * Math.random());


    document.getElementById("cont").innerHTML = "In Kraków there are " + temp + "°C." + "<br><br>" + "I can see " + cloud_description;
fetch(gifurl) // giphy request for api
	.then(function (response) {
		// Get a JSON object from the response
		// This is a weird quirk of Fetch
		return response.json();
	}).then(function (data) {

	        mydata2 = data;

          var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
    // window width is at less than 570px
    urlgif = "<video width='250' height='250' autoplay loop>" + "<source src='" + mydata2.data[gif].images.looping.mp4 + "'type='video/mp4'>"
}
else {
    urlgif = "<video width='640' height='480' autoplay loop>" + "<source src='" + mydata2.data[gif].images.looping.mp4 + "'type='video/mp4'>"
}


      document.getElementById("cont2").innerHTML = urlgif;
	}).catch(function (error) {
		// if there's an error, log it
		console.log(error);
	});

}
show();
