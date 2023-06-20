function changeTextToRed() {
  var paragraphsClasses = document.getElementsByClassName("paragraphClass1");
  var paragraphsIds = document.getElementById("paragraphID1");
  for (var i = 0; i < paragraphsClasses.length; i++) {
    paragraphsClasses[i].style.color = "red";
  }

  paragraphsIds.style.color = "red";
}

changeTextToRed();
