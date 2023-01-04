let homeCount = 0
let guestCount = 0
let homeScore1 = document.getElementById("homeScore") 
let guestScore1 = document.getElementById("guestScore")

function hadd1(){
        homeCount += 1
    homeScore1.textContent = homeCount
}
function hadd2(){
        homeCount += 2
    homeScore1.textContent = homeCount
}
function hadd3(){
        homeCount += 3
    homeScore1.textContent = homeCount
}
function gadd1(){
        guestCount += 1
    guestScore1.textContent = guestCount
}
function gadd2(){
        guestCount += 2
    guestScore1.textContent = guestCount
}
function gadd3(){
        guestCount += 3
    guestScore1.textContent = guestCount
}