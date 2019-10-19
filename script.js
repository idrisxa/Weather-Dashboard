$("#getButton").on("click", function(event) {
    
event.preventDefault();
getandDisplayWeather();
searchHistory();
});

$("#clearButton").on("click", function(event) {
    
    event.preventDefault();
    clearHistory();
});

$("#history1").on("click", function(event) {
  
    event.preventDefault();
    $("#city-input").val(`${history1.innerHTML}`);
    getandDisplayWeather();

});

$("#history2").on("click", function(event) {
  
    event.preventDefault();
    $("#city-input").val(`${history2.innerHTML}`);
    getandDisplayWeather();
    var x = history2.innerHTML;
    history2.innerHTML = history1.innerHTML;
    history1.innerHTML = x;
    localStorage.setItem("search1", history1.innerHTML);
    localStorage.setItem("search2", history2.innerHTML);
});

$("#history3").on("click", function(event) {
  
    event.preventDefault();
    $("#city-input").val(`${history3.innerHTML}`);
    getandDisplayWeather();
    var x = history3.innerHTML;
    history3.innerHTML = history2.innerHTML;
    history2.innerHTML = history1.innerHTML;
    history1.innerHTML = x;
    localStorage.setItem("search1", history1.innerHTML);
    localStorage.setItem("search2", history2.innerHTML);
    localStorage.setItem("search3", history3.innerHTML);

});

$("#history4").on("click", function(event) {
  
    event.preventDefault();
    $("#city-input").val(`${history4.innerHTML}`);
    getandDisplayWeather();
    var x = history4.innerHTML;
    history4.innerHTML = history3.innerHTML;
    history3.innerHTML = history2.innerHTML;
    history2.innerHTML = history1.innerHTML;
    history1.innerHTML = x;
    localStorage.setItem("search1", history1.innerHTML);
    localStorage.setItem("search2", history2.innerHTML);
    localStorage.setItem("search3", history3.innerHTML);
    localStorage.setItem("search4", history4.innerHTML);
});

$("#history5").on("click", function(event) {
  
    event.preventDefault();
    $("#city-input").val(`${history5.innerHTML}`);
    getandDisplayWeather();
    var x = history5.innerHTML;
    history5.innerHTML = history4.innerHTML;
    history4.innerHTML = history3.innerHTML;
    history3.innerHTML = history2.innerHTML;
    history2.innerHTML = history1.innerHTML;
    history1.innerHTML = x;
    localStorage.setItem("search1", history1.innerHTML);
    localStorage.setItem("search2", history2.innerHTML);
    localStorage.setItem("search3", history3.innerHTML);
    localStorage.setItem("search4", history4.innerHTML);
    localStorage.setItem("search5", history5.innerHTML);
});

function getandDisplayWeather(){

    // Here we grab the text from the input box
var city = escape($("#city-input").val().trim());

// Here we construct our URL

var queryURL1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=d8d5661f194ef7faedaec89933e8da4d`;
var queryURL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=d8d5661f194ef7faedaec89933e8da4d`;
console.log(queryURL1);
console.log(queryURL2);



$.ajax({
  url: queryURL1,
  method: "GET",
  //dataType: "xml",
}).then(showWeather)

$.ajax({
  url: queryURL2,
  method: "GET",
  //dataType: "xml",
}).then(showFive);



};

function showWeather(response){

console.log(response);
console.log(response.name);
console.log(response.main.temp);
console.log(response.main.humidity);
console.log(response.wind.speed);

$("#Results11").empty();
$("#Results11").append(response.name + " ");
var inc = moment().format('MMM Do YY');
$("#Results11").append(inc);

$("#Results12").empty();
$("#Results12").append("Temperature: " + response.main.temp +"°C");
$("#Results13").empty();
$("#Results13").append("Humidity: " + response.main.humidity + "%");
$("#Results14").empty();
$("#Results14").append("Wind Speed: " + response.wind.speed + "MPH");
 

}

function showFive(response2){
    

console.log(response2);
console.log(response2.list[0].date_txt);
console.log(response2.list[0].main.temp);
console.log(response2.list[0].main.humidity);



var inc = moment().add(1, 'days').format('MMM DD');
$("#Results21").empty();
$("#Results21").append(inc);
$("#Results22").empty();
$("#Results22").append("Temperature: " + response2.list[8].main.temp+"°C");
$("#Results23").empty();
$("#Results23").append("Humidity: " + response2.list[8].main.humidity+ "%");

var inc = moment().add(2, 'days').format('MMM DD');
$("#Results24").empty();
$("#Results24").append(inc);
$("#Results25").empty();
$("#Results25").append("Temperature: " + response2.list[16].main.temp+"°C");
$("#Results26").empty();
$("#Results26").append("Humidity: " + response2.list[16].main.humidity+ "%");

var inc = moment().add(3, 'days').format('MMM DD');
$("#Results27").empty();
$("#Results27").append(inc);
$("#Results28").empty();
$("#Results28").append("Temperature: " + response2.list[24].main.temp +"°C");
$("#Results29").empty();
$("#Results29").append("Humidity: " + response2.list[24].main.humidity+ "%");

var inc = moment().add(4, 'days').format('MMM DD');
$("#Results30").empty();
$("#Results30").append(inc);
$("#Results31").empty();
$("#Results31").append("Temperature: " + response2.list[32].main.temp+"°C");
$("#Results32").empty();
$("#Results32").append("Humidity: " + response2.list[32].main.humidity+ "%");

var inc = moment().add(5, 'days').format('MMM DD');
$("#Results33").empty();
$("#Results33").append(inc);
$("#Results34").empty();
$("#Results34").append("Temperature: " + response2.list[39].main.temp+"°C");
$("#Results35").empty();
$("#Results35").append("Humidity: " + response2.list[39].main.humidity+ "%");

}


function searchHistory(city) {
    
    var citysearch = $("#city-input").val().trim();
    if(history1.innerHTML == ""){
        $('#history1').html(`${citysearch}`);
    }
    else if (history2.innerHTML == "" && history1.innerHTML != ""){
        
        history2.innerHTML = history1.innerHTML;
        $('#history1').html(`${citysearch}`);
    }
    else if (history3.innerHTML == "" && history2.innerHTML != "" && history1.innerHTML != ""){
        history3.innerHTML = history2.innerHTML;
        history2.innerHTML = history1.innerHTML;
        $('#history1').html(`${citysearch}`);
    }
    else if (history4.innerHTML == "" && history3.innerHTML != "" && history2.innerHTML != "" && history1.innerHTML != ""){
        
        
        history4.innerHTML = history3.innerHTML;
        history3.innerHTML = history2.innerHTML;
        history2.innerHTML = history1.innerHTML;
        $('#history1').html(`${citysearch}`);
        
    }
    else{
        history5.innerHTML = history4.innerHTML;
        history4.innerHTML = history3.innerHTML;
        history3.innerHTML = history2.innerHTML;
        history2.innerHTML = history1.innerHTML;
        $('#history1').html(`${citysearch}`);
    }

    localStorage.setItem("search1", history1.innerHTML);
    localStorage.setItem("search2", history2.innerHTML);
    localStorage.setItem("search3", history3.innerHTML);
    localStorage.setItem("search4", history4.innerHTML);
    localStorage.setItem("search5", history5.innerHTML);
    
  
};

function clearHistory() {

    localStorage.clear();
    history5.innerHTML = "";
    history4.innerHTML = "";
    history3.innerHTML = "";
    history2.innerHTML = "";
    history1.innerHTML = "";
}



    history1.innerHTML = localStorage.getItem("search1");
    history2.innerHTML = localStorage.getItem("search2");
    history3.innerHTML = localStorage.getItem("search3");
    history4.innerHTML = localStorage.getItem("search4");
    history5.innerHTML = localStorage.getItem("search5");

    if(history1.innerHTML != ""){
        $("#city-input").val(`${history1.innerHTML}`);
        getandDisplayWeather();
    }
    