//on page elements
const workerTabEl = document.getElementById("tab1");
const researchTabEl = document.getElementById("tab2");
const crumbCountEl = document.getElementById('crumbCount')
const crumbCountPS = document.getElementById('crumbCountPS')
const worker1El = document.getElementById("w1")
const worker2El = document.getElementById("w2")
const worker3El = document.getElementById("w3")
const worker4El = document.getElementById("w4")
const worker5El = document.getElementById("w5")
const errorEl = document.getElementById("error")
//in-game tracking variables
var crumbCount = 0
var clicks = 0
var clicksPerSecond = 0
const debt = {
    timesPaid: 0,
    amountDue: 100
}

const worker1 = {
    name: "Scavenger",
    number: 0,
    price: 0,
    cps: 2
}

const worker2 = {
    name: "Junior Scavenger",
    number: 0,
    price: 0,
    cps: 2
}

const worker3 = {
    name: "Intermediate Scavenger",
    number: 0,
    price: 0,
    cps: 2
}

const worker4 = {
    name: "Journeyman Scavenger",
    number: 0,
    price: 0,
    cps: 2
}

const worker5 = {
    name: "Veteran Scavenger",
    number: 0,
    price: 0,
    cps: 2
}

const research1 = {
    name: "Second Hand Tools",
    number: 0,
    price: 0
}

//game functions
function buy(buttonID) {
    switch (buttonID) {
        case "w1":
            if (crumbCount >= worker1.price) {
                worker1.number += 1
                worker1El.innerHTML = worker1.name + " " + worker1.number
                crumbCount -= worker1.price
            } else {
                errorMsg("you cant afford that!")
            }

            break;

        case "w2":
            if (crumbCount >= worker2.price) {
                worker2.number += 1
                worker2El.innerHTML = worker2.name + " " + worker2.number
                crumbCount -= worker2.price
            } else {
                errorMsg("you cant afford that!")
            }

            break;

        case "w3":
            if (crumbCount >= worker3.price) {
                worker3.number += 1
                worker3El.innerHTML = worker3.name + " " + worker3.number
                crumbCount -= worker3.price
            } else {
                errorMsg("you cant afford that!")
            }

            break;

        case "w4":
            if (crumbCount >= worker4.price) {
                worker4.number += 1
                worker4El.innerHTML = worker4.name + " " + worker4.number
                crumbCount -= worker4.price
            } else {
                errorMsg("you cant afford that!")
            }

            break;

        case "w5":
            if (crumbCount >= worker5.price) {
                worker5.number += 1
                worker5El.innerHTML = worker5.name + " " + worker5.number
                crumbCount -= worker5.price
            } else {
                errorMsg("you cant afford that!")
            }

            break;

        default:
            break;
    }
}

function errorMsg(message) {
    if (errorEl.innerHTML == "") {
        errorEl.innerHTML = message
    }
    timesRan = 0
    errorClearTimer = setInterval(function () {
        timesRan += 1
        if (timesRan == 1) {
            errorEl.innerHTML = ""
            clearInterval(errorClearTimer)
        }
    }, 2000)
}

function WorkerTabSelect() {
    workerTabEl.style.display = "inline-block"
    researchTabEl.style.display = "none"
}

function ResearchTabSelect() {
    workerTabEl.style.display = "none"
    researchTabEl.style.display = "inline-block"
}

function cookieClick() {
    crumbCount += 1
    clicks += 1
    //want to show player added clicks as soon as done
    crumbCountEl.innerHTML = "Crumbs: " + crumbCount
}

function scoreLoop() {
    //calc autoclicks
    if (worker1.number > 0) {
        clicks += worker1.cps * worker1.number
        crumbCount += worker1.cps * worker1.number
    }
    if (worker2.number > 0) {
        clicks += worker2.cps * worker2.number
        crumbCount += worker2.cps * worker2.number
    }
    if (worker3.number > 0) {
        clicks += worker3.cps * worker3.number
        crumbCount += worker3.cps * worker3.number
    }
    if (worker4.number > 0) {
        clicks += worker4.cps * worker4.number
        crumbCount += worker4.cps * worker4.number
    }
    if (worker5.number > 0) {
        clicks += worker5.cps * worker5.number
        crumbCount += worker5.cps * worker5.number
    }
    //calc amount due
    //ui updates
    crumbCountEl.innerHTML = "Crumbs: " + crumbCount
    crumbCountPS.innerHTML = "Crumbs Per Second: " + clicks
    //reset clicks
    clicks = 0
}
//filling html in
crumbCountEl.innerHTML = "Crumbs: " + crumbCount + " / " + debt.amountDue
crumbCountPS.innerHTML = "Crumbs Per Second: " + clicks
//start of loop to update game
var scoreLoop = setInterval(scoreLoop, 1000);

