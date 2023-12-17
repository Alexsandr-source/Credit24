const changeLanguage = document.querySelectorAll('.btn-language');
const languageRu = document.querySelector('#languageRu');
const languageEn = document.querySelector('#languageEn');
let daysLost = document.querySelector('#daysLost').innerHTML = new Date().getDate();
let hoursLost = document.querySelector('#hoursLost').innerHTML = new Date().getHours();
let minutsLost = document.querySelector('#minutsLost').innerHTML = new Date().getMinutes();
let secondsLost = document.querySelector('#secondsLost');

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
secondsLost = 1;
counter = 0;
const seconds = setInterval(() => {
    console.log(secondsLost);
    if (secondsLost <= 0) {
        clearInterval(seconds);
        secondsLost.innerHTML = counter++;
    } else {
        secondsLost = secondsLost - 1;
    }
    secondsLost.innerHTML
}, 1000)

