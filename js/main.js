/*const d = new Date();
let hour = d.getHours();
document.getElementById("h").innerHTML = hour;
let minutes = d.getMinutes();
document.getElementById("m").innerHTML = minutes;
let seconds = d.getSeconds();
document.getElementById("s").innerHTML = seconds;

let clock = hour + ":" + minutes + ":" + seconds;
document.getElementById("clock").innerHTML = time;*/


/*function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
  document.getElementById("clock").innerHTML = time;*/

let setAlarm = document.getElementById
let alarmTime = document.getElementById
let myAlarm = 
setInterval(myClock, 1000);

function myClock() {
    const d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
  
if (myTimer == myAlarm){
    alert('Alarm is going off')
}


let hour = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]


