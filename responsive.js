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

//Background Music
const videoIDs = {
    HW : "https://youtu.be/B7Y4LHbpXv0?si=_pbjpSexTeg28QUl",
    SW : "ID2",
    RH : "ID3",
    PV : "ID4",
    PE : "ID5",
    Worthless : "ID6"
}

function playVideo(videoID){
    const player = new YT.Player("Player",  {
        height: "360",
        width: "640",
        videoID: videoID,
        events: {
            "OnReady" : function(event){
                event.target.playVideo();
            }
        }
    })
}

document.getElementById('HW').addEventListener("click", function(){
    playVideo(videoIDs["HW"])
});

document.getElementById('SW').addEventListener("click", function(){
    playVideo(videoIDs["SW"])
});
