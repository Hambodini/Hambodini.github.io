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
const research1El = document.getElementById("u1")
const research2El = document.getElementById("u2")
const research3El = document.getElementById("u3")
const research4El = document.getElementById("u4")
const research5El = document.getElementById("u5")
const research6El = document.getElementById("u6")
const errorEl = document.getElementById("error")
//in-game tracking variables
var crumbCount = 0
var clicks = 0
var firstTimeClicked = true;
var clicksPerSecond = 0
//debt timer
display = document.querySelector('#time')
const debt = {
    gameOver: false,
    timesPaid: 0,
    amountDue: 100,
    expRate: .5,
    timerAmount: 60 * 2
}

const worker1 = {
    name: "Scavenger",
    number: 0,
    price: 10,
    cps: 1
}

const worker2 = {
    name: "Junior Scavenger",
    number: 0,
    price: 20,
    cps: 2
}

const worker3 = {
    name: "Intermediate Scavenger",
    number: 0,
    price: 30,
    cps: 3
}

const worker4 = {
    name: "Journeyman Scavenger",
    number: 0,
    price: 40,
    cps: 4
}

const worker5 = {
    name: "Veteran Scavenger",
    number: 0,
    price: 50,
    cps: 5
}
//research objects
//upgrade percent is .1 = +10% of worker tier cps
const research1 = {
    name: "Second Hand Tools",
    upgradePercent: .1,
    number: 0,
    price: 20
}
const research2 = {
    name: "Apprenticeship",
    upgradePercent: .2,
    number: 0,
    price: 30
}
const research3 = {
    name: "Custom Tooling",
    upgradePercent: .3,
    number: 0,
    price: 40
}
const research4 = {
    name: "Internship",
    upgradePercent: .4,
    number: 0,
    price: 50
}
const research5 = {
    name: "6th Sense Training",
    upgradePercent: .5,
    number: 0,
    price: 60
}
const research6 = {
    name: "Breaking Your Shackles",
    number: 0,
    price: 10000
}

//game functions
function buy(buttonID) {
    switch (buttonID) {
        //worker buttons
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

        //upgrade buttons
        case "u1":
            if (crumbCount >= research1.price) {
                research1.number += 1
                research1El.innerHTML = research1.name + " " + research1.number
                crumbCount -= research1.price
                worker1.cps = worker1.cps * (1 + research1.upgradePercent)
            } else {
                errorMsg("you cant afford that!")
            }

            break;

        case "u2":
            if (crumbCount >= research2.price) {
                research2.number += 1
                research2El.innerHTML = research2.name + " " + research2.number
                crumbCount -= research2.price
                worker2.cps = worker2.cps * (1 + research2.upgradePercent)
            } else {
                errorMsg("you cant afford that!")
            }

            break;

        case "u3":
            if (crumbCount >= research3.price) {
                research3.number += 1
                research3El.innerHTML = research3.name + " " + research3.number
                crumbCount -= research3.price
                worker3.cps = worker3.cps * (1 + research3.upgradePercent)
            } else {
                errorMsg("you cant afford that!")
            }

            break;

        case "u4":
            if (crumbCount >= research4.price) {
                research4.number += 1
                research4El.innerHTML = research4.name + " " + research4.number
                crumbCount -= research4.price
                worker4.cps = worker4.cps * (1 + research4.upgradePercent)
            } else {
                errorMsg("you cant afford that!")
            }

            break;

        case "u5":
            if (crumbCount >= research5.price) {
                research5.number += 1
                research5El.innerHTML = research5.name + " " + research5.number
                crumbCount -= research5.price
                worker5.cps = worker5.cps * (1 + research5.upgradePercent)
            } else {
                errorMsg("you cant afford that!")
            }

            break;

        case "u6":
            if (crumbCount >= research6.price) {
                research6.number += 1
                research6El.innerHTML = research6.name + " " + research6.number
                crumbCount -= research6.price
                //all workers go nuts since you win
                worker1.cps, worker2.cps, worker3.cps, worker4.cps, worker5.cps = 999
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
    if (firstTimeClicked == true) {
        startTimer(debt.timerAmount, display);
        firstTimeClicked = false;
    }
    crumbCount += 1
    clicks += 1
    crumbCountEl.innerHTML = "Crumbs: " + crumbCount.toFixed(2) + " &#92; " + debt.amountDue.toFixed(2)
    crumbCountPS.innerHTML = "Crumbs Per Second: " + clicks.toFixed(2)
}

//timer function from link below
//https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    debtTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Debt Timer: " + minutes + ":" + seconds;

        if (--timer < 0) {
            //what happens when debt timer is up
            crumbCount -= debt.amountDue
            if (crumbCount <= 0 && debt.gameOver == false) {
                window.alert("Your failed to pay the Baron on time.");
                location.reload()
            } if (research6.number >= 1) {
                window.alert("Your managed to pay the Baron completely off. welcome to endless mode until you refresh the page.");
                clearInterval(debtTimer)
            }
            debt.timesPaid += 1
            debt.amountDue = debt.amountDue * (debt.timesPaid + debt.expRate)
            timer = duration;
        }
    }, 1000);
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
    //ui updates
    crumbCountEl.innerHTML = "Crumbs: " + crumbCount.toFixed(2) + " &#92; " + debt.amountDue.toFixed(2)
    crumbCountPS.innerHTML = "Crumbs Per Second: " + clicks.toFixed(2)
    //reset clicks
    clicks = 0
}

//filling html in first time before loop
crumbCountEl.innerHTML = "Crumbs: " + crumbCount + " &#92; " + debt.amountDue
crumbCountPS.innerHTML = "Crumbs Per Second: " + clicks
display.innerHTML = "Debt Timer: 00:00"

//start of loop to update game
var scoreLoop = setInterval(scoreLoop, 1000);