const changeLanguage = document.querySelectorAll('.btn-language');
const languageRu = document.querySelector('#languageRu');
const languageEn = document.querySelector('#languageEn');
// let daysLost = document.querySelector('#daysLost').innerHTML = new Date().getDate();
// let hoursLost = document.querySelector('#hoursLost').innerHTML = new Date().getHours();
// let minutsLost = document.querySelector('#minutsLost').innerHTML = new Date().getMinutes();
// let secondsLost = document.querySelector('#secondsLost').innerHTML = new Date().getSeconds();

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
let secondsLost = new Date().getSeconds();
function seconds() {
    console.log(secondsLost);
    if (secondsLost == -1) {
        clearInterval(setSeconds);
    } else {
        document.querySelector('#secondsLost').innerHTML = secondsLost--;
    }
}

const setSeconds = setInterval(seconds, 1000)

