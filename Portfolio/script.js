//General variables
const sections = document.querySelectorAll("section");
const container = document.getElementById("container");
const body = document.getElementById("body");
const bg = document.getElementById("bg");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");





//PAGE 1 VARIABLES
const heading = document.getElementById("heading");
const heading2 = document.getElementById("heading2");
const oneDiv = document.getElementById("oneDiv");








// PAGE 2 - RECTANGLE VARIABLES
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
rectangle1.innerHTML = `<div style="height: 50%; width: 100%"></div><div style="height: 50%; width: 100%;"><h3>Skills</h3><ul><li>SEO</li><li>Responsive design</li><li>APIs</li><li>JavaScript</li><li>JSON</li><li>NodeJS</li><li>React.JS</li><li>PHP</li><li>SQL</li></ul></div>`;
let areRectangles = false;







//PAGE 3 VARIABLES
//creates rotators for bubbles
let snowInterval = 0;
let allBubbles = [];

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
let areBubbles = false;
let isSnow = false;






//PAGE 4 VARIABLES
let isSun = false





//PAGE 5 VARIABLES
let areLeaves = false;





//PAGE 6 - TRIANGLE VARIABLES
let allTriangles = [];

for (let i = 0; i < 4; i++) {
    let outer = document.createElement("div");
    outer.id = `triangle${i}Border`;
    let inner = document.createElement("div");
    inner.id = `triangle${i}`;
    outer.appendChild(inner);
    allTriangles.push(outer);
}
let areTriangles = false;





//PAGE 7 - Cube  variables
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

let isCube = false;












function randomise(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}










//Takes actions based on scroll section
let options = {
    root: null,
    threshold: 0.6,
    rootMargin: "-100px -10px -100px -10px"
};
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        body.classList.remove(`${body.classList[1]}`);
        body.classList.add(`body${entry.target.id}`);
        bg.style.opacity = "0";
        setTimeout(() => {
            bg.classList.remove(`${bg.classList[1]}`);  
            bg.classList.add(`body${entry.target.id}`);
            bg.style.opacity = "1";
        }, 500);
        if (entry.target == one) {
           stopSnow();
           stopShine();
           stopLeaves();
           hideBubbles();
            hideRectangles();
            removeTriangles();
            removeCube();
        } else if (entry.target == two) {
            stopSnow();
            stopLeaves();
            enterRectangles();
            stopShine();
            hideBubbles();
            removeCube();
            removeTriangles();
        } else if (entry.target == three) {
            hideRectangles();
            enterBubbles();
            snow();
            stopLeaves();
            stopShine();
            removeCube();
            removeTriangles();
        } else if (entry.target == four) {
           stopSnow();
           hideRectangles();
            hideBubbles();
            removeCube();
            removeTriangles();
            stopLeaves();
            shine();
        } else if (entry.target == five) {
           stopSnow();
            leafFall();
            stopShine();
            removeCube();
            removeTriangles();
            hideBubbles();
            hideRectangles();
        } else if (entry.target == six) {
            stopLeaves();
            stopShine();
            stopSnow();
            hideBubbles();
            hideRectangles();
            enterTriangles();
            removeCube();
        } else {
            enterCube();
            stopLeaves();
            stopSnow();
            stopShine();
            hideBubbles();
            hideRectangles();
            removeTriangles();
        }
    })
}, options);
sections.forEach(section => {
    observer.observe(section);
});








//PAGE 1 effects
inverse = () => {
    heading.style.color = "black";
    heading.style.backgroundColor = "white";
    oneDiv.style.backgroundColor = "white";
    heading2.style.color = "black";
    heading2.style.backgroundColor = "white";
}











//page 2 effects
enterRectangles = () => {
    if (areRectangles == false) {
    rectangle0.style.animation = "rect0 0.5s ease-in 0.5s 1 both";
    rectangle1.style.animation = "rect1 0.5s ease-in 0.5s 1 both";
    rectangle2.style.animation = "rect2 0.5s ease-in 1s 1 both";
    two.appendChild(rectangle0);
    two.appendChild(rectangle1);
    two.appendChild(rectangle2);
    areRectangles = true;
    }
}
hideRectangles = () => {
    if (areRectangles) {
    rectangle0.style.animation = "rect0Out 0.5s ease-in 0.5s 1 both";
    rectangle1.style.animation = "rect1Out 0.5s ease-in 0.5s 1 both";
    rectangle2.style.animation = "rect2Out 0.5s ease-in 0s 1 both";
    removeRect = () => {
        rectangle0.remove();
        rectangle1.remove();
        rectangle2.remove();
    }
    setTimeout(removeRect, 1000);
    areRectangles = false;
}
}








//PAGE 3 effects
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
    flake.style.animation = `fall ${fallSpeed}s linear 1 both, rotate ${fallSpeed}s linear infinite`;
    body.appendChild(flake);
    flake.style.left = Math.floor(Math.random() * 100) + "vw";
    setTimeout(function () { body.removeChild(flake); }, 11000);
}
snow = () => {
    console.log("snow");
    if (isSnow == false) { console.log("snowIf");
    snowInterval = setInterval(createFlake, 300);
    isSnow = true;
    }
}
stopSnow = () => {
    if (isSnow == true) {
    clearInterval(snowInterval);
    snowInterval = 0;
    isSnow = false;
    }
}


enterBubbles = () => {
    if (areBubbles == false) {
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
    areBubbles = true;
}
}
hideBubbles = () => {
    if (areBubbles) {
    rotator = document.querySelectorAll(".rotator");
    for (let i = 0; i < rotator.length; i++) {
        rotator[i].style.animation = "riseOut 0.5s ease-in 1 forwards";
        removeBubble = () => { three.removeChild(rotator[i]) }
        setTimeout(removeBubble, 500);
    }
    areBubbles = false;
}
}







//PAGE 4 effects
createBeam = () => {
    const beam = document.createElement("div");
    beam.classList.add("beam");
    body.appendChild(beam);
    setTimeout(function () { body.removeChild(beam); }, 16000);
}
shine = () => {
    if (isSun == false) {
    const sun = document.createElement("div");
    sun.id = "sun";
    body.appendChild(sun);
    beamInterval = setInterval(createBeam, 2000);
    isSun = true;
    }
}

stopShine = () => {
    if (isSun) {
    sun.remove();
    clearInterval(beamInterval);
    beamInterval = 0;
    isSun = false;
    }
}








//Page 5 effects

createLeaf = () => {
    const leaf = document.createElement("div");
    let leafNo = randomise(2, 1);
    let whichLeaf = randomise(3, 1);
    let animation = "";
    leaf.style.backgroundSize = "cover";
    if (leafNo == 1) {
        leaf.style.backgroundSize = "1100%";
            animation = "leafbg1";
    } else if (leafNo == 2) {
        leaf.style.backgroundSize = "1100%";
    } else if (leafNo == 3) {
        leaf.style.backgroundSize = "1100%";
    } else if (leafNo == 4) {
        leaf.style.backgroundSize = "1100%";
    }
    let leafSize = randomise(41, 10);
    leaf.classList.add("leaf");
    let fallSpeed = randomise(11, 2);
    let direction = randomise(3, 1);
    if (direction == 2) {
        leaf.style.animation = `fallLeaves ${fallSpeed}s linear 1 both, ${animation} ${(fallSpeed / 3)}s steps(6) reverse infinite`;
    } else {
        leaf.style.animation = `fallLeaves ${fallSpeed}s linear 1 both, ${animation} ${(fallSpeed / 3)}s steps(6) infinite`;
    }
    leaf.style.backgroundImage = `url("img/leaf${leafNo}.png")`;
    leaf.style.width = `${leafSize}px`;
    leaf.style.height = `${leafSize}px`;
    body.appendChild(leaf);
    leaf.style.left = Math.floor(Math.random() * 100) + "vw";
    setTimeout(function () { body.removeChild(leaf); }, 11000);
}
leafFall = () => {
    if (areLeaves == false) {
    leafInterval = setInterval(createLeaf, 300);
    areLeaves = true;
    }
}
stopLeaves = () => {
    if (areLeaves) {
    clearInterval(leafInterval);
            leafInterval = 0;
            areLeaves = false;
    }
}






//PAGE 6 effects

enterTriangles = () => {
    if (areTriangles == false) {
    allTriangles[0].style.animation = "tri0a 0.8s ease-in 0s 1 both, tri0b 0.4s ease-in 0.8s 1 both";
    allTriangles[1].style.animation = "tri1a 0.8s ease-in 0.7s 1 both, tri1b 0.4s ease-in 1.5s 1 both";
    allTriangles[2].style.animation = "tri2a 0.5s ease-in 1.3s 1 both, tri2b 0.5s ease-in 1.8s 1 both";
    allTriangles[3].style.animation = "tri3a 0.8s ease-in 0.3s 1 both, tri3b 0.5s ease-in 1.1s 1 both";
    for (let i = 0; i < allTriangles.length; i++) {
        let tri = allTriangles[i];
        six.appendChild(tri);
    }
    areTriangles = true;
}
}
removeTriangles = () => {
    if (areTriangles == true) {
        allTriangles[0].style.animation = "tri0Out 0.8s ease-in 0s 1 backwards";
        allTriangles[1].style.animation = "tri1Out 0.8s ease-in 0.1s 1 backwards";
        allTriangles[2].style.animation = "tri2Out 0.5s ease-in 0.3s 1 backwards";
        allTriangles[3].style.animation = "tri3Out 0.8s ease-in 0.2s 1 backwards";
        setTimeout(() => {
            allTriangles.forEach((triangle, i) => {
                triangle.remove();
            })
        }, 2000)
        areTriangles = false;
    }
}







//PAGE 7 effects

enterCube = () => {
    console.log("enter");
  setTimeout(() => {
      if (isCube == false) {
        console.log("if");
    cube.style.animation = "spinCube 2s linear 1 forwards, growCube 2s linear 1 forwards, spinCubeFront 5s linear 2s infinite";
    stage.style.animation = "growCube 2s linear 1 forwards";
    front.style.animation = "growFront 2s linear forwards, growCube 2s linear 1 forwards";
    back.style.animation = "growBack 2s linear forwards, growCube 2s linear 1 forwards";
    left.style.animation = "growLeft 2s linear forwards, growCube 2s linear 1 forwards";
    right.style.animation = "growRight 2s linear forwards, growCube 2s linear 1 forwards";
    lid.style.animation = "growTop 2s linear forwards, growCube 2s linear 1 forwards";
    bottom.style.animation = "growBottom 2s linear forwards, growCube 2s linear 1 forwards";
    seven.appendChild(stage);
    isCube = true;
    }
  }, 2000);  
}




//click sides and rotate cube
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
    let backLink = document.createElement("a");
    backLink.href = "#one";
    backLink.innerHTML = "KESTER JONES<br>DESIGNS";
    backLink.style.color = "white";
    back.appendChild(backLink);
}
showRight = () => {
    cube.style.animation = "show-right 0.5s ease 0s forwards, spinCubeRight 5s ease 0.5s infinite";
    let rightLink = document.createElement("a");
    rightLink.href = "#five";
    rightLink.innerHTML = "RED PAGE";
    right.appendChild(rightLink);
}
showLeft = () => {
    cube.style.animation = "show-left 0.5s ease 0s forwards, spinCubeLeft 5s ease 0.5s infinite";
    let leftLink = document.createElement("a");
    leftLink.href = "#four";
    leftLink.innerHTML = "YELLOW PAGE";
    left.appendChild(leftLink);
}
showBottom = () => {
    cube.style.animation = "show-bottom 0.5s ease 0s forwards, spinCubeBottom 5s ease 0.5s infinite";
    let featuresLink = document.createElement("a");
    featuresLink.href = "#three";
    featuresLink.innerHTML = "FEATURES";
    bottom.appendChild(featuresLink);
}
showTop = () => {
    cube.style.animation = "show-top 0.5s ease 0s forwards, spinCubeTop 5s ease 0.5s infinite";
    let aboutLink = document.createElement("a");
    aboutLink.href = "#two";
    aboutLink.innerHTML = "ABOUT";
    lid.appendChild(aboutLink);
}
left.onclick = showLeft;
right.onclick = showRight;
bottom.onclick = showBottom;
lid.onclick = showTop;
back.onclick = showBack;
front.onclick = showFront;





removeCube = () => {
    console.log("exit");
    if (isCube == true) {
        console.log("ifExit");
    stage.style.animation = "shrinkCube 2s linear 1 both;";
    front.style.animation = "shrinkFront 2s linear forwards, shrinkCube 2s linear 1 forwards";
    back.style.animation = "shrinkBack 2s linear forwards, shrinkCube 2s linear 1 forwards";
    left.style.animation = "shrinkLeft 2s linear forwards, shrinkCube 2s linear 1 forwards";
    right.style.animation = "shrinkRight 2s linear forwards, shrinkCube 2s linear 1 forwards";
    lid.style.animation = "shrinkTop 2s linear forwards, shrinkCube 2s linear 1 forwards";
    bottom.style.animation = "shrinkBottom 2s linear forwards, shrinkCube 2s linear 1 forwards";
    cube.style.animation = "spinCubeOut 2s linear 1 reverse both, shrinkCube 2s linear 1 both";
    setTimeout(function() {stage.remove();}, 2000);
    isCube = false;
    }
}