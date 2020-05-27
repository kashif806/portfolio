
let nameBlock = document.getElementById("nameBlock");
let overlay = document.getElementsByClassName("overlay")[0];
let name = document.querySelector("#nameDiv h1");
let infoModalClose = document.getElementById("infoModalClose");
let infoModal = document.getElementById("infoModal");
const colors = ["red","yellow","green","orange","purple","blue"]

let randomColour = () => {
    let rand = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    let borderColor = colors[rand];
    return borderColor;
}

for (let index = 0; index < 15; index++) {
    console.log(randomColour());
    
}
console.log (randomColour());

AOS.init ();

// function mouseOver(){
//     overlay.style.background = "rgba(0,0,0,0.7)";
   
// }

// function mouseOut(){
//     overlay.style.background = "rgba(0,0,0,.5)";

// }





// function whichTransitionEvent(){
//     var t,
//         el = document.createElement("fakeelement");
  
//     var transitions = {
//       "transition"      : "transitionend",
//       "OTransition"     : "oTransitionEnd",
//       "MozTransition"   : "transitionend",
//       "WebkitTransition": "webkitTransitionEnd"
//     }
  
//     for (t in transitions){
//       if (el.style[t] !== undefined){
//         return transitions[t];
//       }
//     }
//   }
  
//   var transitionEvent = whichTransitionEvent();
  
//   $("#infoBtn").hover(function(){
    
//     $(this).one(transitionEvent,
//                 function(event) {
//                     console.log(event)
//       // Do something when the transition ends
//       $("#infoBtn").text("Scroll Down");
//     });
//   });





// function closeModal (){
//     infoModal.hide;
// }

// nameBlock.addEventListener("mouseover", mouseOver);
// nameBlock.addEventListener("mouseout", mouseOut);
// // infoModalClose.addEventListener("click",closeModal);


// Some Jquery
$(document).ready(function(){
    $( "#infoBtn" ).hover(
        function(e) {
          
            $("#arrow").show();

        }, function(e) {

            $("#arrow").hide();
        }
    );
});
