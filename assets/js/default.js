var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-content");
var captionText = document.getElementById("modal-caption");
var span = document.getElementById("modal-close");

var container = document.querySelector("#main-content");
var images = container.querySelectorAll("img");

console.log("container : "+container);

images.forEach((img) => {
    console.log("img : "+img);
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

span.addEventListener('click', () => {
  modal.style.display = "none";
});

