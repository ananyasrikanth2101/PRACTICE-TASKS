// TASK 1 - Color a span/div element content when a user moves the mouse over the element.
// let shape = document.createElement("div");
// shape.setAttribute(
//   "style",
//   "width:100px; height:100px; background-color:blue;"
// );
// document.body.appendChild(shape);
// shape.addEventListener("mouseover", (e) => {
//   shape.setAttribute(
//     "style",
//     "width:100px; height:100px; background-color:red;"
//   );
// });
// shape.addEventListener("mouseleave", (e) => {
//   shape.setAttribute(
//     "style",
//     "width:100px; height:100px; background-color:green;"
//   );
// });

// TASK - 2 Use prompt to read a value from user and display it in the span element.
// var Name = window.prompt("Enter your name");
// var nameSpan = document.createElement("span");
// if (Name) {
//   nameSpan.innerText = Name;
//   document.body.appendChild(nameSpan);
// }

// TASK - 3 Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.
// let heading = document.createElement("h1");
// heading.innerText = "heading is arranged";
// document.body.appendChild(heading);
// let coordinates = document.createElement("span");
// document.body.appendChild(coordinates);
// heading.addEventListener("click", (e) => {
//   console.log(e.x, e.y);
//   coordinates.innerText = `x:${e.x}, y:${e.y}`;
// });

// TASK - 4 Write a Javascript code for character counts in the textarea.
// const textarea = document.createElement("textarea");
// textarea.setAttribute("placeholder", "Enter Message");
// const para = document.createElement("p");
// para.innerText = "Entered text length:";
// document.body.append(...[textarea, para]);
// textarea.addEventListener("input", (e) => {
//   console.log(e.target.value.length);
//   para.innerText = `Entered text length:${e.target.value.length}`;
// });
// textarea.addEventListener("focus", (e) => {
//   textarea.setAttribute(
//     "style",
//     "outline:none; border:solid; border-width:2px; border-color:red"
//   );
// });
// textarea.addEventListener("blur", (e) => {
//   textarea.setAttribute("style", "outline:none;");
// });

// TASK 6 -With Javascript write a simple form validation
// var emailinput = document.getElementById("email");
// var passwordinput = document.getElementById("password");
// var emailMessage = document.getElementById("emailMessage");
// var passwordMessage = document.getElementById("passwordMessage");
// console.log(emailinput, passwordinput);
// emailinput.addEventListener("input", (e) => {
//   console.log(e);
//   const { tooShort, typeMismatch } = e.target.validity;
//   console.log(tooShort, typeMismatch);
//   if (tooShort) {
//     emailMessage.innerText = `Entered Email should be atleast ${e.target.minLength}`;
//   } else if (typeMismatch) {
//     emailMessage.innerText = `Entered value is not of type ${e.target.type}`;
//   } else {
//     emailMessage.innerText = "";
//   }
// });
// passwordinput.addEventListener("input", (e) => {
//   console.log(e);
//   const { tooShort, typeMismatch } = e.target.validity;
//   console.log(tooShort, typeMismatch);
//   if (tooShort) {
//     passwordMessage.innerText = `Entered input should be atleast ${e.target.minLength}`;
//   } else if (typeMismatch) {
//     passwordMessage.innerText = `Entered value is not of type ${e.target.type}`;
//   } else {
//     passwordMessage.innerText = "";
//   }
// });

// TASK 7 -In your HTML Add two buttons, where first button action for full screen mode and the second button for exit from full screen mode.
// let fullscreen = document.getElementById("full");
// let exitscreen = document.getElementById("exit");
// const square = document.getElementById("square");

// fullscreen.addEventListener("click", (e) => {
//   square.requestFullscreen();
// });
// exitscreen.addEventListener("click", (e) => {
//   document.exitFullscreen();
// });

// TASK - 8 When user press any key in your html page show a alert that Invalid Key Pressed,
// but when user press spacebar show an alert Thank You..!! and close the current window.
// document.addEventListener("keydown", (e) => {
//   console.log(e);
//   if (e.code === "Space") {
//     alert("Thank you!");
//   } else {
//     alert("Invalid key pressed");
//   }
// });

// TASK - 9 When a cursor is moved over an content, allow the user to edit the content in HTML page.
// var para = document.querySelector("p");
// para.addEventListener("mouseover", (e) => {
//   para.contentEditable = true;
// });
