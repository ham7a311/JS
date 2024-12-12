const number = document.querySelector(".number");
const buttons = document.querySelectorAll(".button");
let count = 0;

buttons.forEach(btn => {
    
    btn.addEventListener("click", function (e) {
        if (e.currentTarget.classList.contains("decrease")) {
            count--;
        } else if (e.currentTarget.classList.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count < 0) {
            number.style.color = "crimson";
        } else if (count > 0) {
            number.style.color = "seagreen";
        } else {
            number.style.color = "black";
        };

        number.textContent = count;
    })
})
