var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-content");
var captionText = document.getElementById("modal-caption");
var span = document.getElementById("modal-close");

var container = userList.querySelector("#main-content");
var images = container.querySelectorAll("img");

images.forEach((img) => {
    console.log(img);
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

span.addEventListener('click', () => {
  modal.style.display = "none";
});

