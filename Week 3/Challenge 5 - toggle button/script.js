let para =  document.getElementById("para");
let button = document.getElementById("button");
function toggle () {
   if (para.style.display != "none") {
       para.style.display = "none";
   } else {
       para.style.display = "block";
   }
}

function write() {
    console.log("hello")
}

button.addEventListener('mouseover', log);


function log() {
    console.log(Math.LN10);
}

