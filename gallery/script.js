let photos = document.querySelectorAll(".photo");
let closePopup = document.querySelector(".closePopup");

for (let i = 0; i < photos.length; i++) {
    photos[i].onclick = function() {
        document.querySelector(".popup").style.display="block";
        document.querySelector(".popup img").src = photos[i].getAttribute('src');
    }
}


closePopup.onclick = function () {
    document.querySelector(".popup").style.display = "none";
}