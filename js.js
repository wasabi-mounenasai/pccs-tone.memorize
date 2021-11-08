var toneList = ["p","ltg","g","dkg","lt","sf","d","dk","b","s","dp","v"],
    answerTone;

$(function() {
  for( j=0; j<12; j++){
    $("#gameStart").append('<div class="item"></div>');
    $("#memoryMode").append('<div class="item"></div>');
    $("#return").append('<div class="item"></div>')
}
    sqGradiant("memoryMode",toneColorList[4])
    sqGradiant("gameStart",toneColorList[8])
    sqGradiant("return",toneColorList[0])
    getGraphics();
})

function gameStart() {
  killbtn()
  $('.firstscreen').fadeOut(2000);
}

function memoryMode() {
  killbtn()
  document.getElementById("title").textContent = "MEMORY MODE"
  $(".main-nav button").each(function(k, elem) {
    if(elem.id == "return"){}
    else{var toneTitle = elem.id;
    $("#" + toneTitle).append('<div class="toneName">' + toneTitle + '</div>');
    elem.disabled = true;
}})}

function killbtn() {
  $(".firstscreen button").each(function(i, elem){
    elem.disabled = true;
})}

function questionStart() {
  var lastAnswer = answerTone
  answerTone = toneList[Math.floor(Math.random()*12)]
  if (lastAnswer == answerTone){questionStart()}
  else{
  document.getElementById("title").textContent = answerTone;
}}

function buttonClick(thatid) {
  var urId = thatid.id;
  if (urId == answerTone) {
    animation(circle)}
  else{animation(cross)}
  questionStart();
}

function animation(answer) {
  var thisId = answer.id;
  target = document.getElementById(thisId);
  target.className = "active";
  target.addEventListener('transitionend', () => {
  target.className = "";
})}

function returnTitle() {
  $('.firstscreen').fadeIn(2000);
  $(".firstscreen button").each(function(i, elem){
    elem.disabled = false;
  })
  $(".main-nav button").each(function(k, elem) {
    if(elem.id == "return"){}
    else {
    console.log("#" + elem.id + " toneName");
    $("#" + elem.id + " .toneName").fadeOut(2000);
    elem.disabled = false;
}})}
