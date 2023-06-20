const changeImageButton = document.getElementById("changeImgButton");
let currentImage = 1;
changeImageButton.addEventListener("click", function () {
  const willChangeImage = document.getElementById("willChangeImage");
  willChangeImage.src = "/images/coderImage2.jpg";

  if (currentImage === 1) {
    willChangeImage.src = "/images/coderImage1.jpg";
    currentImage = 2;
  } else {
    willChangeImage.src = "/images/coderImage2.jpg";
    currentImage = 1;
  }
});
