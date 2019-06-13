var clock = new Date();
var h = clock.getHours();
var m = clock.getMinutes();
var w = clock.getDay();
console.log(w);

function myTime() {
  var d = new Date();
  var weekday = Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friyay";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  console.log(n);

  if (h < 10) {
    h = "0" + h;
  }
  if (h == 24) {
    h = "00";
  }
  if (m < 10) {
    m = "0" + m;
  }

  var a = document.getElementById("currentTime");
  a.innerText = n + " // " + h + ":" + m;
  a.style.color = "#440115";
}
setTimeout("myTime()", 30000);

// var today = document.getElementsByClassName("day");
// console.log(today);
// var changeDay = today[w - 1];
// console.log(changeDay);

var check = document.getElementById("check");
if (h > 7 && h < 17) {
  check.innerHTML = "We're Open";
  check.style.color = "green";
} else {
  check.innerHTML = "Sorry, we're Closed";
  check.style.color = "red";
}
