const clock = document.querySelector("h2#clock");

function getDateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getDateTime();
setInterval(getDateTime, 1000);
