

window.addEventListener("load", function() {
    let cssSelector = "input[type=text], select" ;
    let fields = document.querySelectorAll(cssSelector);
    for (i=0; i<fields.length; i++) {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});

window.addEventListener("load", function() {
    let pictureString = ".pic";
    let pictures = document.querySelectorAll(pictureString);
    
    for (i=0; i<pictures.length; i++) {
        pictures[i].addEventListener("click", function(e) {
            document.querySelector("#bigPic").src = e.target.src;
        })
    }
});
