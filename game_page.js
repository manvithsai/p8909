player1=localStorage.getItem("player1_name");
player2=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player_1").innerHTML=player1+":";
document.getElementById("player_2").innerHTML=player2+":";
document.getElementById("player_1_score").innerHTML=player1_score;
document.getElementById("player_2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question-turn-"+player1;
document.getElementById("player_answer").innerHTML="answer-turn-"+player2;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
console.log("word in lowercase="+word);

charAt1=word.charAt(1);
console.log(charAt1);

divide_2=Math.floor(word.length/2);
charAt2=word.charAt(divide_2);
console.log(charAt2);

length_minus_1=word.length-1;
charAt3=word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1=word.replace(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);

question_word="<h4 id='word_display'>q."+remove_charAt3+"</h4>";
input_box="<br> answer:<input type='text' id='check_answer'>";
check_button="<br> <button class='btn btn-info' onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn="Player1";
answer_turn="Player2"
function check(){
get_answer=document.getElementById("check_answer").value;
answer=get_answer.toLowerCase();
console.log("answer="+answer);
if(answer==word){
if(answer_turn="Player1"){
player1_score=player1_score+1;                                                                                  
document.getElementById("player_1_score").innerHTML=player1_score;
}
else{
    player2_score=player2_score+1;
    document.getElementById("player_2_score").innerHTML=player2_score;
}
}
if(question_turn=="Player1"){
question_turn="Player2"
document.getElementById("player_question").innerHTML="Question_turn-"+player2;
}
else{
    question_turn="Player1"
document.getElementById("player_question").innerHTML="Question_turn-"+player1;
}
if(answer_turn=="Player1"){
    answer_turn="Player2"
    document.getElementById("player_answer").innerHTML="Answer_turn-"+player2;
    }
    else{
        answer_turn="Player1"
    document.getElementById("player_answer").innerHTML="Answer_turn-"+player1;
    }
    document.getElementById("output").innerHTML="";
}
