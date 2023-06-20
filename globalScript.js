// problem 3 check integer or not start
function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(17));
console.log(isPrimeNumber(10));

// problem 3 check integer or not end

// problem 4 openwindow start
const openNewTabButton = document.getElementById("openNewTabButton");
openNewTabButton.addEventListener("click", function () {
  window.open(
    "https://www.example.com",
    "_blank",
    "width=" + 800 + ", height=" + 600
  );
});

// problem 4 openwindow end

// problem 5 browser info start
function getBrowserInfo() {
  const browserNameElem = document.getElementById("browserName");
  const browserVersionElem = document.getElementById("browserVersion");
  const browserName = navigator.userAgent;
  const browserVersion = navigator.appVersion;

  browserNameElem.innerHTML = `Browser Name : ${browserName}`;
  browserVersionElem.innerHTML = `Browser Version : ${browserVersion}`;
}

getBrowserInfo();

// problem 5 browser info end

// problem 6 Geolocation start
function getUserLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  const latitudeElem = document.getElementById("latitude");
  const longitudeElem = document.getElementById("longitude");

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  latitudeElem.textContent = `Latitude : ${latitude}`;
  longitudeElem.textContent = `Longitude : ${longitude}`;
}

getUserLocation();

// problem 6 Geolocation end

// problem 7 solution start
// a. Alert with coordinates (x, y) on click
document.addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;
  alert("Clicked at coordinates (x, y): " + x + ", " + y);
});

// b. Alert with key code on key press
document.addEventListener("keydown", function (e) {
  const keyCode = e.keyCode || e.which;
  alert("Key pressed. Key code: " + keyCode);
});

// c. Change image source on mouseover
const changeImageProblemSeven = document.getElementById(
  "changeImageProblemSeven"
);
changeImageProblemSeven.addEventListener("mouseover", function () {
  changeImageProblemSeven.src = "/images/coderImage2.jpg";
});

// problem 7 soludtion end

// change text by click on the button problem 8, start
const changeTextButton = document.getElementById("changeTextButton");
const changeTextElement = document.getElementById("changeTextElement");

changeTextButton.addEventListener("click", function () {
  changeTextElement.textContent = "Button Clicked!";
});
// change text by click on the button problem 8, end

// form submiting problem solving start, problem 9
const submitFormButton = document.getElementById("submitFormButton");

function submitFormHandler(e) {
  e.preventDefault();
  const mainForm = document.getElementById("form");
  const form = mainForm;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (!name || !email || !password || !confirmPassword) {
    return alert("fill in the all inputs");
  }

  const checkEmailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!checkEmailValidate.test(email)) {
    return alert("enter a valid email address");
  }

  const checkPasswordValidate =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!checkPasswordValidate.test(password)) {
    return alert(
      "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit."
    );
  }

  if (password !== confirmPassword) {
    return alert("Passwords do not match");
  }

  alert("Form is submitted successfully");
  console.log(name, email, password, confirmPassword);
  form.reset();
}

submitFormButton.addEventListener("click", submitFormHandler);
// form submiting problem solving end, problem 9

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
