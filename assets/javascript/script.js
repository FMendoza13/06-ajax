"Let's all go to the movies!";

$(document).ready(function(){
// I hope to create arrays and variable

    var i, l, button = "", toDoCount=0;
    var pics = ["Die Hard", "Star Wars", "Casablanca", "The Third Man", "Moonlight", "Unforgiven", "Mad Max Fury Road", "The Revenant", "Goodfellas", "IT"];
    var loopCounter = sessionStorage.getItem("count");
    console.log(loopCounter)
// created get session storage in order to loop through movies
    for(l=0;l <= loopCounter;l++) {

        if(loopCounter!=null){
            pics.push(sessionStorage.getItem("Movie-" +1));
            console.log(pics);
        }
    }
})

// getButtons();

    // create function that creates buttons using elements with the array
function getButtons(){

    $("#movieButton").empty();
    $("#movie-input").val("");

    for(i in pics){
        button = '<button type="button" class="movieButtons col-md-1 col-sm-2 col-xs-3 btn btn-primary" value= "${pics[i]}" >${pics[i]}</button>';
        $("#movieButtons").append(button);
    }
    // append.(button)
}

// add click event for submit button

    $("#addMovie").on("click", function(event) {
        
        event.preventDefault();
        var pics = $("#movie-input").val().trim();
    // setting up storage session for each movie

    if(movie!==""){

    // remember: sessionStorage.setItem("", );

    sessionStorage.setItem("movies-" + toDoCount, pics)
        // tracker
    sessionStorage.setItem("count", toDoCount)
    toDoCount++;
        // console.log(pics)
    pics.push(movie);
    getButtons();
    }
    });

    // incorporate click event listener on images to connect ajax from  API
$(document).on("click", ".movieButtons", function(){
    $("#movies").empty();
    var movieName = $(this).val();
    console.log(movieName);

    // API Key: 8jqdegEgawd9ffkxQR0EMoptgFWakpPO

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movieName + "&api_key=8jqdegEgawd9ffkxQR0EMoptgFWakpPO"
    var f, images=""
    var m = "480w_still";
    $.ajax({
        url:queryURL,

        method: "GET"
    }).then(function(response){

        for (f in response.data){
            console.log(response.data[f].images[m].url);
        }
    }




// add class to make image into gif when it's clicked upon