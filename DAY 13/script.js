// const body = document.querySelector("body");
// console.log(body);
// const heading1 = document.createElement("h1");
// heading1.innerText = "HELLO GUYSSSS";

// // to set the class or id to an element
// heading1.setAttribute("class", "heading");
// heading1.setAttribute("id", "heading1");

// var para = document.createElement("p");
// para.innerText = "welcome to waikiki";
// console.log(para);
// para.setAttribute("class", "para");
// para.setAttribute("id", "para");
// console.log(heading1);
// body.appendChild(heading1);
// body.appendChild(para);

// // To change the text of div by using get id
// var div = document.getElementById("one");
// console.log(div);
// console.log(div.innerText);
// // div.innerText = "are you feeling the rush";

// // To change the text of div by using get class
// var div = document.getElementsByClassName("box");
// console.log(div);
// console.log(div.innerText);
// div.innerText = "loga mithra";

// var allDivs = document.querySelectorAll("div.box");
// console.log(allDivs);

// practice
// let heading = document.querySelector("h1");
// console.log(heading);
// heading.innerText = "ANANYA SRIKANTH";

// const heading = document.getElementById("id1");
// // heading.innerText = "SASSY GIRL";
// setTimeout(() => {
//   heading.innerText = "SASSY GIRL";
// }, 5000);
// console.log(heading);

// var square = document.createElement("div");
// square.setAttribute("style", `width:100px; height:100px; background:blue`);
// document.body.appendChild(square);

// function createSquare(color = "blue") {
//   var square = document.createElement("div");
//   square.setAttribute(
//     "style",
//     `width:100px; height:100px; background: ${color};`
//   );
//   document.body.appendChild(square);
// }
// createSquare();
// createSquare("red");
// createSquare("green")

// function createSquare(color = "blue") {
//   var square = document.createElement("div");
//   square.setAttribute(
//     "style",
//     `width:100px; height:100px; background: ${color};`
//   );
//   return square;
// }
// document.body.append(
//   ...[createSquare(), createSquare("red"), createSquare("green")]
// );

// var square = document.createElement("div");
// square.setAttribute("style", `width:100px; height:100px; background: blue;`);
// square.innerHTML = "<p>HELLO SQUARE</p>";
// document.body.appendChild(square);

var count = 11;
var interval = setInterval(() => {
  count = count - 1;
  console.log(count);
  if (count === 1) {
    clearInterval(interval);
    console.log("HAPPY BIRTHDAY MACHAAA");
  }
}, 1000);
