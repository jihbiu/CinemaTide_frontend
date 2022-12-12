function updateSlide(updateValue){
    var currSlideClass = $(".slide.active").attr("class");
    var numSlides = $(".slide").length;

    var slideCurrOld = parseInt(currSlideClass.charAt(12) + currSlideClass.charAt(13));
    var slideBeforeOld;
    var slideAfterOld;

    var slideBeforeNew;
    var slideAfterNew;
    var slideCurrNew;

    if(updateValue == -1 && slideCurrOld + updateValue > 0){

        slideCurrNew = slideCurrOld + updateValue;
        slideAfterNew = slideCurrOld;
        slideAfterOld = slideAfterNew + 1;

        if(slideCurrNew + updateValue == 0){
            slideBeforeNew = numSlides;
            slideBeforeOld = 1;
        }
        else{
            slideBeforeNew = slideCurrNew + updateValue;
            slideBeforeOld = slideCurrNew;
        }

        //$(".slide-" + slideCurrOld).removeClass("active");
        //$(".slide-" + slideBeforeOld).removeClass("before");
        //$(".slide-" + slideAfterOld).removeClass("after");

        $(".slide-" + slideCurrNew).addClass("active");
        $(".slide-" + slideBeforeNew).addClass("before");
        $(".slide-" + slideAfterNew).addClass("after");
    }
    else if(updateValue == 1 && slideCurrOld + updateValue <= numSlides){

        slideCurrNew = slideCurrOld + updateValue;
        slideBeforeNew = slideCurrOld;
        slideBeforeOld = slideCurrOld - 1;

        if(slideCurrNew + updateValue > numSlides){
            slideAfterNew = 1;
            slideAfterOld = numSlides;
        }
        else{
            slideAfterNew = slideCurrNew + 1;
            slideAfterOld = slideCurrNew;
        }          
        
        //$(".slide-" + slideCurrOld).removeClass("active");
        //$(".slide-" + slideBeforeOld).removeClass("before");
        //$(".slide-" + slideAfterOld).removeClass("after");

        $(".slide-" + slideCurrNew).addClass("active");
        $(".slide-" + slideBeforeNew).addClass("before");
        $(".slide-" + slideAfterNew).addClass("after");
    }

    for(var i = 0; i <= numSlides; i++){
        if(i != slideAfterNew){
            if($(".slide-" + i).hasClass("after")){
                $(".slide-" + i).removeClass("after");
            }
        }
        if(i != slideBeforeNew){
            if($(".slide-" + i).hasClass("before")){
                $(".slide-" + i).removeClass("before");
            }
        }
        
        if(i != slideCurrNew){
            if($(".slide-" + i).hasClass("active")){
                $(".slide-" + i).removeClass("active");
            }
        }
        
    }

    if(slideCurrNew == numSlides){
        $(".next-slide").css("display", "none")
    }
    else{
        $(".next-slide").css("display", "block")
    }
    

    if(slideCurrNew == 1){
        $(".prev-slide").css("display", "none")
    }
    else{
        $(".prev-slide").css("display", "block")
    }
}