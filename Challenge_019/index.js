var mn = new Date().getMonth();
var dy = new Date().getDay();
var dt = new Date().getDate();
// console.log(mn, dy, dt);

var months = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var d = dy;
var date = 29;
mn = mn + 1;

function calender() {
  // console.log(mn);
  $(".month").text(months[mn]);
  if (
    mn == 1 ||
    mn == 2 ||
    mn == 5 ||
    mn == 7 ||
    mn == 8 ||
    mn == 10 ||
    mn == 12
  ) {
    for (i = 1; i < 5; i++) {
      if (date <= 31) {
        $(`.day${i}`).text(days[d]);
        $(`.date${i}`).text(date);
        d = (d + 1) % 7 ? d + 1 : 0;
      } else {
        date = 1;
        $(`.day${i}`).text(days[d]);
        $(`.date${i}`).text(date);
        d = (d + 1) % 7 ? d + 1 : 0;
      }
      date = date + 1;
      console.log("31 days");
    }
  } else {
    for (i = 1; i < 5; i++) {
      if (date <= 30) {
        $(`.day${i}`).text(days[d]);
        $(`.date${i}`).text(date);
        console.log(days[d], d, date);
        d = (d + 1) % 7 ? d + 1 : 0;
      } else {
        date = 1;
        $(`.day${i}`).text(days[d]);
        $(`.date${i}`).text(date);
        console.log(days[d], d, date);
        d = (d + 1) % 7 ? d + 1 : 0;
      }
      date = date + 1;
    }
  }
}

// console.log(months[mn]);

calender();
