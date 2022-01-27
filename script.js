const link = document.querySelectorAll("a");

function showHide() {
  let answer = this.childNodes[3]; //answer
  let question_container = this.childNodes[1];
  let question = question_container.childNodes[1];
  let image_container = question_container.childNodes[3];
  let arrow = image_container.childNodes[1];

  if (answer.style.display == "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }

  if (arrow.style.transform == "rotate(0deg)") {
    arrow.style.transform = "rotate(180deg)";
  } else {
    arrow.style.transform = "rotate(0deg)";
  }

  if (question.style.fontSize == "12px") {
    question.style.fontSize = "14px";
    question.style.fontColor = "hsl(238, 29%, 16%)";
    question.style.fontWeight = "400";
  } else {
    question.style.fontSize = "12px";
    question.style.fontColor = "hsl(237, 12%, 33%)";
    question.style.fontWeight = "400";
  }
}
function myToggle(value) {
  value.addEventListener("click", showHide);
}
link.forEach(myToggle);

// color: $dark_saturated_blue;
// font-weight: 700;
// font-size: 16px;
