const changeLanguage = document.querySelectorAll('.btn-language');
const languageRu = document.querySelector('#languageRu');
const languageEn = document.querySelector('#languageEn');
let daysLost = new Date().getDate();
let hoursLost = new Date().getHours();
let minutsLost = new Date().getMinutes();
let secondsLost = new Date().getSeconds();

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
const setDays = setInterval(function seconds() {
    if (daysLost == -1) {
        clearInterval(daysLost);
    } else {
        document.querySelector('#daysLost').innerHTML = daysLost--;
    }
}, 86400000)

const setHours = setInterval(function seconds() {
    if (hoursLost == -1) {
        clearInterval(hoursLost);
    } else {
        document.querySelector('#hoursLost').innerHTML = hoursLost--;
    }
}, 3600000)

const setMinuts = setInterval(function seconds() {
    if (minutsLost == -1) {
        clearInterval(minutsLost);
    } else {
        document.querySelector('#minutsLost').innerHTML = minutsLost--;
    }
}, 60000)

const setSeconds = setInterval(function seconds() {
    if (secondsLost == -1) {
        clearInterval(setSeconds);
    } else {
        document.querySelector('#secondsLost').innerHTML = secondsLost--;
    }
}, 1000)

