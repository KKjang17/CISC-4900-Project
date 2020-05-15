
$(document).ready(function(){

    let images = ["/images/city1.jpg", "/images/city2.jpg", "/images/city3.jpg", "/images/city4.jpg", 
                "/images/city5.jpg", "/images/city6.jpg", "/images/city7.jpg", "/images/city8.jpg", 
                "/images/city9.jpg", "/images/city10.jpg", "/images/city11.jpg", "/images/city12.jpg"];

    for (let i = 0; i < images.length; i++) {
         let currentImage = $(`<img src="${images[i]}" class="image">`);
        $("#mainContent").append(currentImage);
    }
    
});

$(document).ready(function(){
    
    $("body").mousemove(function(e) {
        xPos = e.pageX;
        yPos = e.pageY;        
    })
    
    $(".image").mouseenter(function() {

        $(this).toggleClass("gray");

        let preview = $("<div id='preview'></div>");
        $("body").append(preview);

        let previewImage = $(this).attr("src");
        $("#preview").append(`<img src="${previewImage}" id="previewImage">`);

        $("#preview").css({"width" : "50%", "height" : "50%", "background-color" : "black", 
        "padding" : "10px 10px 60px 10px", "position" : "absolute", "left" : `${xPos}px`, 
        "top" : `${yPos}px`});

        $("#previewImage").css({"width" : "100%", "height" : "100%"});
    })

    $(".image").mouseleave(function() {

        $(this).toggleClass("gray");

        $("#preview").remove();
    })

    let xPos;
    let yPos;
});