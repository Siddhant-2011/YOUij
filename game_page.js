function send(){
    var number1 = document.getElementById("word").value;
    var number2 = document.getElementById("word2").value;
    var actual_answer = parseInt(number1) * parseInt(number2);   
}
question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
var input_box ="<br>Answer : <input type= 'test id='input_check_box' ";
var check_button ="<br><br><button class='btn btn-info' onclick='check()'>Check</button> ";
var row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
var question_turn="player1";
var answer_turn="player2";
function check(){
  var get_answer= document.getElementById("input_check_box").value;
  if(get_answer == actual_answer){
      if(answer_turn=="player1"){
          var update_player_score= player1_score+1;
          document.getElementById("word").innerHTML=update_player_score;
      }
      else{
        var update_player2_score= player_score+1;
        document.getElementById("word1").innerHTML=update_player2_score;
    }
    if(question_turn=="player1"){
        question_turn= "player2";
        document.getElementById("player_question").innerHTML=question_turn;
    }
    else{
      var question_turn= "player1";
      document.getElementById("player_question").innerHTML=question_turn;
  }
  if(answer_turn=="player1"){
    answer_turn= "player2";
    document.getElementById("player_answer").innerHTML=answer_turn;
}
else{
  var answer_turn= "player1";
  document.getElementById("player_answer").innerHTML=answer_turn;
}
  }
    }