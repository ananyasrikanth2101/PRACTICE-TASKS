// var set = document.querySelector("h3");
// setTimeout(() => {
//   document.querySelector("you droped this");
// }, 5000);
// console.log(set);

// var count = 10;
// var interval = setInterval(() => {
//   count = count - 1;
//   console.log(count);
//   if (count === 1) {
//     clearInterval(interval);
//     const heading = document.getElementById("hema");
//     console.log(heading);
//   }
// }, 1000);

var count = 10;

const interval = setInterval(() => {
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerText = count;
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(interval);
    const header1 = document.querySelector("div");
    header1.innerText = "Happy Birthday Machaaa😚❤️";
  }
}, 1000);
// var count = 10;
// const interval = setInterval(() => {
//   var counts = document.getElementById("cdown");
//   counts.innerText = count;
//   count--;
//   console.log(count);
//   if (count === 0) {
//     clearInterval(interval);
//     const heading = document.querySelector("div");
//     const h1 = document.getElementById("head");
//   }
// });
