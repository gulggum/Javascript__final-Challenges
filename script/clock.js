const clock = document.querySelector(".clock");

function getClock() {
  const todaydate = new Date();
  const years = todaydate.getFullYear();
  const months = todaydate.getMonth();
  const dates = todaydate.getDate();
  const hours = String(todaydate.getHours()).padStart(2, "0");
  const minutes = String(todaydate.getMinutes()).padStart(2, "0");
  const seconds = String(todaydate.getSeconds()).padStart(2, "0");

  clock.innerText = `${years}년 ${months}월${dates}일
    ${hours}:${minutes}:${seconds}`;
}

const dDayClock = document.querySelector(".d-day__clock");

function getdDayClock() {
  const tripDate = new Date("2025-10-01");
  const todaydate = new Date();

  const tripDday = tripDate - todaydate;
  const dDates = Math.floor(tripDday / (1000 * 60 * 60 * 24));
  const dHours = String(
    Math.floor((tripDday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const dMinutes = String(
    Math.floor((tripDday % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const dSeconds = String(Math.floor((tripDday % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  dDayClock.innerText = `미국여행 D-day
  ${dDates}d ${dHours}h ${dMinutes}m ${dSeconds}s`;
}

getClock();
setInterval(getClock, 1000);
getdDayClock();
setInterval(getdDayClock, 1000);
