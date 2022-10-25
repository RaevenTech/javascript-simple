let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}
function decrement() {
    count = count - 1;
    countEl.textContent = count;
}

const reset = () => {
    count = 0;
    saveEl.textContent = "Previous entries: ";
};

function save() {
    let countValue = count + " - ";
    saveEl.textContent += countValue;
    count = 0;
    countEl.textContent = 0;
    console.log(count);
}
