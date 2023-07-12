
  var firstDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  var secondDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);

  document.querySelector(".img1").setAttribute("src","./images/dice"+firstDice+".png");
  document.querySelector(".img2").setAttribute("src","./images/dice"+secondDice+".png");

  if(firstDice > secondDice){
    document.querySelector("h1").innerHTML = "Player one Wins";
  } else if(secondDice > firstDice){
    document.querySelector("h1").innerHTML = "Player Two wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }


