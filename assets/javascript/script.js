"Let's all go to the movies!";

$(document).ready(function(){
// I hope to create arrays and variable

    var i, l, button = "", toDoCount=0;
    var pics=["Die Hard", "Star Wars", "Casablanca", "The Third Man", "Moonlight", "Unforgiven", "Mad Max Fury Road", "The Revenant", "Goodfellas", "IT"];
    var loopCounter = sessionStorage.getItem("count");
    console.log(loopCounter)
// created get session storage in order to loop through movies
    for(l=0; l <= loopCounter; l++) {

        if(loopCounter!=null){
            pics.push(sessionStorage.getItem("Movie-" +1));
            console.log(pics);
        }
    }
})
getButtons();

    // create function that creates buttons using elements with the array
function getButtons(){

    $("#movieButton").empty();
    $("#movie-input").val("");

    for (i in pics){
        button = '<button type="button" class="movieButtons col-md-1 col-sm-2 col-xs-3 btn btn-primary" value= "${pics[i]}" >${pics[i]}</button>';
        $("#movieButtons").append(button);
    }
    // append.(button)
}

// add click event for submit button

// setting up storage session for each movie

// incorporate click event listener on images to connect ajax from  API

// add class to make image into gif when it's clicked upon