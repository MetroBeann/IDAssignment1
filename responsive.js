const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon=> {
    icon.addEventListener("click", () =>{
        if(icon.id == "left"){
            carousel.scrollLeft -= firstImgWidth;
        }
        else {
            carousel.scrollLeft += firstImgWidth;
        }
    } );
});





