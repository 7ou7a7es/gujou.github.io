var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-content");
var captionText = document.getElementById("modal-caption");
var span = document.getElementById("modal-close");

var images = document.querySelectorAll(".img-content");

images.forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

span.addEventListener('click', () => {
  modal.style.display = "none";
});

