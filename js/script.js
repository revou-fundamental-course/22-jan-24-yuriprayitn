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

setInterval(() => {
    plusSlides(1)
}, 3000)

function validateForm() {
    const nama = document.forms['myForm']['fname'].value
    let email = document.forms['myForm']['email'].value
    let interest = document.forms['myForm']['interest'].value

    if (nama == '') {
        document.getElementById('error-fname').innerHTML = "Nama tidak boleh kosong!"

        return false
    }

    document.getElementById('error-fname').innerHTML = ''

    if (email == '') {
        document.getElementById('error-email').innerHTML = "Email tidak boleh kosong!"

        return false
    }

    document.getElementById('error-email').innerHTML = ""

    if (interest == 'kosong') {
        document.getElementById('error-interest').innerHTML = "Pilih salah satu!"

        return false
    }

    document.getElementById('error-interest').innerHTML = ""

    console.log(nama, email, interest)
}