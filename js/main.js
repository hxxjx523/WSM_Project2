$(window).load(function(){
    $(".loading").fadeOut();
});

const start = document.getElementsByClassName(".start");
start.addEventListener("click", clickHandler);

function clickHandler(){
    window.location.href = "start.html";
}

const screenWidth = window.innerWidth;
const imageSize = 872;
const remainingWidth = screenWidth - imageSize;
const container = getElementsByClassName("container");
container.style.width = remainingWidth + "px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vw";



