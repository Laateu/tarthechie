document.getElementById("monthly").innerHTML = showGreetings();

function showGreetings(){
  let dates = new Date();
  let message = "";
  let month = dates.getMonth() + 1;
  let hour = dates.getHours();
  let minutes = dates.getMinutes();
  if(hour == 8 && minutes <= 40){
    message = "繧ゅ≧縺ｭ縺ｾ縺励ｇ縺 縺倥?繧薙?縺九ｉ縺?繧 縺溘☆縺代※縺ゅ￡縺ｦ";
  }
  else{
    if (month == 1){
      message = "あけましておめでとうございます。まだまだ寒いですが、お元気ですか？";
    }
    else if(month == 2){
      message = "受験の季節ですね。寒さもそろそろ開けてほしいですね。";
    }
    else if(month == 3){
      message = "春休みですね。今が自分磨きのチャンスですよ。ゲームを作りましょう！";
    }
    else if(month == 4){
      message = "春ですね。これから一年、頑張りましょう！";
    }
    else if(month == 5){
      message = "暑からず寒からずのステキな季節ですね。寒暖差でやられぬよう体調管理には気を付けましょう。";
    }
    else if(month == 6){
      message = "六月ですね。ジューンブライドですね。雨は降っていますか？";
    }
    else if(month == 7){
      message = "夏ですね。希望に満ちた、明るく爽やかな月ですね。";
    }
    else if(month == 8){
      message = "暑い日が続きますが、お元気ですか？暑いからといって、冷房のつけすぎには気を付けましょう！";
    }
    else if(month == 9){
      message = "そろそろ中秋の名月ですね。涼しくなってきましたが、体調は大丈夫ですか？";
    }
    else if(month == 10){
      message = "山々が色めき始めてきましたね。今年も残るところ二ヶ月です。";
    }
    else if(month == 11){
      message = "理大祭の季節ですね(?)。皆さま、ゲームは出来ましたか？そのうち提出場所を設けますのでよろしくお願いしますね。";
    }
    else if(month == 12){
      message = "寒さが厳しくなってまいりました。もう冬ですね。フライドチキンが食べたくなる季節ですね。";
    }
    else{
      message = "このメッセージが見られたということは、きっとバグか何かで 1 ~ 12 以外の数字が入力されたのであろう。<br>いや、あるいは…。今、このメッセージを見ているあなたは、地球とは異なる「どこか」にいるのかもしれない。";
    }
  }
  return message;
}
