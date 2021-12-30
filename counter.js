let count = 0;

let saved = 0;

let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("count-el");

function increment() {
    count += 1;
    countEl.textContent = count;
};

function reset() {
    count = 0;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}

let name = "Mehmet";
let greeting = 'Welcome Back ';
let myGreeting = greeting + name;

// console.log(myGreeting);

