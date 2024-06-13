let element = document.getElementById("greet");
element.innerHTML = greeting();

function greeting(){
  let dates = new Date();
  let hour = dates.getHours();
  let minutes = dates.getMinutes();
  let message = "こんばんは！";
  if(hour >= 4 && hour <= 9){
    message = "おはようございます！";
  }
  else if(hour > 9 && hour <= 18){
    message = "こんにちは！";
  }
  else if(hour == 2 && minutes <= 30){
    message = "縺薙ｓ縺ｰ繧薙?！";
  }
  return message;
}
