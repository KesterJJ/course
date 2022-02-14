const btn = document.getElementById("btn");
const body = document.getElementById("body");
const box = document.createElement("div");
const msg = document.createElement("p");
const closeBtn = document.createElement("button");



openprompt = () => {
closeBtn.innerHTML = "X";
closeBtn.onclick = "closePrompt()";
closeBtn.classList.add("close");
msg.innerHTML = "You have won";
box.appendChild(msg);
body.appendChild(box);
box.appendChild(closeBtn);

}
closePrompt = () => {
    body.removeChild(box);
}