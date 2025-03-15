// document.getElementById("achv1-d").style.display = "none";

window.onload = function(){
    window.displayImgCount = 0;
    function cycleImage(){
        if (displayImgCount !== 0) {
            document.getElementById("achv" + displayImgCount + "-d").style.display = "none";
        }
        displayImgCount = displayImgCount === 2 ? 1 : displayImgCount + 1;
        document.getElementById("achv" + displayImgCount + "-d").style.display = "block";
        setTimeout(cycleImage, 2000);
    }
    cycleImage();
}