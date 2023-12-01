//Arrow Buttons
const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false;
let prevPageX, prevScrollLeft;
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


//MUSIC JS
var songs = {
    "HWM": document.getElementById("song1"),
    "SW": document.getElementById("song2"),
    "RH": document.getElementById("song3"),
    "PV": document.getElementById("song4"),
    "PE": document.getElementById("song5"),
    "Worthless": document.getElementById("song6"),
    };

    var image = document.querySelectorAll(".carousel img");
    
    image.forEach(function (image) {
        image.addEventListener("click", function(){
            var songId = this.id;
            var song = songs[songId];

            Object.values(songs).forEach(function (s){
                s.pause();
            });
            song.play();
        })
    })


