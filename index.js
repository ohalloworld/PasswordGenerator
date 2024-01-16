const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const passwordLength = document.getElementById("currentValue");
let finalPasswordLength = 12;
const anySymbols = document.getElementById("symbols");
const anyNumbers = document.getElementById("numbers");
const passwordOne = document.getElementById("passwordOne");
const passwordTwo = document.getElementById("passwordTwo");
let password = [];
let nextChar = "";
let nextIndex;

function getRandomIndex(length) {
    //get random index number for next password character
    return Math.floor(Math.random() * length);
}

function setPasswordLength(value) {
    //acquire and set the length of the password.
    finalPasswordLength = value;
    passwordLength.textContent = value;
}

function setPasswordType() {
    //acquire and set the type of the password (e.g. symbols, characters numbers etc..)
    if ((anyNumbers.checked === true) && (anySymbols.checked === true)) {
        return characters.concat(numbers, symbols);
    } else if ((anyNumbers.checked === true) && (anySymbols.checked === false)) {
        return characters.concat(numbers);
    } else if ((anyNumbers.checked === false) && (anySymbols.checked === true)) {
        return characters.concat(symbols);
    } else {
        return characters;
    }
}

function createPassword(array) {
    password = [];

    for (let i = 0; i < finalPasswordLength; i++) {
        nextIndex = getRandomIndex(array.length);
        nextChar = array[nextIndex];
        password.push(nextChar);
    }

    return password.join("");
}

function newPassword() {
    //generate a random new password.
    let passwordBase = setPasswordType();

    passwordOne.value = createPassword(passwordBase);
    passwordTwo.value = createPassword(passwordBase);
}


function copyOnClick(clicked_id) {
    let copyText;
    
    if (clicked_id === "pwOne") {
        copyText = document.getElementById("passwordOne");
    } else {
        copyText = document.getElementById("passwordTwo");
    }

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
}