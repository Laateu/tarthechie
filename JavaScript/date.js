document.getElementByID("date").innerHTML += showTime();

function showTime(){
  let dates = new Date();
  let month = dates.getMonth() + 1;
  let date = dates.getDate();
  let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let day = dates.getDay();
  message = "今日は" + month + "/" + day + "(" + days[day] + ")です．";
  return message;
}
