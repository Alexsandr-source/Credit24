const changeLanguage = document.querySelectorAll('.btn-language');
const languageRu = document.querySelector('#languageRu');
const languageEn = document.querySelector('#languageEn');

// OUR SERVICES button //
// Set event handlers for buttons
languageRu.addEventListener('click', changesLanguage);
languageEn.addEventListener('click', changesLanguage);
// Function for updating the buttons
function changesLanguage() {
    for(var i = 0; i < changeLanguage.length; i++) {
        changeLanguage[i].classList.remove('active');
    }
    if (this.className === ('btn-language active')) {
        this.classList.remove('active')
    } else {
        this.classList.add('active');
    }
};

//PROMOTIONAL RATE
let daysLost = 0;
let hoursLost = 23;
let minutsLost = 59;
let secondsLost = 59;
setTimeout(setDays = setInterval(function() {
    if (daysLost == -1) {
        clearInterval(setDays);
    } else {
        document.querySelector('#daysLost').innerHTML = daysLost--;
    }
}, 86400000), 1000)

setTimeout(setHours = setInterval(function() {
    if (hoursLost == -1) {
        clearInterval(setHours);
    } else {
        document.querySelector('#hoursLost').innerHTML = hoursLost--;
    }
}, 3600000), 1000)

setTimeout(setMinuts = setInterval(function() {
    if (minutsLost == -1) {
        clearInterval(setMinuts);
    } else {
        document.querySelector('#minutsLost').innerHTML = minutsLost--;
    }
}, 60000), 1000)

const setSeconds = setInterval(function() {
    if (secondsLost == -1) {
        clearInterval(setSeconds);
    } else {
        document.querySelector('#secondsLost').innerHTML = secondsLost--;
    }
}, 1000)

