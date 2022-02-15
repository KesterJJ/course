const sections = document.querySelectorAll("section");
const container = document.getElementById("container");
const body = document.getElementById("body");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const heading = document.getElementById("heading");
const heading2 = document.getElementById("heading2");
const oneDiv = document.getElementById("oneDiv");
const rotators = document.querySelectorAll(".rotator");
let snowInterval = 0;

inverse = () => {
//heading.classList.toggle("active");
//heading2.classList.toggle("active");
//oneDiv.classList.toggle("active");
//oneDiv.style.mixBlendMode = "lighten";
heading.style.color = "black";
heading.style.backgroundColor = "white";
oneDiv.style.backgroundColor = "white";
heading2.style.color = "black";
heading2.style.backgroundColor = "white";
}



let options = {
    root: null,
    threshold: 0.2,
    rootMargin: "-150px 0px -150px 0px"
};



const observer = new IntersectionObserver (function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        body.classList.remove(`${body.classList[1]}`);
        body.classList.add(`body${entry.target.id}`);
        
        if (entry.target == three) {
            snow();
            enterBubbles();
        } else {
           clearInterval(snowInterval);
           snowInterval = 0;
           hideBubbles();
        }
        
    })
}, options);


sections.forEach(section => {
    observer.observe(section);
});



function randomise (max, min) {
   return Math.floor(Math.random() * (max - min) + min);
}

createFlake = () => {
    const flake = document.createElement("div");
    let flakeNo = randomise(5, 1);
    flake.style.backgroundSize = "cover";
    if (flakeNo == 3) {
        flake.style.backgroundSize = "330%";
    } 
    let flakeSize = randomise(41, 10);
    flake.classList.add("flake");
    let fallSpeed = randomise(11, 2);
    let rotation = randomise(4, -3);
    let rotation2 = randomise(4, -3);
    let rotation3 = randomise(4, -3);
    flake.style.backgroundImage = `url("img/flake${flakeNo}.png")`;
    flake.style.width = `${flakeSize}px`;
    flake.style.height =`${flakeSize}px`;
    flake.style.transform = `rotate3d(${rotation}, ${rotation2}, ${rotation3}, 360deg)`;
    flake.style.animation = `fall ${fallSpeed}s linear 1, rotate ${fallSpeed}s linear infinite`;
    body.appendChild(flake);
    
    flake.style.left = Math.floor(Math.random() * 100) + "vw";
    setTimeout(function() {body.removeChild(flake);}, 11000);
    }
    
    snow = () => {
   snowInterval = setInterval(createFlake, 300);
    }

        let bubble = [];

    enterBubbles = () => {
      for (let i = 0; i < bubble.length; i++) {
          let bub = bubble[i];
          three.appendChild(bub);
          rotators[i].style.top = 120vh;
      }
    }

    hideBubbles = () => {

        for (let i = 0; i < rotators.length; i++) {
            rotators[i].style.top = "-50vh";
            removeBubble = () => {bubble.push(three.removeChild(rotators[i]))}
            setTimeout(removeBubble, 5000);
        }
       /* rotators.forEach(element => {
            element.style.top = "-50vh";
            removeBubble = () => {three.removeChild(element)};
            setTimeout(removeBubble, 5000);
        })*/
    }