let message = showTime();
console.log(message)
document.getElementById("date").innerHTML = message;

function showTime(){
  let dates = new Date();
  let month = dates.getMonth() + 1;
  let date = dates.getDate();
  let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let day = dates.getDay();
  let message = "今日は" + month + "/" + date + "(" + days[day] + ")です．";
  return message;
}
