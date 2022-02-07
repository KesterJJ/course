function setTime() {
    let display = document.getElementById("time");
 let date = new Date();
 time = date.getHours() + "." + date.getMinutes() + "." + date.getSeconds();

display.innerHTML = time;
   
}

setInterval(setTime, 1000);