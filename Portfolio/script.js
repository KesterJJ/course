//General variables
const sections = document.querySelectorAll("section");
const container = document.getElementById("container");
const body = document.getElementById("body");
const bg = document.getElementById("bg");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const evening = document.querySelector("#evening");
const night = document.querySelector("#night");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const heading = document.createElement("h2");
const menu = document.getElementById("menu");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const nav = document.querySelector("#nav");
const linkNames = ["TOP", "ABOUT", "FEATURES", "DESIGNS", "ANIMATIONS", "WEBSITES", "CONTACT"];
const pageNumbers = ["one", "two", "three", "four", "five", "six", "seven"];
const allLinks = [];

for (let i = 0; i < 7; i++) {
    let link = document.createElement("a");
    let button = document.createElement("button");
    button.innerHTML = linkNames[i];
    link.classList.add("links");
    button.classList.add("linkButton");
    link.appendChild(button);
    link.href = `#${pageNumbers[i]}`;
 
    allLinks.push(link);
}


body.appendChild(heading);
heading.style.opacity = "0";





//PAGE 1 VARIABLES
const logo = document.getElementById("logo");
const oneDiv = document.getElementById("oneDiv");
const dye = document.getElementById("dye");
const homeLink = document.getElementById("homeLink");
let isInversed = false;











// PAGE 2 - RECTANGLE VARIABLES
const rectangle0 = document.createElement("div");
const rectangle1 = document.createElement("div");
const rectangle2 = document.createElement("div");
rectangle0.id = "rectangle0";
rectangle1.id = "rectangle1";
rectangle2.id = "rectangle2";
const aboutHead = document.createElement("h2");
const about = document.createElement("p");
aboutHead.innerHTML = "ABOUT";
about.innerHTML = "Developer, designer, and problem solver."
rectangle2.appendChild(aboutHead);
rectangle2.appendChild(about);
//adds content for rectangles
rectangle0.innerHTML = `<div style="height: 50%; width: 100%"></div><div style="height: 50%; width: 100%;"><h3>Languages/Frameworks/Libraries</h3><ul><li>HTML</li><li>CSS</li><li>Bootstrap</li><li>JavaScript</li><li>jQuery</li><li>JSON</li><li>NodeJS</li><li>React.JS</li><li>PHP</li><li>SQL</li></ul></div>`;
rectangle1.innerHTML = `<div style="height: 50%; width: 100%"></div><div style="height: 50%; width: 100%;"><h3>Skills</h3><ul><li>SEO</li><li>Responsive design</li><li>APIs</li><li>Full stack develepment</li></ul></div>`;
let areRectangles = false;












//PAGE 3 VARIABLES
//creates rotators for bubbles
let snowInterval = 0;
const allBubbles = [];
const URL = ["https://kesterjj.github.io/tip-calculator/", "https://kesterjj.github.io/lolcat-clock/", "https://kesterjj.github.io/numberizor/", "https://kesterjj.github.io/password-creator/"];
var projectOpen = false;
var project1;
var image1;
var obj1;
var obj = document.createElement("object");
obj.type = "text/html";
obj.appendChild(document.createElement("div"));

runProject = (project, image, URL, i) => {
    if (projectOpen == true) {
        closeProject(project1, image1, obj1);
    }
    project.style.width = "80vh";
    project.style.height = "80vh";
    project.style.zIndex = "6";
    obj.data = URL;
    project.style.animation = ``;
    obj.style.animation = ``;
    obj.style.position = "relative";
    project.removeChild(image);
    project.appendChild(obj);
    projectOpen = true;
    project1 = project;
    image1 = image;
    obj1 = obj;
}

closeProject = (project1, image1, obj1) => {
    let floatLength = randomise(15, 4);
    project1.style.width = "30vh";
    project1.style.height = "30vh";
    project1.style.zIndex = "1";
    project1.style.animation = `float ${floatLength}s linear infinite`;
    image1.style.animation = `antifloat ${floatLength}s linear infinite`;
    project1.removeChild(obj1);
    project1.appendChild(image1);
    projectOpen = false;

}

for (let i = 0; i < 6; i++) {
    let outer = document.createElement("div");
    outer.classList.add("rotator");
    outer.id = `rotator${i}`;
    let mid = document.createElement("div");
    mid.classList.add(`bubble${i}`);
    mid.addEventListener("click", function () { runProject(outer, mid, URL[i], i) });
    mid.appendChild(document.createElement("div"));
    outer.appendChild(mid);
    allBubbles.push(outer);
}
let areBubbles = false;











//PAGE 4 VARIABLES
let isSun = false
const timeShift = document.getElementById("timeShift");




//night variables
let moon = document.createElement("div");
moon.id = "moon";
let isMoon = false;








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
const cubeDiv = document.getElementById("cubeDiv");
let stage = document.createElement("div");
stage.classList.add("stage");
let cube = document.createElement("div");
cube.id = "cube";
stage.appendChild(cube);
let front = document.createElement("div");
front.classList.add("face");
front.id = "front";
let frontLink = document.createElement("a");
frontLink.href = "#one";
let img = document.createElement("img");
img.src = "img/logo-white.png"
img.style.width = "100%"
frontLink.style.width = "50%";
frontLink.appendChild(img);
front.appendChild(frontLink);


let back = document.createElement("div");
back.classList.add("face");
back.id = "back";
let backLink = document.createElement("a");
backLink.href = "#six";
backLink.innerHTML = "WEBSITES";
back.appendChild(backLink);

let left = document.createElement("div");
left.classList.add("face");
left.id = "left";
let leftLink = document.createElement("a");
leftLink.href = "#four";
leftLink.innerHTML = "DESIGNS";
left.appendChild(leftLink);

let right = document.createElement("div");
right.classList.add("face");
right.id = "right";
let rightLink = document.createElement("a");
rightLink.href = "#five";
rightLink.innerHTML = "ANIMATIONS";
right.appendChild(rightLink);

let lid = document.createElement("div");
lid.classList.add("face");
lid.id = "top";
let topLink = document.createElement("a");
topLink.href = "#two";
topLink.innerHTML = "ABOUT";
lid.appendChild(topLink);

let bottom = document.createElement("div");
bottom.classList.add("face");
bottom.id = "bottom";
let bottomLink = document.createElement("a");
bottomLink.href = "#three";
bottomLink.innerHTML = "FEATURES";
bottom.appendChild(bottomLink);

let links = [frontLink, backLink, topLink, bottomLink, leftLink, rightLink];
cube.appendChild(front);
cube.appendChild(back);
cube.appendChild(left);
cube.appendChild(right);
cube.appendChild(bottom);
cube.appendChild(lid);

let isCube = false;








//form variables

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;
const number = document.getElementById("number").value;
const submit = document.getElementById("submit").value;













function randomise(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}










//Takes actions based on scroll section
let options = {
    root: null,
    threshold: 0.95,
    rootMargin: "-5px -5px -5px -5px"
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
            stopShine();
            stopLeaves();
            removeBubbles();
            removeRectangles();
            removeTriangles();
            removeCube();
            reverseInverse();
            removeMoon();
        } else if (entry.target == two) {
            inverse();
            stopLeaves();
            enterRectangles();
            stopShine();
            removeBubbles();
            removeCube();
            removeTriangles();
            removeMoon();
        } else if (entry.target == three) {
            inverse();
            removeRectangles();
            enterBubbles();
            stopLeaves();
            stopShine();
            removeCube();
            removeTriangles();
            removeMoon();
        } else if (entry.target == four) {
            inverse();
            removeRectangles();
            removeBubbles();
            removeCube();
            removeTriangles();
            stopLeaves();
            shine();
            removeMoon();
        } else if (entry.target == evening) {
            stopShine();
            inverse();
            removeRectangles();
            removeBubbles();
            removeTriangles();
            stopLeaves();
            removeCube();
            removeMoon();
        } else if (entry.target == night) {
            inverse();
            removeRectangles();
            removeBubbles();
            removeCube();
            removeTriangles();
            stopLeaves();
            stopShine();
            enterMoon();
        } else if (entry.target == five) {
            removeMoon();
            inverse();
            leafFall();
            stopShine();
            removeCube();
            removeTriangles();
            removeBubbles();
            removeRectangles();
        } else if (entry.target == six) {
            inverse();
            stopLeaves();
            stopShine();
            removeBubbles();
            removeRectangles();
            enterTriangles();
            removeCube();
            removeMoon();
        } else {
            inverse();
            enterCube();
            stopLeaves();
            stopShine();
            removeBubbles();
            removeRectangles();
            removeTriangles();
            removeMoon();
        }


    })
}, options);
sections.forEach(section => {
    observer.observe(section);
});






//NAVEGATION

let menuIsOpen = false;
toggleBurger = () => {
    line1.classList.toggle("uncross1");
    line1.classList.toggle("cross1");
    line2.classList.toggle("uncross2");
    line2.classList.toggle("cross2");
    line3.classList.toggle("uncross3");
    line3.classList.toggle("cross3");
}
openMenu = (n) => {
    if (n < allLinks.length) {
    nav.appendChild(allLinks[n]);
    n++;
 setTimeout(function() {openMenu(n);}, 100);
} else {
    menuIsOpen = true;
return
}

}
closeMenu = (n) => {
    console.log("close");
    if (n > 0) {
        nav.removeChild(allLinks[n - 1]);
                n--;
        console.log(n);
     setTimeout(function() {closeMenu(n);}, 60);
    } else {
        menuIsOpen = false;
    return
    }
}
toggleMenu = () => {
    toggleBurger();
    nav.classList.toggle("navOpen");
    nav.classList.toggle("navClose");
    if(menuIsOpen == false) {
    setTimeout(function() {openMenu(0);}, 300); 
    } else {
        closeMenu(allLinks.length);
    }

}








//PAGE 1 effects
inverse = () => {
    if (isInversed == false) {
        //  logo.src = "img/logo-black.png";
        //  oneDiv.style.backgroundColor = "white";
        oneDiv.style.mixBlendMode = "lighten";
        homeLink.style.pointerEvents = "all";
        setTimeout(function () {
            oneDiv.style.height = "20vh";
            oneDiv.style.width = "20vh";
            logo.style.height = "20vh";
            logo.style.width = "20vh";
            oneDiv.style.top = "78vh";
            oneDiv.style.left = "2vh";
        }, 500);
        setTimeout(function () {
            dye.remove();
            oneDiv.style.mixBlendMode = "overlay";
            oneDiv.style.borderRadius = "50%";
        }, 1500);
        isInversed = true;
    }
}

reverseInverse = () => {
    if (isInversed == true) {
        homeLink.style.pointerEvents = "none";
        logo.src = "img/logo-white.png";
        oneDiv.style.backgroundColor = "black";
        oneDiv.style.height = "100vh";
        oneDiv.style.width = "100vw";
        oneDiv.style.borderRadius = "0px";
        logo.style.height = "80vh";
        logo.style.width = "80vh";
        oneDiv.style.top = "0vh";
        oneDiv.style.left = "0vh";
        dye.autoplay = true;
        dye.load();
        one.appendChild(dye);
        isInversed = false;
        heading.style.opacity = "0";
    }
}









//page 2 effects
enterRectangles = () => {
    if (areRectangles == false) {
        rectangle0.style.animation = "rect0 0.5s ease-in 1s 1 both";
        rectangle1.style.animation = "rect1 0.5s ease-in 1s 1 both";
        rectangle2.style.animation = "rect2 0.5s ease-in 1.5s 1 both";
        two.appendChild(rectangle0);
        two.appendChild(rectangle1);
        two.appendChild(rectangle2);
        areRectangles = true;
        heading.style.opacity = "0";
    }
}
removeRectangles = () => {
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
        snowInterval = setInterval(createFlake, 300);
}
stopSnow = () => {
        clearInterval(snowInterval);
        snowInterval = 0;
}


enterBubbles = () => {
    if (areBubbles == false) {
        snow();
        setTimeout(function () {
            heading.style.opacity = "1";
            heading.innerHTML = "FEATURES";
        }, 500);
        for (let i = 0; i < allBubbles.length; i++) {
            let bub = allBubbles[i];
            three.appendChild(bub);
            let floatLength = randomise(15, 4);
            bub.style.animation = `riseIn 0.5s ease-out 1s 1 both, float ${floatLength}s linear infinite`;
            let bubble = document.querySelector(`.bubble${i}`);
            bubble.style.animation = `antifloat ${floatLength}s linear infinite`;
        }
        bub4 = document.querySelector(".bubble4");
        bub4.innerHTML = "<div>Click the bubbles!</div>"
        areBubbles = true;
    }
}
removeBubbles = () => {
    if (areBubbles) {
        stopSnow();
        heading.style.opacity = "0";
        if (projectOpen == true) {
            closeProject(project1, image1, obj1);
        }
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
    const beam = document.createElement("object");
    beam.classList.add("beam");
    body.appendChild(beam);
    setTimeout(function () { body.removeChild(beam); }, 16000);
}
shine = () => {
    if (isSun == false) {
        changeScroll();
        const sun = document.createElement("object");
        sun.id = "sun";
        body.appendChild(sun);
        beamInterval = setInterval(createBeam, 2000);
        isSun = true;
    }
}

stopShine = () => {
    if (isSun) {
        sun.style.opacity = "0";
        clearInterval(beamInterval);
        beamInterval = 0;
        setTimeout(function () { sun.remove(); }, 500);
        isSun = false;
    }
}



let scrollingSideways = false;
let scrollListener;
scrollSideways = (evt) => {
    evt.preventDefault();
    timeShift.scrollLeft += evt.deltaY;
    scrollingSideways = true;
}
changeScroll = () => {
    if (scrollingSideways == false) {
        scrollListener = timeShift.addEventListener("wheel", scrollSideways);
        setTimeout(function () {
            heading.style.opacity = "1";
            heading.innerHTML = "DESIGNS";
        }, 500);
    } else if (scrollingSideways == true) {
        timeShift.removeEventListener("wheel", scrollSideways);
        scrollingSideways = false;
        heading.style.opacity = "0";
    }

};




//NIGHT EFFECTS
createStars = () => {
    for (i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        let shineSpeed = randomise(6, 1);
        let left = randomise(101, 0);
        let top = randomise(101, 0);
        let blur = randomise(5, 0);
        star.style.left = `${left}vw`;
        star.style.top = `${top}vh`;
        star.style.boxShadow = `0px 0px ${(blur * 4)}px ${blur}px white`;
        star.style.animation = `enterStars 1s linear 1s 1 both, twinkle ${shineSpeed}s linear alternate infinite`;
        body.appendChild(star);
    }
}
enterMoon = () => {
    if (isMoon == false) {
        createStars();
        changeScroll();
        for (let i = 0; i < 5; i++) {
            let crater = document.createElement("div");
            crater.classList.add("crater");
            crater.id = `crater${i}`;
            moon.appendChild(crater);
        }
        moon.style.animation = `enterStars 1s linear 1 both`;
        body.appendChild(moon);
        isMoon = true;
        heading.style.opacity = "1";
        heading.innerHTML = "DESIGNS";
    }
}

removeStars = () => {
    let stars = document.querySelectorAll(".star");
    stars.forEach(entry => {entry.style.animation = `exitStars 1s linear 1 both`;
      setTimeout(function() {entry.remove();
}, 500);  
    });
}
removeMoon = () => {
    if (isMoon) {
        removeStars();
        moon.style.animation = `exitStars 1s linear 1 both`;
        setTimeout(function() {moon.remove();}, 500);
        isMoon = false;
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
        setTimeout(function () {
            heading.style.opacity = "1";
            heading.innerHTML = "ANIMATIONS";
        }, 500);
    }
}
stopLeaves = () => {
    if (areLeaves) {
        heading.style.opacity = "0";
        clearInterval(leafInterval);
        leafInterval = 0;
        areLeaves = false;
    }
}






//PAGE 6 effects

enterTriangles = () => {
    if (areTriangles == false) {
        setTimeout(function () {
            heading.style.opacity = "1";
            heading.innerHTML = "WEBSITES";
        }, 500);
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
        heading.style.opacity = "0";
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
    if (isCube == false) {
        cube.style.animation = "spinCube 2s linear 1 forwards, growCube 2s linear 1 forwards, spinCubeFront 5s linear 2s infinite";
        stage.style.animation = "growCube 2s linear 1 forwards";
        front.style.animation = "growFront 2s linear forwards, growCube 2s linear 1 forwards";
        back.style.animation = "growBack 2s linear forwards, growCube 2s linear 1 forwards";
        left.style.animation = "growLeft 2s linear forwards, growCube 2s linear 1 forwards";
        right.style.animation = "growRight 2s linear forwards, growCube 2s linear 1 forwards";
        lid.style.animation = "growTop 2s linear forwards, growCube 2s linear 1 forwards";
        bottom.style.animation = "growBottom 2s linear forwards, growCube 2s linear 1 forwards";
        links.forEach(entry => { entry.style.animation = "growLinks 2s linear both" });
        cubeDiv.appendChild(stage);
        isCube = true;
    }

}




//click sides and rotate cube
showFront = () => {
    cube.style.transform = "translateZ(-100px) rotateY(-180deg)";
    cube.style.animation = "show-front 0.5s ease 0s forwards, spinCubeFront 5s ease 0.5s infinite";
}

showBack = () => {
    cube.style.transform = "translateZ(-100px) rotateY(0deg)";
    cube.style.animation = "show-back 0.5s ease 0s forwards, spinCubeBack 5s ease 0.5s infinite";
}
showRight = () => { cube.style.animation = "show-right 0.5s ease 0s forwards, spinCubeRight 5s ease 0.5s infinite"; }
showLeft = () => { cube.style.animation = "show-left 0.5s ease 0s forwards, spinCubeLeft 5s ease 0.5s infinite"; }
showBottom = () => { cube.style.animation = "show-bottom 0.5s ease 0s forwards, spinCubeBottom 5s ease 0.5s infinite"; }
showTop = () => { cube.style.animation = "show-top 0.5s ease 0s forwards, spinCubeTop 5s ease 0.5s infinite"; }
left.onclick = showLeft;
right.onclick = showRight;
bottom.onclick = showBottom;
lid.onclick = showTop;
back.onclick = showBack;
front.onclick = showFront;





removeCube = () => {
    if (isCube == true) {
        stage.style.animation = "shrinkCube 2s linear 1 both";
        front.style.animation = "shrinkFront 2s linear forwards, shrinkCube 2s linear 1 forwards";
        back.style.animation = "shrinkBack 2s linear forwards, shrinkCube 2s linear 1 forwards";
        left.style.animation = "shrinkLeft 2s linear forwards, shrinkCube 2s linear 1 forwards";
        right.style.animation = "shrinkRight 2s linear forwards, shrinkCube 2s linear 1 forwards";
        lid.style.animation = "shrinkTop 2s linear forwards, shrinkCube 2s linear 1 forwards";
        bottom.style.animation = "shrinkBottom 2s linear forwards, shrinkCube 2s linear 1 forwards";
        cube.style.animation = "spinCubeOut 2s linear 1 reverse both, shrinkCube 2s linear 1 both";
        links.forEach(entry => { entry.style.animation = "shrinkLinks 2s linear both" });
        setTimeout(function () { stage.remove(); }, 2000);
        isCube = false;
    }
}







(function () {
    emailjs.init("PiLWEOIMlnpLyoNQo");
})();

function sendEmail() {
    emailjs.sendForm('default_service', 'email1', '#form')
        .then(function (response) {
            alert('SUCCESS!', response.status, response.text);
        }, function (error) {
            alert('FAILED...', error);
        });
}

