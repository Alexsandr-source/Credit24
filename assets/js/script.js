const changeLanguage = document.querySelectorAll('.btn-language');
const changeLanguage2 = document.querySelectorAll('.btn__footer');
const languageRu = document.querySelector('#languageRu');
const languageEn = document.querySelector('#languageEn');
const languageRu2 = document.querySelector('#languageRu2');
const languageEn2 = document.querySelector('#languageEn2');
const prevPartners = document.querySelector('#prevPartners');
const nextPartners = document.querySelector('#nextPartners');
const prevReviews = document.querySelector('#prevReviews');
const nextReviews = document.querySelector('#nextReviews');
const partnersSlider = document.querySelector('.partners__slider-line');
const partnersSlides = Array.from(partnersSlider.querySelectorAll('.partners__slide'));
const reviewsSlider = document.querySelector('.reviews__slider-line');
const reviewsSlides = Array.from(reviewsSlider.querySelectorAll('.reviews__slide'));
const reviewsWrapper = document.querySelector('#reviewsWrapper');
const reviewsWrappers = Array.from(reviewsWrapper.querySelectorAll('.reviews__btn'));

let partnersCount = partnersSlides.length;
let partnersIndex = 0;
let reviewsCount = reviewsSlides.length;
let reviewsIndex = 0;
let wrapperCount = reviewsCount;
let wrapperIndex = reviewsIndex;

// Language //
languageRu.addEventListener('click', changesLanguage);
languageEn.addEventListener('click', changesLanguage);
languageRu2.addEventListener('click', changesLanguage2);
languageEn2.addEventListener('click', changesLanguage2);
function changesLanguage() {
    for(var i = 0; i < changeLanguage.length; ++i) {
        changeLanguage[i].classList.remove('active');
    }
    if (this.className === ('btn-language active')) {
        this.classList.remove('active')
    } else {
        this.classList.add('active');
    }
};
function changesLanguage2() {
    for(var i = 0; i < changeLanguage2.length; ++i) {
        changeLanguage2[i].classList.remove('btn__footer-active');
    }
    if (this.className === ('btn__footer btn__footer-active')) {
        this.classList.remove('btn__footer-active')
    } else {
        this.classList.add('btn__footer-active');
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
//Partners
prevPartners.addEventListener('click', prevPartnersSlide);
nextPartners.addEventListener('click', nextPartnersSlide);
function prevPartnersSlide() {
    partnersIndex = (--partnersIndex + partnersCount) % partnersCount;
    updatePartner();
}
function nextPartnersSlide() {
    partnersIndex = (++partnersIndex) % partnersCount;
    updatePartner();
}
function updatePartner() {
    partnersSlides.forEach((slide, index) => {
    if (index === partnersIndex) {
        slide.style.display = 'flex';
    } else {
        slide.style.display = 'none';
    }
});
}
updatePartner();
//Reviews
prevReviews.addEventListener('click', prevReviewsSlide);
nextReviews.addEventListener('click', nextReviewsSlide);
function prevReviewsSlide() {
    reviewsIndex = (--reviewsIndex + reviewsCount) % reviewsCount;
    wrapperIndex = (--wrapperIndex + wrapperCount) % wrapperCount;
    updateWrapper(wrapperIndex)
    updateReviews();
}
function nextReviewsSlide() {
    reviewsIndex = (++reviewsIndex) % reviewsCount;
    wrapperIndex = (++wrapperIndex) % wrapperCount;
    updateWrapper(wrapperIndex)
    updateReviews();
}
function updateReviews() {
    reviewsSlides.forEach((slide, index) => {
        if (index === reviewsIndex) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}
const updateWrapper = (index) => {
    for (let wrapper of reviewsWrappers) {
        wrapper.classList.remove('reviews__btn-active')
    }
    reviewsWrappers[reviewsIndex].classList.add('reviews__btn-active')
}
reviewsWrappers.forEach((wrapper, index) => {
    wrapper.addEventListener('click', () => {
        reviewsIndex = index;
        updateWrapper(reviewsIndex)
        updateReviews();
    })
})
updateWrapper();
updateReviews();