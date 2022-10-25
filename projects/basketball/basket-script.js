// Home Team section score counter

let homeScore = document.getElementById("home_score_el");
let homeCount = 0;

function addOneHome() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}
function addTwoHome() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}
function addThreeHome() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function resetHome() {
    homeCount = 0;

    homeScore.textContent = homeCount;
}

// Away Team section score counter

let awayScore = document.getElementById("away_score_el");
let awayCount = 0;

function addOne() {
    awayCount += 1;
    awayScore.textContent = awayCount;
}
function addTwo() {
    awayCount += 2;
    awayScore.textContent = awayCount;
}
function addThree() {
    awayCount += 3;
    awayScore.textContent = awayCount;
}

function resetAway() {
    awayCount = 0;
    awayScore.textContent = awayCount;
}
