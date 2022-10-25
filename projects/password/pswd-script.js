const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

let passwordOneEl = document.getElementById("passwordOne_el");
let passwordTwoEl = document.getElementById("passwordTwo_el");
let passwordLength = 15;
let chars = characters;

// const = Characters.
// Generate two random passwords when the user clicks a button.
// Each pasword should be 15 characters long
function generatePasswords() {
    randomOne();
    randomTwo();
}

function randomOne() {
    let password1 = "";
    for (var i = 0; i <= passwordLength; i++) {
        password1 += chars[Math.floor(Math.random() * chars.length)];
    }
    password1 = password1;
    passwordOneEl.textContent = password1;
}

function randomTwo() {
    let password2 = "";
    for (var i = 0; i <= passwordLength; i++) {
        password2 += chars[Math.floor(Math.random() * chars.length)];
    }
    password2 = password2;
    passwordTwoEl.textContent = password2;
}
