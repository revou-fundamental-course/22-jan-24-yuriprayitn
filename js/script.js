var slideIndex = 1;
// var slideBanner = document.getElementsByClassName('mySlides')
slideShow(slideIndex)

function plusSlides(n) {
    slideShow( slideIndex += n);
}

function slideShow(n) {
    var i;
    var imgList = document.getElementsByClassName("mySlides");

    if(n < 1) slideIndex = imgList.length;
    if(n > imgList.length) slideIndex = 1;

    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = 'none'
    }

    imgList[slideIndex - 1].style.display = 'block'
}