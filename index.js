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

  if () {
    console.log("closed");
  }

  document.getElementById("currentTime").innerHTML = n;
}
