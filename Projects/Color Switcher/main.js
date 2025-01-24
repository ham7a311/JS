


const el = document.querySelectorAll("#switcher li");
const classList = [];

for (let i = 0; i < el.length; i++) {
    classList.push(el[i].getAttribute("data-color"));

    el[i].addEventListener("click", function () {

        document.body.classList.remove(...classList);

        document.body.classList.add(this.getAttribute("data-color"));

        document.body.style.backgroundColor = document.body.classList;

        localStorage.setItem("pageColor", this.getAttribute("data-color"));


    }, false)
}

document.body.style.backgroundColor = localStorage.getItem("pageColor");
