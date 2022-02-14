const btn = document.getElementById("btn");
const msg = document.getElementById("msg");



btn.addEventListener('click', toasty);

function toasty() {
  const toast = document.createElement('p');
  toast.innerHTML = "You have toast";
 msg.appendChild(toast);
 setTimeout( () => {msg.removeChild(toast)}, 3000);
}
