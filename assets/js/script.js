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
setInterval(updateCountndown, 1000);
let time = 86400;
function updateCountndown() {
    let secondsLost = time % 60;
    let minutsLost = Math.floor(time / 60) % 60;
    let hoursLost = Math.floor(time / 60 / 60);
    let daysLost = Math.floor(time / 60 / 60 / 24);
    secondsLost = secondsLost < 10 ? "0" + secondsLost : secondsLost;
    minutsLost = minutsLost < 10 ? "0" + minutsLost : minutsLost;
    hoursLost = hoursLost < 10 ? "0" + hoursLost : hoursLost;
    daysLost = daysLost < 10 ? "0" + daysLost : daysLost;
    document.querySelector('#secondsLost').innerHTML = secondsLost;
    document.querySelector('#minutsLost').innerHTML = minutsLost;
    document.querySelector('#hoursLost').innerHTML = hoursLost;
    document.querySelector('#daysLost').innerHTML = daysLost;
    time--;
}