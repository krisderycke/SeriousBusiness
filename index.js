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

  var clock = new Date();
  var h = clock.getHours();
  var m = clock.getMinutes();
  if (h < 10) {
    h = "0" + h;
  }
  if (h == 24) {
    h = "00";
  }
  if (m < 10) {
    m = "0" + m;
  }

  document.getElementById("currentTime").innerText = n + " " + h + ":" + m;
  setTimeout("myTime()", 60000);
}
