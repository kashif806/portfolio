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



$(document).ready(function(){
    $( "#infoBtn" ).hover(
        function(e) {
          
            $("#arrow").show();

        }, function(e) {

            $("#arrow").hide();
        }
    );
    
    $("#tagLine").hover((e)=>{
        $("#tagLine").text("A Web Developer ... Front-End, Back-End, UX/UI")
    },(e)=>{
        $("#tagLine").text("A Web Developer ....");
    });

    $("#contactBtn").hover((e)=>{
        $(".socialIcons").css('transform','translateX(-3px)');
    },(e)=>{
        console.log("going back")
        $("#linkedin").css('transform','translateX(-90px)');
        $("#email").css('transform','translateX(-200px)');
        $("#call").css('transform','translateX(-160px)');

    });

});
