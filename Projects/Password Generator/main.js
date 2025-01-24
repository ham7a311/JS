


const btn = document.querySelector(".generate-pass-btn");
const input = document.querySelector(".pass-input");
const all = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$";
const power = document.querySelector(".power");
const copyBtn = document.querySelector(".copy-btn");

btn.addEventListener("click", function () {
    let password = "";
    for (let i = 0; i <= 8; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    };

    input.value = password;

    let point = 0;
    let value = input.value;
    let widthPower =
        ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
    let colorPower =
        ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

    if (value.length >= 6) {
        let arrayTest =
            [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            };
        });
    };
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];

    power.textContent = widthPower[point];

    copyBtn.addEventListener("click", function () {
        if (input.length !== 0) {
            copyBtn.classList.add("text-green-700");

            input.select();
            navigator.clipboard.writeText(input.value);
        };
    
    });

    copyBtn.classList.remove("text-green-700")

});
