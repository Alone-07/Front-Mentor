// const body = document.body;
// body.append("hi ");
// body.append("hello ", "world!!");
// let div = document.createElement("div");
// div.innerText = "Hello World 2";
// body.append(div);
let card = document.querySelector(".card");

let myColor = () => {
  card.style.background = "cyan";
};
let myRemove = () => {
  card.style.background = "none";
};
// myRemove().card.style.border = "none";

card.addEventListener("mouseover", myColor);
card.addEventListener("mouseout", myRemove);

function bordederRemover() {
  this.style.border = "none";
}
let borderCreater = (value) => {
  value.style.border = "3px solid red";
};
function borderIncrease() {
  this.style.border = "5px solid purple";
}
card.addEventListener("click", bordederRemover);
// card.addEventListener("mouseout", borderCreater);
card.addEventListener("mouseover", borderIncrease);

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  detailsArrow() {
    setTimeout(() => {
      console.log(`hi, i'm ${this.name} and i'm ${this.age}`);
    }, 100);
  }
  //   detailsArrow() {
  //     setTimeout(console.log(`hi, i'm ${this.name} and i'm ${this.age}`), 100);
  //   }
  detailsfunction() {
    setTimeout(function () {
      console.log(`hi, i'm ${this.name} and i'm ${this.age}`);
    }, 100);
  }
  //   detailsfunction() {
  //     setTimeout(console.log(`hi, i'm ${this.name} and i'm ${this.age}`), 100);
  //   }
}

console.log(this.name + this.age);
let person1 = new Person("krish", 19);
console.log(person1.age);
person1.detailsArrow();
person1.detailsfunction();

function hi() {
  console.log(` ${this}`);
}
hi();
console.log(" 🐘");

let button = Array.from(document.getElementsByTagName("button"));
let buttonQuery = document.querySelectorAll("button");
function Changer() {
  this.style.background = "green";
  this.style.padding = ".5rem 1rem";
  this.style.borderRadius = "5px";
}
function Remover() {
  this.style.background = "none";
  this.style.padding = "none";
  this.style.borderRadius = "none";
  this.style.fontSize = "18px";
  this.style.fontWeight = "bold";
}
buttonQuery.forEach(brRemover);
function brRemover(value) {
  value.addEventListener("click", bordederRemover);
  value.addEventListener("click", Changer);
  value.addEventListener("mouseout", Remover);
}

let links = document.querySelectorAll("a");

let myLink = (element) => {
  element.style.color = "blue";
};
links.forEach(myLink);

const button_container = document.querySelector(".button_container");

let color = "orange";
let bgColor = "red";
function bgChanger() {
  this.style.background = bgColor;
}
function colorChanger() {
  this.style.color = color;
}
let para1 = button_container.childNodes[1];
// para1.addEventListener("click", bgChanger); // first para Element
// para1.addEventListener("click", colorChanger);

let span1_1 = para1.childNodes[1];
span1_1.addEventListener("click", colorChanger);

let span1_2 = para1.childNodes[3];
span1_2.addEventListener("click", bgChanger);

let para2 = button_container.childNodes[3];
para2.addEventListener("click", bgChanger); //second para Element
para2.addEventListener("click", colorChanger);
let paraSpan = document.querySelector(".span");

// paraSpan.addEventListener("click", colorChanger);
// paraSpan.removeEventListener("click", colorChanger);
console.log(paraSpan.innerHTML);
console.log(paraSpan.childNodes[0].nodeValue + "🤞");
console.log(paraSpan.nodeType);
let manipulation = paraSpan;
manipulation.innerHTML = "<span> pooll </span>";
console.log(paraSpan.innerHTML);
function checker() {
  let input = String(this.innerHTML); //element text or innerHTMl
  let inputArray = input.split(" "); //converting to array
  let wanted = "dolor"; //we want to find
  let result = "Good to go 🚢";

  for (let x of inputArray) {
    if (x == wanted) {
      result = "Suspected Detected 🚨 = " + `"${x}"`;
    }
  }
  console.log(result);
}

paraSpan.addEventListener("click", checker);

let faqContainer = document.querySelector(".faq_container");
let secondPara = faqContainer.childNodes[1];
let allPara = Array.from(faqContainer.children);
function Brown(value) {
  value.style.background = "brown";
}
allPara.forEach(Brown);
console.log(allPara);
let faqPara = document.querySelector(".para");
console.log(faqPara.children);
console.log(Array.from(faqPara.children)); //Array
// let faqParaArray = Array.from(faqPara.children);
let faqParaArray = faqPara.childNodes;
for (let x = 0; x < faqParaArray.length; x++) {
  console.log(faqPara.childNodes[x].nodeName + " ");
}
console.log(faqPara.childNodes.length);
// console.log(faqPara.) //forget 
let question = faqPara.childNodes[0];
console.log(question);
let answer = faqPara.childNodes[3];
console.log(answer.childNodes[0]);

// question.style.background = "purple";
// answer.style.background = "yellow";
// question.addEventListener("click", function () {
//   this.style.color = "red";
//   answer.style.display = "block";
// });

let parentPara = document.querySelector('.para');
let spanNothing = document.createElement('span');
spanNothing.innerHTML = 'Helo for the freak';
let goingToChange = document.querySelector('.question');
parentPara.replaceChild(spanNothing, goingToChange);

const grandParent = document.getElementsByClassName('grandParent');
const parents = document.getElementsByClassName('parent');
const parentsQuery = document.querySelectorAll('.parent');
console.log(parents);
console.log(parentsQuery);
console.log(grandParent[0].childNodes[1])
console.log(parents[0].firstElementChild.style.color = 'orange')
// grandParent[1].style.background = 'yellow';

let formFeed = 'helo for the  freak';
console.log(formFeed)
// alert('String that has to go to next line is this line')
grandParent[0].append(formFeed)


let arraY = [1, 2];
console.log('old Array' + arraY)
let newestArraY = myFun(arraY, 3);
console.log('new Array' + arraY)
console.log(arraY === newestArraY);
function myFun(array, number) {
  array = [number]
}

console.log(screen.availWidth);

const newContainer = document.querySelector('.new_text');
const myScreen = () => {
  let customerScreen = screen.width;
  if (customerScreen < 950) {
    console.log(customerScreen)
    return newContainer.style.color = 'red';
  }
  else {
    console.log(customerScreen)
    return newContainer.style.color = 'cayn';
  }
  return document.body.backgroundColor = 'orange';
}

newContainer.addEventListener('click', myScreen);
// console.log(newContainer)  