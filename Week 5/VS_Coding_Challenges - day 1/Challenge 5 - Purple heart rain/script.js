const body = document.getElementById("body");

createHeart = () => {
const heart = document.createElement("div");
heart.innerText = "💜";
heart.classList.add("heart");
body.appendChild(heart);

heart.style.left = Math.floor(Math.random() * 100) + "vw";
setTimeout(function() {body.removeChild(heart);}, 5000);
}

setInterval(createHeart, 300);