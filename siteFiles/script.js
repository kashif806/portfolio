let nameBlock = document.getElementById("nameBlock");
let overlay = document.getElementsByClassName("overlay")[0];
let name = document.querySelector("#nameDiv h1");
let infoModalClose = document.getElementById("infoModalClose");
let infoModal = document.getElementById("infoModal");

AOS.init ();


let mq= window.matchMedia("(max-width: 900px)");

mediaChange = (mq) => {
    var elements =  document.querySelectorAll(".addAOS");
    if(mq.matches) {
        elements.forEach(element => {
            element.removeAttribute("data-aos", "data-aos-anchor-placement", "data-aos-duration" )
            console.log("AOS removed");
        });
        
    }
}   

mq.addListener(mediaChange);
mediaChange(mq);


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
        $("#linkedin").css('transform','translateX(-90px)');
        $("#email").css('transform','translateX(-200px)');
        $("#call").css('transform','translateX(-160px)');

    });

    $("#infoBtn").hover((e)=>{
        $(".navIcons").css('transform','translateX(3px)');
    },(e)=>{
        $("#skillsIcon").css('transform','translateX(80px)');
        $("#projectsIcon").css('transform','translateX(100px)');
        $("#contactFormIcon").css('transform','translateX(180px)');

    });

    $( "#infoBtn" ).click((e)=> {
        $('html,body').animate({scrollTop: window.innerHeight}, 2000);
    });

    $("#contactBtn").click((e)=>{
        console.log($('#contactFormSection').offset().top);
        $('html,body').animate({scrollTop: ($('#contactFormSection').offset().top)}, 2000);
    })

    $(".menuItem").click((e)=>{
        $("#menuOverlayInput").prop('checked', false);
    });

    $(window).scroll((e)=>{
        if (($(window).scrollTop()) !== 0 ) {
            $("nav").css('visibility','visible');
        }
        else {
            $("nav").css('visibility','hidden');
        }
        
    });
    

    

    // $("#menuButton").click((e) => {
    //     $("#mobileMenu").toggle();

    // });

});
