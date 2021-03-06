const formControl = document.querySelectorAll(".vg-contact-form .form-control");
const btn = document.querySelector(".btn-contact");
const success = document.querySelector(".success");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const regx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function isEnable(element) {
    if (element.value.trim() !== "" && element.value.trim().length > 3) {
        if (regx.test(emailInput.value)) {
            if (messageInput.value.trim().length > 3) {
                btn.removeAttribute("disabled");
                btn.style.backgroundColor = "green";
            }
        }
    } else {
        btn.setAttribute("disabled", "disabled");
        btn.style.backgroundColor = "#F04936";
    }
}


formControl.forEach(element => {
    element.addEventListener("input", () => {
        isCorrect(element, element.parentElement.children[1], element.parentElement.children[2], element.parentElement.children[3]);
        isEnable(element);
    })
})

btn.addEventListener("submit", (e) => {
    e.preventDefault();
    success.innerHTML = "Your message sent. Thank you."

})

function isCorrect(elem, cross, check, small) {
    if (elem.value.trim() === "") {
        fillerror(cross, check, small, elem);
    } else if (elem.value.trim().length <= 3) {
        fillerror(cross, check, small, elem);
        small.innerText = "Characters Should br more than 3"
    } else if (elem.placeholder === "Email Address") {
        if (regx.test(elem.value)) {
            fill(cross, check, small, elem);
        } else {
            fillerror(cross, check, small, elem);
            small.innerText = "Please enter valid email";
        }

    } else {
        fill(cross, check, small, elem);
    }
}

function fillerror(cross, check, small, elem) {
    cross.style.display = "flex";
    cross.style.color = "red";
    cross.style.background = "transparent";
    small.style.display = "block";
    small.style.color = "red";
    elem.style.border = "3px solid red";

}

function fill(cross, check, small, elem) {
    check.style.display = "flex";
    check.style.color = "green";
    check.style.background = "transparent";
    cross.style.display = "none";
    small.style.display = "none";
    elem.style.border = "3px solid green";
}