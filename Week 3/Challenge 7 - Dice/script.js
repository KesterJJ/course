play = () => {
    let dice1 = document.getElementsByClassName("img1")[0];
    let dice2 = document.getElementsByClassName("img2")[0];
    let winner = document.getElementById("winner");
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    dice1.src = `images/dice${num1}.png`;
    dice2.src = `images/dice${num2}.png`;
    if (num1 > num2) {
        winner.innerHTML = "Player 1 wins!"
    } else if (num1 < num2) {
        winner.innerHTML = "Player 2 wins!"
    } else {
        winner.innerHTML = "Draw!"
    }
}


document.addEventListener('load', play());