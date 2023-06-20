// change image function start

const changeImageButton = document.getElementById("changeImgButton");
let currentImage = 1;
changeImageButton.addEventListener("click", function () {
  const willChangeImage = document.getElementById("willChangeImage");
  willChangeImage.src = "/images/coderImage2.jpg";

  if (currentImage === 0) {
    willChangeImage.src = "/images/coderImage1.jpg";
    currentImage = 1;
  } else {
    willChangeImage.src = "/images/coderImage2.jpg";
    currentImage = 0;
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

// change p element background by click start : que no 10;

const changeBgTextButton = document.getElementById("changeBgTextButton");
const changeBgYellow = document.getElementById("changeBgYellow");
changeBgTextButton.addEventListener("click", function () {
  changeBgYellow.classList.add("highlight");
});
// change p element background by click, end  : qus no 10;
