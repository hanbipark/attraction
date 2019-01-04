$(function(){
    var w=100;
    var id=setInterval(leftMoving, 5000);

    $("#left").click(function(){
        leftMoving();
    });
    $("#right").click(function(){
        rightMoving();
    });

    function leftMoving(){
        $(".photo").animate({left:"-="+w+"px"},400, function(){
            $(".photo li").first().appendTo(".photo");
            $(".photo").css({left:"+="+w+"px"});
        });
    }

    function rightMoving(){
        $(".photo").animate({left:"+="+w+"px"},400, function(){
            $(".photo li").last().prependTo(".photo");
            $(".photo").css({left:"-="+w+"px"});
        });
    }
});
