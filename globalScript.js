// change image function start

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

// change image function end



// add to list function start
const addToListButton = document.getElementById("addToListButton");
const listInput = document.getElementById("listInput");
const ulList = document.getElementById("ulList");
addToListButton.addEventListener("click", function () {
  const listInputValue = listInput.value;
  if (!listInputValue) {
    return alert("please write something");
  }
  const createListItem = document.createElement("li");
  createListItem.style.listStyleType = "decimal";
  createListItem.style.fontWeight = "bold";
  createListItem.innerHTML = listInputValue;
  ulList.appendChild(createListItem);
  listInput.value = "";
});
// add to list function end
