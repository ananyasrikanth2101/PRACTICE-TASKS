// To show a simple alert
// window.alert("hyy Im alert");

// To show a prompt to get a userinput
// var Name = window.prompt("Enter your name:");
// console.log(Name);
// if (!Name) {
//   window.prompt("Enter your name:");
// }

// To get user confirmation
// const confirm = window.confirm("Are you sure?");
// console.log(confirm);

// Window location objects
// window.location.reload();
// if (confirm) {
//   window.location.replace("https://mail.google.com/mail/u/0/#inbox");
// }
// if (confirm) {
//   window.location.pathname = "/DAY 14/chumma.html";
// } else {
//   alert("cancelled");
// }

// Tab : Application storage
// Types of storage - sessionStorage, localStorage, cookies
// var Name = prompt("Enter your name");
// if (!Name) {
//   alert("Name is invalid");
// } else {
//   localStorage.setItem("name", Name);
// }
// console.log(localStorage.getItem("name"));
// setTimeout(() => {
//   localStorage.removeItem("name");
//   console.log(localStorage.getItem("name"));
// }, 10000);

// var Name = prompt("Enter your name");
// if (!Name) {
//   alert("Name is invalid");
// } else {
//   sessionStorage.setItem("name", Name);
// }
// console.log(sessionStorage.getItem("name"));
// setTimeout(() => {
//   sessionStorage.removeItem("name");
//   console.log(sessionStorage.getItem("name"));
// }, 10000);

// sessionStorage.setItem("name", true); RUN THIS IN BROWSER WINDOW
// localStorage.setItem("name", true);

// SetTimeout and clearTimeout
// var time = setTimeout(() => {
//   alert("deiiiiii vennaaaa");
//   clearTimeout(time);
// }, 3000);

// setInterval and clearInterval
// var sec = 10;
// const int = setInterval(() => {
//   sec--;
//   console.log(sec);
//   if (sec === 0) {
//     clearInterval(int);
//   }
// }, 1000);

// EVENTS
// window.addEventListener("click", (e) => {
//   console.log("CLICKED");
// });
// var heading = document.querySelector("p");
// heading.addEventListener("click", (e) => {
//   heading.style.color = "blue";
// });

// let alert = document.getElementById("alert");
// // console.log(alert);
// alert.addEventListener("click", (e) => {
//   console.log(e);
// //   alert("saved");
// });

// var inputid = document.getElementById("name");
// // inputid.addEventListener("input", (e) => {
// //   console.log(e.target.value);
// // });
// // Another method
// inputid.onchange = function (e) {
//   console.log(e);
// };

let div = document.getElementById("div1");
div.addEventListener("mouseover", (e) => {
  div.style.backgroundColor = "red";
});
div.addEventListener("mouseleave", (e) => {
  div.style.backgroundColor = "blue";
});
