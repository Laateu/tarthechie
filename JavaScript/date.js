let message = showTime();
console.log(message)
document.getElementById("date").innerHTML = message;

function showTime(){
  let dates = new Date();
  let month = dates.getMonth() + 1;
  let date = dates.getDate();
  let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let day = dates.getDay();
  let hour = dates.getHour();
  let minutes = dates.getMinutes();
  let seconds = dates.getSeconds();
  /* padStart() : ゼロ埋めをする  */
  let message = "今日は" + month + "/" + date + "(" + days[day] + ")" + hour.padStart(2,"0") + ":" + minutes.padStart(2,"0") + ":" + seconds.padStart(2,"0") + "です．";
  return message;
}
