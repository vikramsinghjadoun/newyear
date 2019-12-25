var countDate = new Date('jan 1,2020 00:00:00').getTime();

function newYear(){
    var now = new Date().getTime();
    gap = countDate - now;

    var secound = 1000;
    var minute = secound*60;
    var hour = minute*60;
    var days = hour*24;

    var d = Math.floor(gap / (days));
    var h = Math.floor((gap % (days)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (secound));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('secound').innerText = s;
}
setInterval(function(){
    newYear();
},1000);
