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
