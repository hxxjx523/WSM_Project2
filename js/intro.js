$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#story1-1").show();
    $("#story1-2").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#story1-1").click(function(){
        $("#story1-1").hide();
        $("#story1-2").show();
    });

    // /*img2를 클릭했을 때 img1을 보여줌*/
    // $("#img2").click(function(){
    //     $("#img1").show();
    //     $("#img2").hide();
    // });
});