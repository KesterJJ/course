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
let snowInterval = 0;
let allBubbles = [];
let rectangle0 = document.createElement("div");
let rectangle1 = document.createElement("div");
let rectangle2 = document.createElement("div");
rectangle0.id = "rectangle0";
rectangle1.id = "rectangle1";
rectangle2.id = "rectangle2";
const aboutHead = document.createElement("h3");
let about = document.createElement("p");
aboutHead.innerHTML = "ABOUT";
about.innerHTML = "Developer, designer, and problem solver."
rectangle2.appendChild(aboutHead);
rectangle2.appendChild(about);
//adds content for rectangles
rectangle0.innerHTML = `<div style="height: 50%; width: 100%"></div><div style="height: 50%; width: 100%;"><h3>Languages/Frameworks/Libraries</h3><ul><li>HTML</li><li>CSS</li><li>Bootstrap</li><li>JavaScript</li><li>JSON</li><li>NodeJS</li><li>React.JS</li><li>PHP</li><li>SQL</li></ul></div>`;
rectangle1.innerHTML = `<div style="height: 50%; width: 100%"></div><div style="height: 50%; width: 100%;"><h3>Skills</h3><ul><li>csdonc</li><li>CSS</li><li>Bootstrap</li><li>JavaScript</li><li>JSON</li><li>NodeJS</li><li>React.JS</li><li>PHP</li><li>SQL</li></ul></div>`;

//creates rotators for bubbles
for (let i = 0; i < 6; i++) {
    let outer = document.createElement("div");
    outer.classList.add("rotator");
    outer.id = `rotator${i}`;
    let mid = document.createElement("div");
    mid.id = `bubble${i}`;
    mid.appendChild(document.createElement("div"));
    outer.appendChild(mid);
    allBubbles.push(outer);
}

let allTriangles = [];

for (let i = 0; i < 4; i++) {
    let outer = document.createElement("div");
    outer.id = `triangle${i}Border`;
    let inner = document.createElement("div");
    inner.id = `triangle${i}`;
    outer.appendChild(inner);
    allTriangles.push(outer);
}

//Cube  variables
let stage = document.createElement("div");
stage.classList.add("stage");
let cube = document.createElement("div");
cube.id = "cube";
stage.appendChild(cube);
let front = document.createElement("div");
front.classList.add("face");
front.id = "front";

let back = document.createElement("div");
back.classList.add("face");
back.id = "back";

let left = document.createElement("div");
left.classList.add("face");
left.id = "left";

let right = document.createElement("div");
right.classList.add("face");
right.id = "right";

let lid = document.createElement("div");
lid.classList.add("face");
lid.id = "top";

let bottom = document.createElement("div");
bottom.classList.add("face");
bottom.id = "bottom";

cube.appendChild(front);
cube.appendChild(back);
cube.appendChild(left);
cube.appendChild(right);
cube.appendChild(bottom);
cube.appendChild(lid);


function randomise(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

//changes title page
inverse = () => {
    heading.style.color = "black";
    heading.style.backgroundColor = "white";
    oneDiv.style.backgroundColor = "white";
    heading2.style.color = "black";
    heading2.style.backgroundColor = "white";
}


//Takes actions based on scroll section
let options = {
    root: null,
    threshold: 0.2,
    rootMargin: "-50px 0px -50px 0px"
};
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        body.classList.remove(`${body.classList[1]}`);
        body.classList.add(`body${entry.target.id}`);
        if (entry.target == one) {
            clearInterval(snowInterval);
            snowInterval = 0;
            hideRectangles();
        } else if (entry.target == two) {
            clearInterval(snowInterval);
            snowInterval = 0;
            enterRectangles();
        } else if (entry.target == three) {
            hideRectangles();
            enterBubbles();
            snow();
        } else if (entry.target == four) {
            clearInterval(snowInterval);
            snowInterval = 0;
            hideBubbles();
        } else if (entry.target == five) {
        } else if (entry.target == six) {
            enterTriangles();
        } else {
            enterCube();
        }
    })
}, options);
sections.forEach(section => {
    observer.observe(section);
});




//makes snow
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
    flake.style.height = `${flakeSize}px`;
    flake.style.transform = `rotate3d(${rotation}, ${rotation2}, ${rotation3}, 360deg)`;
    flake.style.animation = `fall ${fallSpeed}s linear 1, rotate ${fallSpeed}s linear infinite`;
    body.appendChild(flake);
    flake.style.left = Math.floor(Math.random() * 100) + "vw";
    setTimeout(function () { body.removeChild(flake); }, 11000);
}
snow = () => {
    snowInterval = setInterval(createFlake, 300);
}

//page 2 effects
enterRectangles = () => {
    hideBubbles();
    rectangle0.style.animation = "rect0 0.5s ease-in 0.5s 1 both";
    rectangle1.style.animation = "rect1 0.5s ease-in 0.5s 1 both";
    rectangle2.style.animation = "rect2 0.5s ease-in 1s 1 both";
    two.appendChild(rectangle0);
    two.appendChild(rectangle1);
    two.appendChild(rectangle2);
}
hideRectangles = () => {
    rectangle0.style.animation = "rect0Out 0.5s ease-in 0.5s 1 both";
    rectangle1.style.animation = "rect1Out 0.5s ease-in 0.5s 1 both";
    rectangle2.style.animation = "rect2Out 0.5s ease-in 0s 1 both";
    removeRect = () => {
        rectangle0.remove();
        rectangle1.remove();
        rectangle2.remove();
    }
    setTimeout(removeRect, 1000);
}



//page 3 effects
enterBubbles = () => {
    for (let i = 0; i < allBubbles.length; i++) {
        let bub = allBubbles[i];
        three.appendChild(bub);
        let floatLength = randomise(4, 15);
        bub.style.animation = `riseIn 0.5s ease-out 1s 1 both, float ${floatLength}s linear infinite`;
        let bubble = document.getElementById(`bubble${i}`);
        bubble.style.animation = `antifloat ${floatLength}s linear infinite`;
    }
    bub4 = document.getElementById("bubble4");
    bub4.innerHTML = "<div>Click the bubbles!</div>"
}
hideBubbles = () => {
    rotator = document.querySelectorAll(".rotator");
    for (let i = 0; i < rotator.length; i++) {
        rotator[i].style.animation = "riseOut 0.5s ease-in 1 forwards";
        removeBubble = () => { three.removeChild(rotator[i]) }
        setTimeout(removeBubble, 500);
    }
}

enterTriangles = () => {
    for (let i = 0; i < allTriangles.length; i++) {
        let tri = allTriangles[i];
        six.appendChild(tri);
    }
}




//CUBE

enterCube = () => {
    seven.appendChild(stage);
    console.log(stage);
}


showFront = () => {
    cube.style.transform = "translateZ(-100px) rotateY(-180deg)";
    cube.style.animation = "show-front 0.5s ease 0s forwards, spinCubeFront 5s ease 0.5s infinite";
    let frontLink = document.createElement("a");
    frontLink.href = "#six";
    frontLink.innerHTML = "Green page";
    front.appendChild(frontLink);
}

showBack = () => {
    cube.style.transform = "translateZ(-100px) rotateY(0deg)";
    cube.style.animation = "show-back 0.5s ease 0s forwards, spinCubeBack 5s ease 0.5s infinite";
}

showRight = () => {
    cube.style.animation = "show-right 0.5s ease 0s forwards, spinCubeRight 5s ease 0.5s infinite";
}

showLeft = () => {
    cube.style.animation = "show-left 0.5s ease 0s forwards, spinCubeLeft 5s ease 0.5s infinite";
}

showBottom = () => {
    cube.style.animation = "show-bottom 0.5s ease 0s forwards, spinCubeBottom 5s ease 0.5s infinite";
}

showTop = () => {
    cube.style.animation = "show-top 0.5s ease 0s forwards, spinCubeTop 5s ease 0.5s infinite";
}

front.onclick = showLeft;
right.onclick = showRight;
bottom.onclick = showBottom;
lid.onclick = showTop;
front.onclick = showBack;
front.onclick = showFront;