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
let hoursLost = 23;
let minutsLost = 59;
let secondsLost = 59;

function hours() {
    if (hoursLost == -1) {
        clearInterval(setHours);
    } else {
        document.querySelector('#hoursLost').innerHTML = hoursLost--;
    }
}

function minuts() {
    minutsLost = minutsLost < 10 ? "0" + minutsLost : minutsLost;
    if (minutsLost == -1) {
        minutsLost = 60
    }else if(minutsLost == -1 && hoursLost == -1) {
        
    } else {
        document.querySelector('#minutsLost').innerHTML = minutsLost--;
    }
}

const seconds = setInterval(function() {
    if (secondsLost == -1) {
        secondsLost = 60;
    }else if(secondsLost == -1 && hoursLost == -1) {
        clearInterval(seconds);
    } else {
        document.querySelector('#secondsLost').innerHTML = secondsLost--;
    }
}, 1000)

// setInterval(updateCountndown, 1000);
// let time = 3600;
// function updateCountndown() {
//     const minutes = Math.floor(time / 60 / 60);
//     let seconds = time % 60;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     document.querySelector('#secondsLost').innerHTML = seconds;
//     document.querySelector('#minutsLost').innerHTML = minutes;
//     time--;
// }