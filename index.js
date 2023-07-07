// we need to get the time from browser and transform the time to degree for arrows
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
  // this line get the time and date but we can be more specific with this
  const currentDate = new Date();

  //   example to get the hour: open console to see the code run
  //   const currentDate = new Date().getHour;
  //   const currentDate = new Date().getSecond;
  //   console.log(currentDate);
  //   console.log(hour, minute, second);

  //   79456234678946134679:
  setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  // there is two lines with the comment of 79456234678946134679:
  // this lines can be replace with this single line:
  // setInterval(updateClock, 1000)
  // ++++out clock is analog so we need to convert this codes

  const hourDeg = (hour / 12) * 360;
  //   Now we comment out the lines in css where we rotated the arrows. because we want to do it dynamically using js
  hourEl.style.transform = `rotate(${hourDeg}deg)`;

  const minuteDeg = (minute / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

  const secondDeg = (second / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}
// 79456234678946134679:
updateClock();
