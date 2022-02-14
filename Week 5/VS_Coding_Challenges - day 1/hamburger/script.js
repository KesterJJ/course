const btn = document.getElementById("btn");
const nav = document.getElementById("nav");


toggleMenu = () => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
}
btn.addEventListener("click", toggleMenu);