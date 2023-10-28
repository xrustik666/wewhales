/* --------1. Button which returns to the begining-------- */
let scrollToBegin = document.querySelector(".scrollToBegin");

window.addEventListener("scroll", function() {
  if (document.documentElement.scrollTop > 500) {
    scrollToBegin.style.display = "block";
  } else {
    scrollToBegin.style.display = "none";
  }
});

scrollToBegin.addEventListener("click", function() {
  document.documentElement.scrollTop = 0;
});

/* --------2. Photo gallery-------- */
// This variable contains access to each photo
let photos = document.querySelectorAll(".photo");
// This variable contains "cross" (close button)
let closePopup = document.querySelector(".closePopup");

// Using array, we iterate through each photo
for (let i = 0; i < photos.length; i++) {
  photos[i].onclick = function () {
    // if you click on a photo, display property of "pop-up" class becomes rewritten from "none" to "block"
    document.querySelector(".pop-up").style.display = "block";
    // pop-up image takes address of the clicked image
    document.querySelector(".pop-up img").src = photos[i].getAttribute('src');
  }
}

// clicking the "cross", display property of "pop-up" class becomes "none" again
closePopup.onclick = function () {
  document.querySelector(".pop-up").style.display = "none";
}