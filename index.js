let homeText = document.getElementById("score-home")
let guestText = document.getElementById("score-guest")

let scoreHome = 0
let scoreGuest = 0


function home1() {
    scoreHome += 1
    homeText.textContent = scoreHome
} 

function home2() {
    scoreHome += 2
    homeText.textContent = scoreHome
} 

function home3() {
    scoreHome += 3
    homeText.textContent = scoreHome
} 

function guest1() {
    scoreGuest += 1
    guestText.textContent = scoreGuest
} 

function guest2() {
    scoreGuest += 2
    guestText.textContent = scoreGuest
} 

function guest3() {
    scoreGuest += 3
    guestText.textContent = scoreGuest
} 

function newGame() {
    scoreHome = 0
    scoreGuest = 0
    homeText.textContent = scoreHome
    guestText.textContent = scoreGuest
}