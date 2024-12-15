alert("welcome to snake, water, Gun game!!")
play = true;

while (play) {

    let choose = prompt("select snake, water or gun: ")
    let computer = ["snake", "water", "gun"][Math.floor(Math.random() * 3)]
    if (choose == computer) {
        alert("its a tie")
    } else if (choose == "snake") {
        if (computer == "water") {
            alert("snake drinks water, you win!!")
        } else {
            alert("gun shoots snake, you lose!!")
        }
    } else if (choose == "water") {
        if (computer == "snake") {
            alert("snake drinks water, you lose!!")
        } else {
            alert("water drowns gun, you win!!")
        }
    } else if (choose == "gun") {
        if (computer == "snake") {
            alert("gun shoots snake, you win!!")
        } else {
            alert("water drowns gun, you lose!!")
        }
    }
    else {
        alert("invalid input")
    }
    play = confirm("do you want to play again?")
}