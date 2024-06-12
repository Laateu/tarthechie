function showTime(){
  let dates = new Date();
  let month = dates.getMonth() + 1;
  let date = dates.getDate();
  let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let day = dates.getDay();
  let hour = dates.getHours();
  let minutes = dates.getMinutes();
  let seconds = dates.getSeconds();
  /* padStart() : ゼロ埋めをする  */
  let message = "今日は" + month + "/" + date + "(" + days[day] + ")" + hour.toString().padStart(2,"0") + ":" + minutes.toString().padStart(2,"0") + ":" + seconds.toString().padStart(2,"0") + "です．";
  document.getElementById("date").innerHTML = message;
}

setInterval('showTime()',1000);
