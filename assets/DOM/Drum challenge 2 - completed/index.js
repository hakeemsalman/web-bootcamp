
document.querySelector("button").addEventListener("click",function(){
    handleClick();
});

function handleClick(){
    alert('I got clicked');
}

// var buttonList = document.querySelectorAll("button");
// for(var i = 0;i<buttonList.length;i++){
//     buttonList[i].addEventListener("click",function(){
//         var buttonHtml = this.innerHTML;
//         makeSound(buttonHtml);
//     });
// }

// document.addEventListener("keypress",function(event){
//     makeSound(event.key);
// })

// function makeSound(keyPress){
//         switch (keyPress) {
//             case "w":
//                 var tom1 = new Audio('./sounds/tom-1.mp3');
//                 tom1.play();
//                 break;
//             case "a":
//                 var tom2 = new Audio('./sounds/tom-2.mp3');
//                 tom2.play();
//                 break;
//             case "s":
//                 var tom3 = new Audio('./sounds/tom-3.mp3');
//                 tom3.play();
//                 break;
//             case "d":
//                 var tom4 = new Audio('./sounds/tom-4.mp3');
//                 tom4.play();
//                 break;

//             case "j":
//                 var snare = new Audio('./sounds/snare.mp3');
//                 snare.play();
//                 break;
//             case "k":
//                 var kick = new Audio('./sounds/kick-bass.mp3');
//                 kick.play();
//                 break;
//             case "l":
//                 var crash = new Audio('./sounds/crash.mp3');
//                 crash.play();
//                 break;
//             default:
//                 break;
//         }
// }





