var count = 10;

const interval = setInterval(() => {
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerText = count;
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(interval);
    const header1 = document.querySelector("div");
    header1.setAttribute(
      "style",
      " font-family: sans-serif;"
      // "font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
    );
    header1.innerText = "Happiee Porandhanaal Machaaa😚❤️🫂";
  }
}, 1000);
