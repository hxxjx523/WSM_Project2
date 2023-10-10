$(window).load(function(){
    $(".loading").fadeOut();
});

const start = document.getElementsByClassName(".start");
start.addEventListener("click", clickHandler);

function clickHandler(){
    window.location.href = "start.html";
}


