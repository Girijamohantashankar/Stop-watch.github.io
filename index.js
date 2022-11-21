var hour=0,sec=0,min=0;
var dispHour=0,dispMin=0,dispSec=0;
var timeoutId=null;
var check="stop";
function timer(){
  sec++;
  if(sec/60==1){
    min++;
    sec=0;
  if(min/60==1){
    hour++;
    min=0;
  }}
    if(sec<10){ dispSec="0"+sec.toString(); }
    else{ dispSec=sec.toString(); }
   if(min<10){ dispMin="0"+min.toString(); }
   else{ dispMin=min.toString(); }
   if(hour<10){ dispHour="0"+hour.toString(); }
   else{ dispHour=hour.toString(); }
  document.getElementById("timer").innerHTML=dispHour+":"+dispMin+":"+dispSec;
}
function start(){
    if(check==="stop"){
        timeoutId=window.setInterval(timer,1000);
        document.getElementById("start").innerHTML="Stop"; 
        check="start";
    }else{
    window.clearInterval(timeoutId);
    document.getElementById("start").innerHTML="Start";
    check="stop";
}}
function reset(){
    window.clearInterval(timeoutId);
    sec=0,min=0,hour=0;
    document.getElementById("timer").innerHTML="00:00:00";
    document.getElementById("start").innerHTML="Start";
}