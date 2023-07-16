var buttonColors = ["red", "blue", "green", "yellow"];
var firstTime = 0;
var level = 0;
var gamePattern = [];
var userClickedPattern = [];
 
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    $(this).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    level++;
}

$("body").keydown(function(){
    if(firstTime == 0){
        firstTime++;
        $("h1").text("level "+level);
        nextSequence();
    }
});

$(".btn").on("click",function(event){
    var useChosenColor = event.target.id;
    userClickedPattern.push(useChosenColor);

    $(this).fadeOut(100).fadeIn(100);

    playSound(useChosenColor);
    animatePress(useChosenColor);
});

// sound playing function
function playSound(name){
    var audioLocation = "./sounds/";
    var audio = new Audio(audioLocation + name +".mp3");
    audio.play();
}

// animate press
function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    },100);
}