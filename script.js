// Prevent default in the form //

const form = document.getElementById("calc-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});


// Locate the different tipe of keys in the calculator //

const numberKey = document.querySelectorAll("button[data-type=number]")
const operatorKey = document.querySelectorAll("button[data-type=operator]")
const clearKey = document.querySelector("button[data-clear]")
const screen = document.querySelector(".screen")


// Adding functionality to the number buttons //

numberKey.forEach((key) => {
    key.addEventListener("click", (event) => {
        if (screen.value == "0") {
            screen.value = event.target.value
        } else if (screen.value.includes(".")) {
            screen.value += event.target.value.replace(".", "")
        }
        else {
            screen.value += event.target.value
        }
    })
})


// Clear button functionality // 

clearKey.addEventListener("click", () => {
    screen.value = "0"
})

// Operator buttons functionality //

operatorKey.forEach((key) => {
    key.addEventListener("click", (event) => {
        switch (event.target.value) {
            case "invert":
                screen.value = parseFloat(screen.value)
                screen.value = screen.value * -1;
                break
            case "equal":
                logContainer.forEach((log) => {
                    let logContainer = document.querySelectorAll(".log-container")
                    let createLog = document.createElement("li")
                    createLog.textContent = screen.value
                    log.appendChild(createLog)
                    logContainer = document.querySelectorAll(".log-container")
                    createLog = document.createElement("li")
                    screen.value = eval(screen.value);
                    createLog.textContent = screen.value
                    log.appendChild(createLog)
                })
                break
            default:
                if (screen.value.includes("+")) {
                    screen.value += event.target.value.replace("+", "")
                }
                else if (screen.value.includes("-")) {
                    screen.value += event.target.value.replace("-", "")
                }
                else if (screen.value.includes("*")) {
                    screen.value += event.target.value.replace("*", "")
                }
                else if (screen.value.includes("/")) {
                    screen.value += event.target.value.replace("/", "")
                }
                else if (screen.value.includes("%")) {
                    screen.value += event.target.value.replace("%", "")
                }
                else { screen.value += event.target.value }
                break
        }
    })
})

// Log script //

let logContainer = document.querySelectorAll(".log-container")
let createLog = document.createElement("li")

// Dark mode implementation //

const dark = document.querySelector("#dark-mode-btn")
dark.addEventListener("click", () => {
    var element = document.body;
    element.classList.toggle("dark-mode")
    var element2 = document.querySelectorAll(".grid-container--btn")
    element2.forEach((el) => {
        el.classList.toggle("dark-mode")
    })
    var element3 = document.querySelector(".screen")
    element3.classList.toggle("dark-mode")
    var element4 = document.querySelector(".log")
    element4.classList.toggle("dark-mode")
})
