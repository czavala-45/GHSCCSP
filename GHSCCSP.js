function GHSCCSP(){
    var image = document.getElementById('greenCheck');
    if (image.src.match("greenCheck")) {
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/768px-Red_X.svg.png";
    }
    else {
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Checkmark_green.svg/1200px-Checkmark_green.svg.png";
    }
}